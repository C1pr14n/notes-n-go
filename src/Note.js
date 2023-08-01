import React from "react";

const Note = ({ note, onDeleteNote, onFilter }) => {
  return (
    <li className="note" onChange={() => onFilter(note.id)}>
      <h3>{note.title}</h3>
      <div className="note-header">
        <p className="note-time">{note.time}</p>
        <div>
          <span className="note-btn-edit">🖊</span>
          <span className="note-btn-edit" onClick={() => onDeleteNote(note.id)}>
            ✖
          </span>
        </div>
      </div>

      <p>{note.text}</p>
    </li>
  );
};

export default Note;
