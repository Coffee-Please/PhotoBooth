// imports
import React from 'react';
import useFirestore from './../hooks/useFirestore';

// function to display images
const ImageGrid = () => {
  // variables
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    // image grid
    <div className="img-grid">
    {/* check if there are images && if there are, map and inject into page */}
      { docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}>
          <img src={doc.url} alt="uploaded pic" />
        </div>
      ))}
    </div>
  )
}

// exports
export default ImageGrid;
