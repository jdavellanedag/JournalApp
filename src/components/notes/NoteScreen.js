import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happend today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2017/06/01/21/01/landscape-2364579_960_720.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
