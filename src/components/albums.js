import React from 'react';
import useFirestore from './../hooks/useFirestore';
import { useSession } from "../firebase/userProvider";


const Albums = () => {
  // hooks
  // const { user } = useSession(); // get the user info
  // const { albums } = useFirestore(`${user.uid}`); // get the albums from the collection
  // console.log(albums);
  const list = ["A", "B", "C"];
  console.log(list);

  return (
    <>
    <div className="album-header">Albums</div>

    <div className="album-list">
    { list && list.map(list => (
      <div className="album-wrapper">
        <a>{list}</a>
      </div>
    ))}
    </div>

    {/* get input for file upload */}
      <button className="create-album">+</button>
    </>
  )
}

export default Albums;
