import React from 'react';
import useFirestore from './../hooks/useFirestore';
import { useSession } from "./../firebase/userProvider";
import DeleteItem from './deleteItems';
import { CgTrash } from 'react-icons/cg';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const AlbumList = ({ selectedAlbum, setSelectedAlbum }) => {
  // hooks
  const { user } = useSession(); // get the user info
  const userId = user.uid;
  var { docs } = useFirestore(`${user.uid}`); // get the collection
  const albumsList = ["All Images"]; // to hold the list of unique album names
  const field = 'album';

  // on click of album name, set it as the selected album
  const handleClick = (event) => {
      setSelectedAlbum(event.target.innerText);
  }


  // function to list the album names
  const listHandle = (docs) => {
    // check if the album is already listed and is not empty
    if(!(albumsList.includes(docs.album)) && docs.album != null) {
      albumsList.push(docs.album); // if not, create it and push to list

      // display album name
      return (
        <div className="list-item">
          {/* delete image button sows when the ablum is selected*/}
          {selectedAlbum == docs.album && <button className="ui red basic left floated button" id="delete-btn" alt="Delete" onClick={() => { DeleteItem(field, userId, selectedAlbum, setSelectedAlbum) } }><CgTrash /></button>}

          <div className="album-wrapper" onClick={handleClick}>
            <p>{docs.album}</p>
          </div>
        </div>
      )
    }
  }

  return (
    <>
    <div className="album-header">
      <h1>Albums</h1>
    </div>

    <div className="album-list">
      {/* Put the All Images album at the top */}
      <div className="list-item">
        <div className="album-wrapper" onClick={handleClick}>
          <p>All Images</p>
        </div>
      </div>

      {/* check if there are albums && then list the albums */}
      { docs && docs.map(docs => ( listHandle(docs) ))}
    </div>
    </>
  )
}

export default AlbumList;
