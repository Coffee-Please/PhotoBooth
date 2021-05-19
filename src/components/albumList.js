import React from "react";
import useFirestore from "./../hooks/useFirestore";
import { useSession } from "./../firebase/userProvider";
import ConfirmDeleteModal from "./confirmDeleteModal";
import ChangeAlbumNameModal from "./changeAlbumName";
import { motion } from 'framer-motion';


const AlbumList = ({ selectedAlbum, setSelectedAlbum }) => {
  // hooks
  const { user } = useSession(); // get the user info
  const userId = user.uid; // get the user id to pass yo modals
  var { docs } = useFirestore(`${user.uid}`); // get the collection
  const albumsList = ["All Images"]; // to hold the list of unique album names

  // on click of album name, set it as the selected album
  const handleClick = (event) => {
    setSelectedAlbum(event.target.innerText);
  };

  // function to list the album names
  const listHandle = (docs) => {
    // check if the album is already listed and is not empty
    if (!albumsList.includes(docs.album) && docs.album != null) {
      albumsList.push(docs.album); // if not, create it and push to list

      // display album name
      return (
        <motion.div className="list-item" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          {/* delete image button sows when the ablum is selected*/}
          {selectedAlbum == docs.album && (
            <ConfirmDeleteModal
              method={"delete"}
              type={"album"}
              albumName={null}
              field={"album"}
              userId={userId}
              selectedItem={selectedAlbum}
              setSelectedItem={setSelectedAlbum}
              selectedAlbum={null}
              setSelectedAlbum={null}
            />
          )}

          {/* change album modal */}
          {selectedAlbum == docs.album && (
            <ChangeAlbumNameModal
              method={"update"}
              field={"album"}
              userId={userId}
              selectedAlbum={selectedAlbum}
              setSelectedAlbum={setSelectedAlbum}
            />
          )}

          {/* list item with the album title */}
          <div className="album-wrapper" onClick={handleClick}>
            <p>{docs.album}</p>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <>
      <div className="album-header">
        <h1>Albums</h1>
      </div>

      <div className="album-list">
        {/* Put the All Images album at the top */}
        <div className="list-item">
          <div className="album-wrapper" onClick={handleClick}>
            <p style={{ fontWeight: "600" }}>All Images</p>
          </div>
        </div>

        {/* check if there are albums && then list the albums */}
        {docs && docs.map((docs) => listHandle(docs))}
      </div>
    </>
  );
};

export default AlbumList;
