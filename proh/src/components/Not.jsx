  import React, { useState, useEffect } from "react";

function Not() {
  const [notes, setNotes] = useState(() =>
    JSON.parse(localStorage.getItem("notes") || "[]")
  );
  const [text, setText] = useState("");
  const [editIdx, setEditIdx] = useState(-1);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = () => {
    if (!text.trim()) return;
    if (editIdx >= 0) {
      const updated = [...notes];
      updated[editIdx] = text;
      setNotes(updated);
    } else {
      setNotes([...notes, text]);
    }
    setText("");
    setEditIdx(-1);
  };

  const startEdit = (i) => {
    setText(notes[i]);
    setEditIdx(i);
  };

  const deleteNote = (i) => {
    setNotes(notes.filter((_, idx) => idx !== i));
    if (editIdx === i) {
      setText("");
      setEditIdx(-1);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-black shadow rounded">
      <h1 className="text-xl font-bold mb-4 text-center">
        React Notepad
      </h1>

      <textarea
        className="w-full h-24 p-2 border rounded focus:outline-none focus:ring"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a note..."
      />

      <div className="flex justify-end mt-2">
        <button
          onClick={saveNote}
          className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-900"
        >
          {editIdx >= 0 ? "Update" : "Add"}
        </button>
      </div>

      <ul className="mt-6 space-y-4">
        {notes.map((note, i) => (
          <li key={i} className="bg-gray-700 p-3 rounded">
            <p>{note}</p>
            <div className="mt-2 flex justify-end space-x-2">
              <button
                onClick={() => startEdit(i)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(i)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Not;
