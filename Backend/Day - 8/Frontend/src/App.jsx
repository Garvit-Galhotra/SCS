import { useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  axios.get("http://localhost:3000/notes").then((res) => {
    setNotes(res.data.notes);
  });

  return (
    <>
      <div className="notes">
        {notes.map((note, id) => {
          return (
            <div className="note" key={id}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
