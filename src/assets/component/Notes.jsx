import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Createnote from "./Createnote";
import Note from "./Note";

const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const saveHandeler = () => {
    if (editToggle) {
      setNotes(
        notes.map((note) =>
          note.id === editToggle ? { ...note, text: inputText } : note
        )
      );
    } else {
      setNotes((previous) => [
        ...previous,
        {
          id: uuid(),
          text: inputText,
        },
      ]);
    }

    setInputText("");
    setEditToggle(null);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  const deleteHandeler = (id) => {
    const newNote = notes.filter((n) => n.id !== id);
    setNotes(newNote);
  };

  return (
    <div className="w-full max-w-4xl p-4">
      {notes.map((note) =>
        editToggle === note.id ? (
          <Createnote
            key={note.id}
            inputText={inputText}
            setInputText={setInputText}
            saveHandeler={saveHandeler}
          />
        ) : (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandeler={deleteHandeler}
          />
        )
      )}
      {editToggle === null && (
        <Createnote
          inputText={inputText}
          setInputText={setInputText}
          saveHandeler={saveHandeler}
        />
      )}
    </div>
  );
};

export default Notes;
