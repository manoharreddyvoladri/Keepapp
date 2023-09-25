import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    const getNotes=async()=>{

      const res=await axios.get("http://localhost:8000/task/");
      console.log(res.data);
      setNotes(res.data);
    }
    getNotes();

  },[]);
  console.log(notes);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  async function deleteNote(id) {
    try{
      const res=await axios.delete(`http://localhost:8000/task/${id}`);
      console.log(res);

    }catch(err){
      console.log(err);
    }
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem._id!== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
