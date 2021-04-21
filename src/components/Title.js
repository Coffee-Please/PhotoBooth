// imports
import React from 'react';
import UploadForm from './uploadForm';
import ImageGrid from './imageGrid';

const Title = () => {
  return (
    <>
      <div className="title">
        <h1>Album Name</h1>

        <UploadForm />

        <ImageGrid />
      </div>
    </>
  )
}

// exports
export default Title;
