import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";

import { getNote } from "../utils/NoteService";
import NoteCard from "./NoteCard";

function NotesContainer()
{
    const [notesList, setNoteList] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getNote("/Notes");
  //     setNoteList(res.data.data);
  //   };
  //   fetchData();
  // }, []);

  // const updateNotesList = ({ operation, data }) => {
    
  //   if (operation === "add") setNoteList([data, ...notesList]);

  //   else if (operation === "archive" || operation === "trash") {
  //     const filterList = notesList.filter((ele) => ele._id !== data);
  //     setNoteList(filterList);
  //   } 

  //   else if (operation === "color" || operation === "update") {
  //     const filterList = notesList.map(ele => {
  //       if(ele._id === data._id) return data
  //       else return ele
  //     })
  //     setNoteList([...filterList]);
  //   }

  // };

    return (
    <div>
        <CreateNote/>
        <NoteCard/>
        </div>
    )
}
export default NotesContainer;