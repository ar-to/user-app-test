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
  // get users list from redux store
  const uslist = useSelector(selectUsersList);
  const [selectedCity, setSelectedCity] = React.useState(null);

  useEffect(() => {
    // fetch users list
    dispatch(getUsersListAsync());
  }, [dispatch]);

  function setSelectedUser(e: { originalEvent: Event; value: any; target: { name: string; id: string; value: any; }; }) {
    setSelectedCity(e.target.value)
    // update redux selected user
    // dispatch()
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
