import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import { getNote } from "../utils/NoteService";

function TrashContainer()
{
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
        if (operation === "trash") {
            const filterList = notesList.filter((ele) => ele._id !== data);
            setNoteList(filterList)
        }
    };

    
    return (
    <div>
        <div className="notes-data">
                {notesList.filter((note) => note.trash).map((note) => <NoteCard note={note}
                    updateNotesList={updateNotesList} trash={true} />)}</div>
    </div>
    )
}
export default TrashContainer;