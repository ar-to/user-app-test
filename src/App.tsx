import React from 'react';
// mock api
import '@fake-db';
// redux
import { useSelector } from 'react-redux';
import { selectUsersList } from 'features/usersList/usersListSlice';
import { selectedUser } from 'features/userForm/userFormSlice';

// UI
// Components
import UserList from 'features/usersList';
import UserForm from 'features/userForm';
// CSS
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const usersList = useSelector(selectUsersList);
  const activeUser = useSelector(selectedUser);
  return (
    <div className="App">
      <header className="App-header p-p-4">
        <h1>User List App</h1>
      </header>
      <div className="p-grid">
        <div className="p-col">
          <UserList usersList={usersList.value} />
        </div>
        <div className="p-col">
          <UserForm user={activeUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
