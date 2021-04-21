// imports
import React from 'react';
import useFirestore from './../hooks/useFirestore';

// function to display images
const ImageGrid = ({ setSelectedImage }) => {
  // variables
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    // image grid
    <div className="img-grid">
    {/* check if there are images && if there are, map and inject into page */}
      { docs && docs.map(doc => (
        // when the image is clicked, send it back to the modal
        <div className="img-wrap" key={doc.id} onClick={() => setSelectedImage(doc.url)}>
          <img src={doc.url} alt="uploaded pic" />
        </div>
      ))}
    </div>
  )
}

// exports
export default ImageGrid;
