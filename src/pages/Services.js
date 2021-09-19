// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// export const View = (props) => {
//   //   const [user, setUser] = useState(props.user);
//   const [data, setData] = useState([]);

//   const { id } = useParams();

//   useEffect(() => {
//     fetch(http://localhost:3000/posts/show/${id} , {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, [id]);
//   return (
//     <div>
//       <div>required id id - {data.id}</div>
//       <div>required author is - {data.author}</div>
//       <div>required title is - {data.title}</div>
//       <div>required text is - {data.text}</div>
//     </div>
//   );
// };