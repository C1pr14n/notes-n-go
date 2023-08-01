import React, { useState } from "react";

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const date = new Date();
  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const finalDate = new Intl.DateTimeFormat("en-EN", options).format(date);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !text) return;

    const newNote = {
      title,
      text,
      time: finalDate,
      id: Date.now(),
    };
    onAddNote(newNote);

    setTitle("");
    setText("");
  };

  return (
    <div className="add-note">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          min={3}
          max={30}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="your note"
          minLength={10}
          maxLength={300}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default AddNote;
