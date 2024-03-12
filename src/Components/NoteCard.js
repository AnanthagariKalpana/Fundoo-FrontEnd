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
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import { archiveNote, deleteNote, trashNote, updateNote } from '../utils/NoteService';
import EditNote from "./EditNote";

function NoteCard({ note, updateNotesList, trash = false, cont = false }) {
    const [anchorMenu, setAnchorMenu] = useState(null);
    const [anchorColor, setAnchorColor] = useState(null);
    const openOption = Boolean(anchorMenu);
    const openColor = Boolean(anchorColor);
    const colorPopper = openColor ? "simple-popper" : undefined;
    const eventPopper = openOption ? "simple-popper" : undefined;
    const [openEditNote, setOpenEditNote] = useState(false);
    const id = note._id
    let Title = note.title, Description = note.description

    //const [currentColor, setCurrentColor] = useState(note.color || "#FFFFFF");


    const handleIconsClick = async (action, col) => {
        if (action === "archive") {
            await archiveNote(id)
            updateNotesList({ operation: "archive", data: id })
        }
        if (action === "trash") {
            await trashNote(id);
            updateNotesList({ operation: "trash", data: id });
        }
        if (action === "color") {
            //setCurrentColor(col);
            let color = note.color;
            //color=col;
            console.log(id);
            await updateNote(id, { color: col })
            updateNotesList({ operation: "color", data: { ...note, color: col } })

        }
    };
    const handleMenu = (eventPopper) => {
        setAnchorMenu(anchorMenu ? null : eventPopper.currentTarget);
    };

    const handleDelete = async () => {
        await deleteNote(id);
        updateNotesList({ operation: "trash", data: id });
    };

    const handleColor = (colorPopper) => {
        setAnchorColor(anchorColor ? null : colorPopper.currentTarget);
    };
    const handleClickOpen = () => {
        setOpenEditNote(!openEditNote);
    };

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState();


    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };



    return (
        <div className='main'
            style={{ backgroundColor: `${note.color ? note.color : "#FFFFFF"}` }}
        >
            <div className='card-tlt' onClick={handleClickOpen} >
                <span>{note.title}</span>
            </div>
            <div className='desc' onClick={handleClickOpen}>
                <span>{note.description}</span>
            </div>
            {/* If the note is trashed then only this div will be excute trash ? "True" : "false" */}
            {trash ?
                (
                    <div >
                        <ListItemIcon className="delete-icons">
                            <DeleteForeverIcon onClick={handleDelete} />
                            <RestoreFromTrashIcon onClick={() => { handleIconsClick("trash") }} />
                        </ListItemIcon>
                    </div>
                )
                // here again we are checking that if note archive or not //only chaning ArchiveIcon
                : (cont ?
                    (
                        <div >
                            <ListItemIcon className='card-icons'>
                                <AddAlertOutlinedIcon />
                                <PersonAddAltOutlinedIcon />
                                <ColorLensOutlinedIcon
                                    aria-describedby={colorPopper}
                                    onClick={handleColor}
                                    style={{ cursor: "pointer" }}
                                    className="color-btn" />
                                <CollectionsOutlinedIcon />
                                <ArchiveOutlinedIcon onClick={() => handleIconsClick("archive")} style={{ cursor: "pointer" }} />
                                <MoreVertOutlinedIcon aria-describedby={eventPopper} onClick={handleMenu} style={{ cursor: "pointer" }} />
                            </ListItemIcon>
                        </div>
                    ) :
                    (<div>
                        <ListItemIcon className='card-icons'>
                            <AddAlertOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorLensOutlinedIcon
                                aria-describedby={colorPopper}
                                onClick={handleColor}
                                style={{ cursor: "pointer" }}
                                className="color-btn" />
                            <CollectionsOutlinedIcon />
                            <UnarchiveOutlinedIcon onClick={() => handleIconsClick("archive")} style={{ cursor: "pointer" }} />
                            <MoreVertOutlinedIcon aria-describedby={eventPopper} onClick={handleMenu} style={{ cursor: "pointer" }} />
                        </ListItemIcon>
                    </div>)
                )}

            <EditNote
            open={openEditNote}
            id={id} Title={Title} Description={Description}
                selectedValue={selectedValue}
                onClose={setOpenEditNote} updateNotesList={updateNotesList}
            />


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
            <Popper id={colorPopper} open={openColor} anchorEl={anchorColor}>
                <div class="color-palate-cnt" >
                    <div
                        className="col1"
                        onClick={() => handleIconsClick("color", "#FFFFFF")}>
                    </div>
                    <div
                        className="col2"
                        mattooltip="Coral"
                        onClick={() => handleIconsClick("color", "#efbab6")}
                    ></div>
                    <div
                        className="col3"
                        mattooltip="Peach"
                        onClick={() => handleIconsClick("color", "#f69260")}
                    ></div>
                    <div
                        className="col4"
                        mattooltip="Sand"
                        onClick={() => handleIconsClick("color", "#ded68e")}
                    ></div>
                    <div
                        className="col5"
                        mattooltip="Mint"
                        onClick={() => handleIconsClick("color", "#8ebe6a")}
                    ></div>
                    <div
                        className="col6"
                        mattooltip="Sage"
                        onClick={() => handleIconsClick("color", "#199f7b")}
                    ></div>
                    <div
                        className="col7"
                        mattooltip="Fog"
                        onClick={() => handleIconsClick("color", "#1f88c5")}
                    ></div>
                    <div
                        className="col8"
                        mattooltip="Storm"
                        onClick={() => handleIconsClick("color", "#9ed3ef")}
                    ></div>
                    <div
                        className="col9"
                        mattooltip="Dusk"
                        onClick={() => handleIconsClick("color", "#d296ea")}
                    ></div>
                    <div
                        className="col10"
                        mattooltip="Blossom"
                        onClick={() => handleIconsClick("color", "#f69e87")}
                    ></div>
                    <div
                        className="col11"
                        mattooltip="Clay"
                        onClick={() => handleIconsClick("color", "#f1d892")}
                    ></div>
                    <div
                        className="col12"
                        mattooltip="Chalk"
                        onClick={() => handleIconsClick("color", "#a3a3f6")}
                    ></div>
                </div>
            </Popper>
        </div>
    )
}
export default NoteCard;