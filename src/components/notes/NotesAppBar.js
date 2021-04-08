import React, { useRef } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const fileSelector = useRef(null);
  const { active: note } = useSelector((state) => state.notes);
  const noteDate = moment(note.date);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handleUploadPicture = () => {
    fileSelector.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>{noteDate.format("MMMM Do YYYY")}</span>
      <input
        id="fileSelector"
        ref={fileSelector}
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handleUploadPicture}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
