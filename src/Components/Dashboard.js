import HeaderContainer from "./HeaderContainer";
import React, { useState } from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import ListItemIcon from "@mui/material/ListItemIcon";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import '../Styles/Dashboard.scss'

function Dashboard()
{
    const navigate = useNavigate()
  const [drawerState, setDrawerState] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  }

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(false)
  };

  const list = (anchor) => (
    
    <Box
      className="sidebar"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClose={()=>toggleDrawer()}
      
    >
      <div className="sidelist">
       
        <div className="icon-div" onClick={()=>handleNavigation("notes")}>
          <ListItemIcon><LightbulbIcon onClick={() => handleNavigation('notes')}/></ListItemIcon>
          <p>Notes</p>
        </div>
        <div className="icon-div">
          <ListItemIcon><NotificationsNoneIcon /></ListItemIcon>
          <p>Remainders</p>
        </div>
        <div className="icon-div">
          <ListItemIcon><EditIcon /></ListItemIcon>
          <p>Edit Labels</p>
        </div>
        <div className="icon-div" onClick={()=>handleNavigation("archive")}>
          <ListItemIcon><ArchiveIcon onClick={() => handleNavigation('archive')}/></ListItemIcon>
          <p>Archive</p>
        </div>
        <div className="icon-div" onClick={()=>handleNavigation("trash")}>
          <ListItemIcon><DeleteOutlineIcon onClick={() => handleNavigation('trash')}/></ListItemIcon>
          <p>Trash</p>
        </div>
      </div>
      <Divider />
    </Box>
  );

    return (
    <>
    <HeaderContainer state={drawerState} setState={setDrawerState}/>
    <SwipeableDrawer
            anchor="left"
            open={drawerState}
            // onOpen={toggleDrawer("left", true)}
            onClose={()=>toggleDrawer(false)}
          >
            {list("left")}
          </SwipeableDrawer>
    <Outlet></Outlet>
    </>)
}
export default Dashboard;