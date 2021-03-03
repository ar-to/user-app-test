import React from 'react';
import { useDispatch } from 'react-redux';
// UI
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
// redux
import { User } from 'features/usersList/types';

type Props = { user?: User };

export default function UserForm({ user }: Props): JSX.Element {
  // const dispatch = useDispatch();
  const [name, setName] = React.useState(user?.name || "");
  const [status, setStatus] = React.useState(user?.status || false);
  const [groups, setGroups] = React.useState(
    JSON.stringify(user?.groups || ["", ""])
  );
  const [features, setFeatures] = React.useState(
    JSON.stringify(user?.features || ["", ""])
  );
  const [submitObject, setSubmitObject] = React.useState({});

  function handleChange(e: { target: HTMLInputElement }) {
    // setText(e.target.value);
  }

  function prepareToSubmit(value: object): void {
    // update only the provide key-value
    setSubmitObject({ ...value, ...submitObject });
    console.log(submitObject)
  }

  function handleSubmit(e: any) {
    e.preventDefault();

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
              prepareToSubmit({name: target.value})
            }}
          />
        </div>
        <h5>Status</h5>
        {/* <Checkbox
          onMouseDown={(e) => {
            console.log(e);
            setChecked(!checked);
          }}
          checked={checked}
        ></Checkbox> */}
        <Checkbox
          onChange={(e) => {
            // console.log(e);
            setStatus(!status);
            prepareToSubmit({status: !status})
          }}
          checked={status}
        ></Checkbox>
        {/* {user?.groups && (
          <> */}
            <h5>Groups</h5>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-field">
              <label htmlFor="groups-input" className="p-d-block">format: ["marketing","engineering"]</label>
              <InputText
                id="groups-input"
                className="p-invalid p-d-block"
                placeholder="groups"
                value={groups}
                onChange={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  console.log(JSON.parse(target.value));
                  console.log(typeof target.value);
                  setGroups(target.value);
                  prepareToSubmit({groups: target.value})
                }}
              />
              </span>
            </div>
          {/* </>
        )} */}
        {/* {user?.features && (
          <> */}
            <h5>Features</h5>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-field">
              <label htmlFor="groups-input" className="p-d-block">format: ["read-only-lists"]</label>
              <InputText
                id="groups-input"
                placeholder="groups"
                value={features}
                onChange={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  console.log(JSON.parse(target.value));
                  console.log(typeof target.value);
                  setFeatures(target.value);
                  prepareToSubmit({features: target.value})
                }}
              />
              </span>
            </div>
          {/* </>
        )} */}
      </form>
    </div>
  );
}
