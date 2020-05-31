import React from 'react';

import withData from '../../with-data';

/* #region NOTE */
// const UserProfile = ({ name, email }) => (
//   <div className="container">
//     <h1>{name}</h1>
//     <h2>{email}</h2>

//     // {
//       // // Posts:
//       // // {data.map(post => (
//       // //   <div className='post' key={post.id}>
//       // //     <h1>{post.title}</h1>
//       // //     <p> {post.body} </p>
//       // //   </div>
//       // // ))}
//     // }
//   </div>
// );
/* #endregion */

/* #region NOTE */
// // class UserProfile extends React.Component {
// //   constructor(props) {
// //     super(props);
//
// //     this.state = {
// //       posts: [],
// //     };
// //   }
//
// //   componentDidMount() {
// //     fetch('https://jsonplaceholder.typicode.com/posts')
// //       .then((res) => res.json())
// //       .then((data) => this.setState({ posts: data.slice(0, 3) }));
// //   }
/* #endregion */

const UserProfile = ({ name, email, data }) => (
  <div className="container">
    <h1>{name}</h1>
    <h2>{email}</h2>
    Posts:
    {data.map((post) => (
      <div className="post" key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

export default withData(
  UserProfile,
  'https://jsonplaceholder.typicode.com/posts'
);
