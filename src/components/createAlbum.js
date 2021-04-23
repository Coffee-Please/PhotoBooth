import React, { useState } from 'react';
import useFirestore from './../hooks/useFirestore';
import { useSession } from "../firebase/userProvider";


const CreateAlbum = () => {
  // hooks
  // const { user } = useSession(); // get the user info
  // const { albums } = useFirestore(`${user.uid}`); // get the albums from the collection
  const [album, setAlbum] = useState(null); // hook to store the selected album
  const [error, setError] = useState(null); // hook to store errors
  // console.log(albums);

  const albums = [];

  // var i = 0;
  //
  // const handleClick = (event) => {
  //     i += 1;
  //     albums.push('Album ' + i);
  //     console.log("a: ", i);
  //     console.log("ab", albums);
  //     setSelectedAlbum(albums);
  //     console.log("selectedAlbum", selectedAlbum);
  // }

  console.log(albums);
  // {/* TODO: onclick, get the images tagged by the album selected */}

  return (
    <>
    {/* get input for file upload */}
      <button className="create-album">+</button>
    </>
  )
}

export default CreateAlbum;
