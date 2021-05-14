// imports
import React from 'react';
import useFirestore from './../hooks/useFirestore';
import { motion } from 'framer-motion';
import { useSession } from "../firebase/userProvider";


// function to display images
const ImageGrid = ({ setSelectedImage, selectedAlbum }) => {
  // hooks
  const { user } = useSession(); // get the user info
  const { docs } = useFirestore(`${user.uid}`); // get the collection


  // function to filter images based on albums
  const filterImages = (docs) => {
    // if the album is selected
    if(selectedAlbum == docs.album) {
      // display album's images
      // when the image is clicked, send it back to the modal
      return (
        <motion.div className="img-wrap" key={docs.id} layout whileHover={{ opacity: 1 }} onClick={() => setSelectedImage(docs.url)}>
          <motion.img src={docs.url} alt="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
        </motion.div>
      )
    }
    // if the album is selected
    if(selectedAlbum == "All Images") {
      // display album's images
      // when the image is clicked, send it back to the modal
      return (
        <motion.div className="img-wrap" key={docs.id} layout whileHover={{ opacity: 1 }} onClick={() => setSelectedImage(docs.url)}>
          <motion.img src={docs.url} alt="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
        </motion.div>
      )
    }
  }


  return (
    // image grid
    <div className="img-grid">
    {/* check if there are images && if there are, map and inject into page */}
      { docs && docs.map(docs => ( filterImages(docs) ))}
    </div>
  )
}

// exports
export default ImageGrid;
