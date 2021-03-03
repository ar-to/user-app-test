import React from 'react';
import { useDispatch } from 'react-redux';
// UI
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
// redux
import { User } from 'features/usersList/types';

type Props = { user?: User };

export default function UserForm({ user }: Props): JSX.Element {
  // const dispatch = useDispatch();
  const [name, setName] = React.useState(user?.name || '');
  const [status, setStatus] = React.useState(user?.status || false);
  const [groups, setGroups] = React.useState(
    JSON.stringify(user?.groups || ['', ''])
  );
  const [features, setFeatures] = React.useState(
    JSON.stringify(user?.features || ['', ''])
  );

  function handleChange(e: { target: HTMLInputElement }) {
    // setText(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log('..',{ 
      name,
      status,
      groups: JSON.parse(groups),
      features: JSON.parse(features),
    });

    // dispatch(addTodo(text))
  }

  return (
    <div className="card">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <h5>ID</h5>
        <i id="user-id">{user?.id || 'select a user'}</i>
        <h5>Name</h5>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            placeholder="name"
            value={name}
            onChange={(e) => {
              const target = e.target as HTMLTextAreaElement;
              // console.log(JSON.parse(target.value));
              // console.log(typeof target.value);
              setName(target.value);
              // prepareToSubmit({ name: target.value });
            }}
          />
        </div>
        <h5>Status</h5>
        <Checkbox
          onChange={(e) => {
            setStatus(!status);
          }}
          checked={status}
        ></Checkbox>
        <h5>Groups</h5>
        <span className="p-float-label">
          <InputText
            id="in"
            value={groups}
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
            onChange={(e) => {
              const target = e.target as HTMLTextAreaElement;
              // console.log(JSON.parse(target.value));
              // console.log(typeof target.value);
              setFeatures(target.value);
            }}
          />
          <label htmlFor="in-feature">format: ["read-only-lists"]</label>
        </span>
        <Button type="submit" label="Submit" icon="pi pi-check" className="p-button-lg" />
      </form>
    </div>
  );
}
