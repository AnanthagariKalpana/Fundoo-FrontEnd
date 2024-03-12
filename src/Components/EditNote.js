import React, { useState } from "react";
import { Button, Dialog } from "@mui/material";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import { ListItemIcon } from "@mui/material";
import { updateNote } from "../utils/NoteService";
import "../Styles/EditNote.scss"

function EditNote(props) {

    const { open, id, Title, Description, updateNotesList, onClose, selectedValue, color } = props;


    const [editTitle, setEditTitle] = useState(Title);
    const [editDescription, setEditDescription] = useState(Description);

    const [Archived, isArchived] = useState(false);

    const handleClose = async () => {
        onClose(selectedValue);
        setEditTitle(editTitle);
        setEditDescription(editDescription);
        await updateNote(id, { title: editTitle, description: editDescription, isArchived: isArchived });
        updateNotesList({ operation: "edit", data: { _id: id, title: editTitle, description: editDescription, color: color } })
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };


    // const setEditTitle=(e)=>{
    //     Title=e.target.value
    // }
    // const setEditDesc=(e)=>{
    //     Description=e.target.value;
    // }

    const handleArchive = () => {
        isArchived(true)
        updateNotesList({ operation: "trash", data: id });
    }

    return (
        <div >
            <Dialog onClose={handleClose} open={open} className="dialog">

                <div className='c-div-dialog'>
                    <div className='main-div-dialog'>
                        {!open ? (
                            <div className='create-div'>
                                <input type='text' className="title-txt" placeholder='Title' />
                            </div>)
                            :
                            (<div className='takeNote-div'>
                                <div className='title-div'>
                                    <input className="title-txt" type='text' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                </div>
                                <div className='desc-div-dialog'>
                                    <input type='text' className="note-txt" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                                </div>
                                <div className='close-div- dialog'>
                                    <div className='icons-div-dialog'>
                                        <ListItemIcon className='icons-list'>
                                            <AddAlertOutlinedIcon />
                                            <PersonAddAltOutlinedIcon />
                                            <ColorLensOutlinedIcon />
                                            <CollectionsOutlinedIcon />
                                            <ArchiveOutlinedIcon onClick={handleArchive} />
                                            <MoreVertOutlinedIcon />
                                            <UndoIcon />
                                            <RedoIcon />
                                            <div className="close-icon-dialog">
                                                <Button onClick={handleClose} >
                                                    close
                                                </Button>
                                            </div>
                                        </ListItemIcon>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </Dialog></div>
    )

}
export default EditNote;