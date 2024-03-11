//import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, IconButton, TextField, Menu } from '@mui/material';
import React, { useState } from 'react';
import { createNote } from '../utils/NoteService';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import "../Styles/CreateNote.scss"
import { ListItemIcon } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';


const CreateNote = ({ updateNotesList }) => {
    const [noteTitle, setNoteTitle] = useState(" ");
    const [noteDescription, setNoteDescription] = useState("");
    const [isArchived, setIsArchived] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [noteColor, setNoteColor] = useState("#ffffff");


    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const handleNote = async () => {
        if (noteTitle.trim() || noteDescription.trim()) {
            const data = {
                title: noteTitle,
                description: noteDescription,
                isArchived,
                color: noteColor,
            }
            const res = await createNote(data);
            updateNotesList({operation:"add",data:res.data.data})
        }
    };
    const handleArchive = () => {
        setIsArchived(true);
    };

    return (

        <>
            <div className='c-div'>
                <div className='main-div'>
                    {!open ? (
                        <div className='create-div' onClick={handleClick}>
                            <input type='text' className="title-txt" placeholder='Title' />
                        </div>)
                        :
                        (<div className='takeNote-div'>
                            <div className='title-div'>
                                <input className="title-txt" type='text' placeholder='Title' onChange={(e) => setNoteTitle(e.target.value)} />
                            </div>
                            <div className='desc-div'>
                                <input type='text' className="note-txt" placeholder='Take a Note' onChange={(e) => setNoteDescription(e.target.value)} /></div>
                            <div className='close-div'>
                                <div className='icons-div'>
                                    <ListItemIcon className='icons-list'>
                                        <AddAlertOutlinedIcon />
                                        <PersonAddAltOutlinedIcon />
                                        <ColorLensOutlinedIcon />
                                        <CollectionsOutlinedIcon />
                                        <ArchiveOutlinedIcon onClick={handleArchive}/>
                                        <MoreVertOutlinedIcon/>
                                        <UndoIcon/>
                                        <RedoIcon/>
                                    </ListItemIcon>
                                </div>
                                <div>
                                    <button className='close-btn' onClick={() => {
                                        handleClick()
                                        handleNote()
                                    }}>
                                        close
                                    </button>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </>
        // <Accordion>
        //   <AccordionSummary>
        //     <div>
        //     <TextField
        //     placeholder='Title'
        //       value={noteTitle}
        //       fullWidth
        //       onChange={(e) => setNoteTitle(e.target.value)}

        //     />
        //     </div>
        //   </AccordionSummary>
        //   <AccordionDetails className='note-details'>
        //     <div className='note-cnt'>
        //       <TextField
        //         placeholder='Take a Note.....'
        //         multiline
        //         fullWidth
        //         value={noteDescription}
        //         onChange={(e) => setNoteDescription(e.target.value)}
        //         margin='none'
        //       />
        //       <Grid
        //       container
        //       justifyContent="space-between"
        //       alignItems="center"
        //       >
        //         <Grid item>
        //             <IconButton onClick={(e)=>(setAnchorEl(e.currentTarget))}>
        //                 <ColorLens/>
        //             </IconButton>
        //             <Menu
        //             anchorEl={anchorEl}
        //             open={Boolean(anchorEl)}
        //             onClose={() => setAnchorEl(null)}
        //             style={{ display: "flex" }}
        //           >
        //           </Menu>
        //           <IconButton>
        //             <Image/>
        //           </IconButton>
        //           {!isArchived && (
        //             <IconButton onClick={handleArchive}>
        //               <Archive />
        //             </IconButton>
        //           )}
        //         </Grid>
        //     <Button onClick={handleNote} className='note-button'>
        //       Close
        //     </Button>
        //     </Grid>
        //     </div>
        //   </AccordionDetails>
        // </Accordion>
    );
}

export default CreateNote;
