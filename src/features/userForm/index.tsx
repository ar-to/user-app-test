import React, { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { User } from 'features/usersList/types';
import { updateUsersList } from 'features/usersList/usersListSlice';
import {
  setSelectedUser,
  setUserForLaterProcessing,
} from 'features/userForm/userFormSlice';
// UI
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

import _ from 'lodash';

type Props = { user?: User };
interface ValidationError {
  name?: string;
  status?: string;
  groups?: string;
  features?: string;
}

export default function UserForm({ user }: Props): JSX.Element {
  const dispatch = useDispatch();
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState('');
  const [status, setStatus] = React.useState(false);
  const [groups, setGroups] = React.useState(JSON.stringify(['', '']));
  const [features, setFeatures] = React.useState(JSON.stringify(['', '']));
  const [temp, setTemp] = React.useState({});
  const [
    validationErrors,
    setValidationErrors,
  ] = React.useState<ValidationError>({
    name: '',
    status: '',
    groups: '',
    features: '',
  });
  useEffect(() => {
    // update the form with a new user only if there is no active user being updated
    if (Object.keys(temp).length === 0) {
      setId(user?.id || 0);
      setName(user?.name || '');
      setStatus(user?.status || false);
      setGroups(JSON.stringify(user?.groups || ['', '']));
      setFeatures(JSON.stringify(user?.features || ['', '']));
    }
  }, [user, name, status, groups, features, temp]);

  function setTempUser(userTemp: User | {}) {
    setTemp(userTemp);
    if (Object.keys(temp).length !== 0) {
      setId(user ? user.id : 0);
    }
  }

  function handleChange(event: any) {
    event.preventDefault();
    const target = event.target as HTMLTextAreaElement;
    const { name, value } = target;

    switch (name) {
      case 'name':
        setValidationErrors({
          name: value.length < 3 ? 'Full Name must be 3 characters long!' : '',
        });
        setName(value);
        break;
      case 'status':
        setValidationErrors({
          status: _.isBoolean(value) ? 'status needs to be selected!' : '',
        });
        setStatus(!status);
        break;
      case 'groups':
        // needs unit testing
        // setValidationErrors({
        //   groups: !_.includes(groupsRef, value)
        //     ? 'groups should be part of the available groups list!'
        //     : '',
        // });
        setGroups(value);
        break;
      case 'features':

        // needs unit testing
        // setValidationErrors({
        //   groups: _.includes(featuresRef, value)
        //     ? 'features should be part of the features list!'
        //     : '',
        // });
        setFeatures(value);
        break;
      default:
        break;
    }

    // needed to track users being updated
    setTempUser(user ? user : {}); //ensures input can be changed
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    let ready: User = {
      id,
      name,
      status,
      groups: JSON.parse(groups),
      features: JSON.parse(features),
    };

    // reset temp so a new user can be updated
    setTemp({});

    // update usersList with new user data per id to prepare for backend and simulate it
    // this could also be done via localstorage to ensure data persists upon reloads
    // further optimization can involve making this a progressive app that can work offline
    dispatch(updateUsersList(ready));
    // optional: push each new updated user to redux for offline tracking to later send to backend for processing
    dispatch(setUserForLaterProcessing(ready));
    // reset the selected user
    dispatch(
      setSelectedUser({
        id: 0,
        name: '',
        status: false,
      })
    );
  }

  return (
    <div className="card p-p-4">
      <h3>User Form</h3>
      <form onSubmit={handleSubmit}>
        <h5>ID</h5>
        <i id="user-id">{id}</i>
        <h5>Name</h5>
        <div className="p-field">
          <InputText
            id="name"
            aria-describedby="name-help"
            className="p-d-block"
            placeholder="name"
            value={name}
            onChange={handleChange}
            name="name"
          />
          <small id="name-help" className="p-error p-d-block">
            {validationErrors.name}
          </small>
        </div>
        <h5>Status</h5>
        <Checkbox
          onChange={handleChange}
          name="status"
          checked={status}
        ></Checkbox>
        <h5>Groups</h5>
        <div className="p-field">
          <label htmlFor="groups">format: ["marketing","engineering"]</label>
          <InputText
            id="groups"
            aria-describedby="groups-help"
            className="p-d-block"
            placeholder="groups"
            value={groups}
            onChange={handleChange}
            name="groups"
          />
          <small id="groups-help" className="p-error p-d-block">
            {validationErrors.groups}
          </small>
        </div>
        <h5>Features</h5>
        <div className="p-field">
          <label htmlFor="features">format: ["read-only-lists"]</label>
          <InputText
            id="features"
            aria-describedby="features-help"
            className="p-d-block"
            placeholder="features"
            value={features}
            onChange={handleChange}
            name="features"
          />
          <small id="features-help" className="p-error p-d-block">
            {validationErrors.features}
          </small>
        </div>
        <div className="p-p-4">
          <Button
            type="submit"
            label="Submit"
            icon="pi pi-check"
            className="p-button-lg"
          />
        </div>
      </form>
    </div>
  );
}
