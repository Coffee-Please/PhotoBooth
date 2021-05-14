// Imports
import React, { useState } from "react";
import ProgressBar from "./progressBar";

// React function to upload a file
const UploadForm = ({ selectedAlbum, setSelectedAlbum, setAlbumName }) => {
  // Hooks
  const [file, setFile] = useState(null); // hook to store the uploaded file

  const [error, setError] = useState(null); // hook to store errors

  // Variables
  const types = ["image/png", "image/jpeg"]; // allowed types of file formats

  // Functions
  const changeHandler = (event) => {
    let selected = event.target.files[0]; // select only the first file

    // if there is a file and it is and allowed file format
    if (selected && types.includes(selected.type)) {
      setFile(selected); // set the selected file
      setError(""); // there is no error; clear any previous error
    } else {
      setFile(null); // reset file hook
      setError("Please selected and image file (png or jpeg)"); // send error msg
    }
  };

  return (
    // Select file form
    <form className="uploadForm">
      {/* get input for file upload */}
      {/* <label className="upload">
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label> */}

      <label>
        <input
          type="file"
          onChange={changeHandler}
          style={{ display: "none" }}
        />
        <div
          className="album-wrapper"
          style={{ margin: "auto", textAlign: "center", width: "40px" }}
        >
          <p>+</p>
        </div>
      </label>

      {/* display the output to the client */}
      <div className="output">
        {/* check for error && if error output error */}
        {error && <div className="error">{error}</div>}

        {/* check for file && if file output filename */}
        {file && <div>{file.name}</div>}

        {/* check for file && if file output progress bar */}
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            selectedAlbum={selectedAlbum}
            setSelectedAlbum={setSelectedAlbum}
            setAlbumName={setAlbumName}
          />
        )}
      </div>
    </form>
  );
};

// Exports
export default UploadForm;
