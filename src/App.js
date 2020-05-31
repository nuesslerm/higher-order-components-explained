import React from 'react';

import UserProfile from './components/user-profile/user-profile.component';
import UserList from './components/user-list/user-list.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      {
        /* #region NOTE */
        // // <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
        /* #endregion */
      }
      <UserList />
      <UserProfile
        name="Markus"
        email="nuesslerm@gmail.com"
        // dataSource="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
