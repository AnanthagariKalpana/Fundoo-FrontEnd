import React, { useState } from "react";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Popper from "@mui/material/Popper";
import '../Styles/NoteCard.scss'
import ListItemIcon from '@mui/material/ListItemIcon';
import { archiveNote, deleteNote, trashNote } from '../utils/NoteService';


function NoteCard({ note, updateNotesList, trash = false }) {
    const [anchorMenu, setAnchorMenu] = useState(null);
    const openOption = Boolean(anchorMenu);
    const eventPopper = openOption ? "simple-popper" : undefined;
    const [open, setOpen] = useState(false);
    const id = note._id;


    const handleIconsClick = async (action, col) => {
        if (action === "archive") {
            await archiveNote(id)
            updateNotesList({ operation: "archive", data: id })
        }
        if (action === "trash") {
            await trashNote(id);
            updateNotesList({ operation: "trash", data: id });
        }
    };
    const handleMenu = (eventPopper) => {
        setAnchorMenu(anchorMenu ? null : eventPopper.currentTarget);
    };

    const handleDelete = async() => {
        console.log("dddddddddddddddd");
        await deleteNote(id);
        updateNotesList({ operation: "trash", data: id });
    };
    








    return (
        <div>
            <div className='main'>
                <div className='card-tlt' >
                    <span>{note.title}</span>
                </div>
                <div className='desc' >
                    <span>{note.description}</span>
                </div>
                {trash ?
                    (
                        <div >
                            <ListItemIcon className="delete-icons">
                                <DeleteForeverIcon onClick={handleDelete} />
                                <RestoreFromTrashIcon onClick={() => { handleIconsClick("trash") }} />
                            </ListItemIcon>
                        </div>
                    )
                    : (<div >
                        <ListItemIcon className='card-icons'>
                            <AddAlertOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorLensOutlinedIcon />
                            <CollectionsOutlinedIcon />
                            <ArchiveOutlinedIcon onClick={() => handleIconsClick("archive")} style={{ cursor: "pointer" }} />
                            <MoreVertOutlinedIcon aria-describedby={eventPopper} onClick={handleMenu} style={{ cursor: "pointer" }} />
                        </ListItemIcon>

                    </div>)
                }
            </div>
            <Popper id={eventPopper} open={openOption} anchorEl={anchorMenu}>
                <div className="action-list">
                    <p style={{ cursor: "pointer" }} onClick={() => handleIconsClick("trash")}>Delete Note</p>
                    <p>Add Label</p>
                    <p>Add drawing</p>
                    <p>Make a Copy</p>
                    <p>Show Checkbox</p>
                    <p>Version History</p>
                </div>
            </Popper>
        </div>
    )
}
export default NoteCard;