import React, { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { User } from 'features/usersList/types';
import { updateUsersList } from 'features/usersList/usersListSlice';
import { setSelectedUser } from 'features/userForm/userFormSlice';
// UI
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { read } from 'fs';

type Props = { user?: User };

export default function UserForm({ user }: Props): JSX.Element {
  const dispatch = useDispatch();
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState('');
  const [status, setStatus] = React.useState(false);
  const [groups, setGroups] = React.useState(JSON.stringify(['', '']));
  const [features, setFeatures] = React.useState(JSON.stringify(['', '']));
  const [temp, setTemp] = React.useState({});
  const [submitted, setSubmitted] = React.useState({});
  // const [temp, setTemp] = React.useState({
  //   id: 0,
  //   name: '',
  //   status: false,
  // });
  useEffect(() => {
    // setName(user?.name || '');
    // setStatus(user?.status || false);
    // setGroups(JSON.stringify(user?.groups || ['', '']));
    // setFeatures(JSON.stringify(user?.features || ['', '']));
    // setTemp(user ? user : {});
    console.log(
      '..',
      name,
      '\ntemp',
      temp,
      '\nuse',
      user,
      '\nsubmitted',
      submitted
    );
    // if (Object.keys(submitted).length !== 0) {
    //   console.log('submitted');
    //   setId(0);
    //   setName('');
    //   setStatus(false);
    //   setGroups(JSON.stringify(['', '']));
    //   setFeatures(JSON.stringify(['', '']));
    //   setSubmitted({});
    // } else if (Object.keys(temp).length === 0) {
    if (Object.keys(temp).length === 0) {
      console.log('yep\ntemp', temp, '\nuse', user);
      setId(user?.id || 0);
      setName(user?.name || '');
      setStatus(user?.status || false);
      setGroups(JSON.stringify(user?.groups || ['', '']));
      setFeatures(JSON.stringify(user?.features || ['', '']));
    } else {
      // if (Object.keys(temp).length !== 0) {
      console.log('nope\ntemp', temp);
    }
  }, [user, name, status, groups, features, temp]);

  function handleChange(e: { target: HTMLInputElement }) {
    // setText(e.target.value);
  }

  function setTempUser(userTemp: User | {}) {
    // setText(e.target.value);
    setTemp(userTemp);
    if (Object.keys(temp).length !== 0) {
      setId(user ? user.id : 0);
    }
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
    console.log('sub..ready', ready);

    // reset temp so a new user can be updated
    setTemp({});
    setSubmitted(ready);
    console.log('sub-temp', temp);

    // update usersList with new user data per id to prepare for backend and simulate it
    // this could also be done via localstorage to ensure data persists upon reloads
    // further optimization can involve making this a progressive app that can work offline
    dispatch(updateUsersList(ready));
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
      <i>{user?.id || 'select a user'}</i>
      <form onSubmit={handleSubmit}>
        <h5>ID</h5>
        <i id="user-id">{id}</i>
        {/* <i id="user-id">{id || user?.id}</i> */}
        {/* <i id="user-id">{user?.id || 'select a user'}</i> */}
        <h5>Name</h5>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            placeholder="name"
            // value={name || user?.name}
            value={name}
            // value={user?.name || name}
            onChange={(e) => {
              const target = e.target as HTMLTextAreaElement;
              // console.log(JSON.parse(target.value));
              // console.log(typeof target.value);
              setName(target.value);
              setTempUser(user ? user : {});
              // prepareToSubmit({ name: target.value });
            }}
          />
        </div>
        <h5>Status</h5>
        <Checkbox
          onChange={(e) => {
            setStatus(!status);
            setTempUser(user ? user : {});
          }}
          checked={status}
          // checked={user?.status || status}
        ></Checkbox>
        <h5>Groups</h5>
        <span className="p-float-label">
          <InputText
            id="in"
            value={groups}
            // value={user?.groups || groups}
            onChange={(e) => {
              const target = e.target as HTMLTextAreaElement;
              // console.log(JSON.parse(target.value));
              console.log(typeof target.value);
              setGroups(target.value);
            }}
          />
          <label htmlFor="in">format: ["marketing","engineering"]</label>
        </span>
        <h5>Features</h5>
        <span className="p-float-label">
          <InputText
            id="in-feature"
            value={features}
            // value={user?.features || features}
            onChange={(e) => {
              const target = e.target as HTMLTextAreaElement;
              // console.log(JSON.parse(target.value));
              // console.log(typeof target.value);
              setFeatures(target.value);
            }}
          />
          <label htmlFor="in-feature">format: ["read-only-lists"]</label>
        </span>
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
