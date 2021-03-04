import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// redux
import { User } from 'features/usersList/types';
import { getUsersListAsync } from 'features/usersList/usersListSlice';
import { setSelectedUser } from 'features/userForm/userFormSlice';
// UI
import { ListBox } from 'primereact/listbox';

type Props = { usersList?: User[] };

export default function UsersList({ usersList }: Props): JSX.Element {
  const dispatch = useDispatch();
  const [listSelectedUser, setListSelectedUser] = React.useState(null);

  useEffect(() => {
    // fetch users list
    dispatch(getUsersListAsync());
  }, [dispatch]);

  function handleSelectedUser(e: {
    originalEvent: Event;
    value: any;
    target: { name: string; id: string; value: any };
  }) {
    setListSelectedUser(e.target.value);
    // update redux selected user
    dispatch(setSelectedUser(e.target.value))
  }

  return (
    <>
    <div className="p-p-4">
      <h3>Users List</h3>
      <ul>
        <ListBox
          value={listSelectedUser}
          options={usersList}
          onChange={handleSelectedUser}
          optionLabel="name"
          style={{ width: '15rem' }}
        />
      </ul>
    </div>
    </>
  );
}
