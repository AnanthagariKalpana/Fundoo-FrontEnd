import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import { getNote } from "../utils/NoteService";
import NoteCard from "./NoteCard";
import "../Styles/NotesContainer.scss";


function NotesContainer() {

  const [notesList, setNoteList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNote("/Notes");
      setNoteList(res.data.data);
    };
    fetchData();
  }, []);

  const updateNotesList = ({operation, data}) => {
    if (operation === "add") {
      setNoteList([data, ...notesList])
    }
    else if (operation === "archive" || operation === "trash") {
      const filterList = notesList.filter((ele)=> ele._id!==data);
      setNoteList(filterList)
    }
  }

  return (
    <div>
      <div><CreateNote updateNotesList={updateNotesList} /></div>
      <div className="notes-data">
        {notesList.filter((note) => !note.archive && !note.trash)
        .map((note) => 
        <NoteCard note={note} updateNotesList={updateNotesList} />
        )}</div>

    </div>
  )
}
export default NotesContainer;