import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { User } from 'features/usersList/types';
import {
  getUsersListAsync,
  selectUsersList,
  usersList as ls,
} from 'features/usersList/usersListSlice';
// UI
import { ListBox } from 'primereact/listbox';

type Props = { userList?: User[] };

export default function UsersList({ userList }: Props): JSX.Element {
  const dispatch = useDispatch();
  const uslist = useSelector(selectUsersList);
  const [text, setText] = React.useState('');
  const [list, setList] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState(null);

  console.log('s', uslist);
  useEffect(() => {
    dispatch(getUsersListAsync());
    // dispatch(ls([
    //     {
    //       id: 1,
    //       name: 'Joe',
    //       status: true,
    //       features: ["read-only-lists"]
    //     },
    //   ]))
  }, [list, dispatch]);

  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }

//   function setSelectedUser(e: { target: HTMLInputElement }) {
  function setSelectedUser(e: { originalEvent: Event; value: any; target: { name: string; id: string; value: any; }; }) {
    setSelectedCity(e.target.value)
    // update redux selected user
    // dispatch()
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }
    // dispatch(addTodo(text))

    setText('');
  }

  return (
    <>
      <h1>Users List</h1>
      <ul>
        <ListBox
          value={selectedCity}
          options={uslist.value}
        //   onChange={(e) => setSelectedCity(e.value)}
          onChange={setSelectedUser}
          optionLabel="name"
          style={{ width: '15rem' }}
        />
      </ul>
    </>
  );
}
