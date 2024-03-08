
import React, { useState } from "react";
import icon from '../assets/icon.png'
import '../Styles/header.scss';
import {
    IconButton,
    Badge,
} from "@mui/material";

import AppsIcon from '@mui/icons-material/Apps'
import MenuIcon from '@mui/icons-material/Menu';
 import RefreshIcon from '@mui/icons-material/Refresh';
 import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";


function HeaderContainer({state, setState}) {

    const navigate = useNavigate();

  const [anchorMenu, setAnchorMenu] = useState(null);
  const openOption = Boolean(anchorMenu);
  const userPopper = openOption ? "simple-popper" : undefined;

  const handleToggle = () => {
    setState(!state);
  }
  const handleMenu = (userPopper) => {
    setAnchorMenu(anchorMenu ? null : userPopper.currentTarget);
  };

  const handleSignOut = ()=>{
    localStorage.clear();
    navigate("/signin")
  }

    return (

        <div  className="head-container">

            <div className="head-cnt1" >
                <div className="menu" onClick={handleToggle}>
                <MenuIcon className="menu-icon"/>
                </div>
                <div className="head-cont2" >
                    <img src={icon} alt="icon" className="head-img"/>

                    <h3>Fundoo</h3>
                </div>
                </div>
                <div className="head-search">
                    <div className="icon-search">
                        <SearchIcon />
                    <input 
                    style={{
                        display: "flex",
                        marginRight: "50px",
                        //width: "800px",
                        border: "none",
                        justifyContent: "space-between",
                        padding: "20px"
                    }}
                     placeholder="search...." 
                    />
                    </div>
                </div>
            
            <div className="icons" >
                <IconButton color="inherit" aria-label="refresh">
                    <RefreshIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="refresh">
                    <SettingsIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Google Apps">
                    <Badge color="error" variant="dot">
                        <AppsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" aria-label="profile">
                    <AccountCircleIcon />
                </IconButton>
            </div>

        </div>


    )
}

export default HeaderContainer;