// imports
import React from 'react';
import useFirestore from './../hooks/useFirestore';
import { motion } from 'framer-motion';
import { useSession } from "../firebase/userProvider";


// function to display images
const ImageGrid = ({ setSelectedImage }) => {
  // hooks
  const { user } = useSession(); // get the user info
  const { docs } = useFirestore(`${user.uid}`); // get the collection

  return (
    // image grid
    <div className="img-grid">
    {/* check if there are images && if there are, map and inject into page */}
      { docs && docs.map(doc => (
        // when the image is clicked, send it back to the modal
        <motion.div className="img-wrap" key={doc.id} layout whileHover={{ opacity: 1 }} onClick={() => setSelectedImage(doc.url)}>
          <motion.img src={doc.url} alt="uploaded pic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
        </motion.div>
      ))}
    </div>
  )
}

// exports
export default ImageGrid;
