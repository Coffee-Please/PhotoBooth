import React, { useState } from 'react';
import useFirestore from './../hooks/useFirestore';
import GetAlbums from './../hooks/getAlbums';

import { useSession } from "./../firebase/userProvider";


const AlbumList = ({ setSelectedAlbum, setAlbumList }) => {
  // hooks
  const { user } = useSession(); // get the user info
  var { docs } = useFirestore(`${user.uid}`); // get the collection

  const { albums } = GetAlbums(`${user.uid}`);
  const arr = ["All Images"]; // to hold the list of unique album names
console.log("arr", arr);
console.log("albums docs AL: ", albums);

  // {/* TODO: onclick, get the images tagged by the album selected */}
// on click of album name, set it as the selected album
  const handleClick = (event) => {
      setSelectedAlbum(event.target.innerText);
      console.log("CLICKED: ", event.target.innerText);
  }

// function to list the album names
const listHandle = (docs) => {
  // check if the album is already listed and is not empty
  if(!(arr.includes(docs.album)) && docs.album != null) {
    arr.push(docs.album); // if not, create it and push to list

    // display album name
    return (
    <div className="album-wrapper" onClick={handleClick}>
      <p>{docs.album}</p>
    </div>
    )
  }
}


  return (
    <>
    <div className="album-header">Albums</div>

    <div className="album-list">
      {/* Put the All Images album at the top */}
      <div className="album-wrapper" onClick={handleClick}>
        <p>All Images</p>
      </div>

      {/* check if there are albums && then list the albums */}
      { docs && docs.map(docs => ( listHandle(docs) ))}
    </div>
    </>
  )
}

export default AlbumList;
