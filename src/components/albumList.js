import React, { useState } from 'react';
import useFirestore from './../hooks/useFirestore';
import { useSession } from "./../firebase/userProvider";


const AlbumList = () => {
  // hooks
  const { user } = useSession(); // get the user info
  var { docs } = useFirestore(`${user.uid}`); // get the collection


  return (
    <>
    <div className="album-header">Albums</div>

    <div className="album-list">
    {/* check if there are albums && then list the albums */}
    { docs && docs.map(docs => (
      <div className="album-wrapper">
        <a href="">{docs.id}</a>
      </div>
    ))}
    </div>
    </>
  )
}

export default AlbumList;
