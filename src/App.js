import Navigation from "./Navigation";
import NoteList from "./NoteList";
import Button from "./Button.js";
import AddNote from "./AddNote.js";
import { useState } from "react";

const initialNotes = [
  {
    title: "test 1",
    text: "dsfjn sldkfjn  ljk ",
    time: "Jul 24, 07:30 AM",
    id: 1,
  },
];

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filterBy, setFilterBy] = useState("all");

  const handleAddNewNote = (newNote) => {
    setNotes(() => [...notes, newNote]);
    setIsFormOpen(false);
  };

  const handleOpenForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleDeleteNote = (id) => {
    setNotes((notes) => notes.filter((n) => n.id !== id));
  };

  const handleFilter = (id) => {
    setNotes((notes) => notes.map((note) => note.id === id && note));
  };

  return (
    <div className="app">
      <Navigation filterBy={filterBy} onFilter={setFilterBy} />

      {isFormOpen && <AddNote onAddNote={handleAddNewNote} />}

      {notes.length !== 0 ? (
        <NoteList
          notes={notes}
          onDeleteNote={handleDeleteNote}
          filterBy={filterBy}
          onFilter={handleFilter}
        />
      ) : (
        <h3 className="default-list-title">Start adding your notes</h3>
      )}

      <Button onClick={handleOpenForm} />
    </div>
  );
}

export default App;
