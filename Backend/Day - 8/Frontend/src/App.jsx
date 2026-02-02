import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get("http://localhost:3000/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title.value, description.value);
    axios
      .post("http://localhost:3000/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  function handleDelete(noteId) {
    axios.delete("http://localhost:3000/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="note-create-form">
        <input name="title" type="text" placeholder="Enter title" />
        <input name="description" type="text" placeholder="Enter Description" />
        <button>Create Form</button>
      </form>
      <div className="notes">
        {notes.map((note, id) => {
          return (
            <div className="note" key={id}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  handleDelete(note._id);
                }}
              >
                Delete
              </button>
              <button>Update Form</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
