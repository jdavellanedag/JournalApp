import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/06/30/02/39/landscape-2457010_960_720.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Hoy es un buen dia</p>
        <p className="journal__entry-content">
          Eiusmod in ut ipsum in nostrud ipsum quis pariatur id deserunt.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
