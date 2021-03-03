import React from 'react';
// mock api
import "@fake-db"
// UI
// Components
import UserList from 'features/usersList';
import UserForm from 'features/userForm';
// CSS
import 'primeflex/primeflex.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>learn</p>
        <div className="p-grid">
          <div className="p-col">
            <UserList />
          </div>
          <div className="p-col">
            <UserForm />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
