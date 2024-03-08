import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import { getNote } from "../utils/NoteService";


function ArchiveContainer() {
    const [notesList, setNoteList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getNote("/Notes");
            console.log(res);
            setNoteList(res.data.data);
        };
        fetchData();
    }, []);

    const updateNotesList = ({ operation, data }) => {
        if (operation === "archive") {
            const filterList = notesList.filter((ele) => ele._id !== data);
            setNoteList(filterList)
        }
    }

    return (
        <>
            <div className="notes-data">
                {notesList.filter((note) => note.archive).map((note) => <NoteCard note={note}
                    updateNotesList={updateNotesList} />)}</div>
        </>
    )
}
export default ArchiveContainer;