import React from "react";

import Note from "./Note";

const NoteList = ({ notes, onDeleteNote, filterBy, onFilter }) => {
  let filteredNotes;

  if (filterBy === "all") filteredNotes = notes;
  if (filterBy === "name")
    filteredNotes = notes
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <ul className="list">
      {filteredNotes.map((note) => (
        <Note
          note={note}
          key={`${note.title}${note.time}`}
          onDeleteNote={onDeleteNote}
          onFilter={onFilter}
        />
      ))}
    </ul>
  );
};

export default NoteList;
