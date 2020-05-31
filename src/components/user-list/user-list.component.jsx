import React from 'react';

import withData from '../../with-data';

/* #region NOTE */
// // const UserList = ({ data }) => (
// //   <div className='container user-list'>
// //     <h1> Users List </h1>
// //     {data.map(user => (
// //       <div className='post' key={user.id}>
// //         <h1> {user.name} </h1>
// //         <h2> {user.email} </h2>
// //       </div>
// //     ))}
// //   </div>
// // );
/* #endregion */

/* #region NOTE */
// // class UserList extends React.Component {
// //   constructor(props) {
// //     super(props);
//
// //     this.state = {
// //       users: [],
// //     };
// //   }
//
// //   componentDidMount() {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //     .then((res) => res.json())
// //     .then((data) => this.setState({ users: data.slice(0, 3) }));
// //   }
/* #endregion */

const UserList = ({ data }) => (
  <div className="container">
    <h1> Users List</h1>
    {data.map((user) => (
      <div className="user-list" key={user.id}>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
      </div>
    ))}
  </div>
);

export default withData(
  UserList
  // 'https://jsonplaceholder.typicode.com/users'
);
