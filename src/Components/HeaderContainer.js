

import React, { useState } from "react";
import icon from '../assets/icon.png'
import '../Styles/header.scss';
import {
    IconButton,
    Badge,
    Button,
} from "@mui/material";
import Popper from "@mui/material/Popper";
import AppsIcon from '@mui/icons-material/Apps'
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

function HeaderContainer({ state, setState }) {

    const navigate = useNavigate();

    const [anchorMenu, setAnchorMenu] = useState(null);
    const openOption = Boolean(anchorMenu);
    
    const handleToggle = () => {
        setState(!state);
    }

    const handleMenu = (event) => {
        setAnchorMenu(anchorMenu ? null : event.currentTarget);
    };

    const handleSignOut = () => {
        localStorage.clear();
        navigate("/")
    }

    return (

        <div className="head-container">

            <div className="head-cnt1">
                <div className="menu" onClick={handleToggle}>
                    <MenuIcon className="menu-icon" />
                </div>
                <div className="head-cont2">
                    <img src={icon} alt="icon" className="head-img" />
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
                            border: "none",
                            justifyContent: "space-between",
                            padding: "20px"
                        }}
                        placeholder="search...."
                    />
                </div>
            </div>

            <div className="icons">
                <IconButton color="inherit" aria-label="refresh">
                    <RefreshIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="settings">
                    <SettingsIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Google Apps">
                    <Badge color="error" variant="dot">
                        <AppsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" aria-label="profile" onClick={handleMenu}>
                    <AccountCircleIcon />
                </IconButton>
            </div>
            <Popper open={openOption} anchorEl={anchorMenu} placement="top-end">
                <div className="signOut">
                    <Button onClick={handleSignOut} style={{ cursor: "pointer", width: "100%", textAlign: "left"}}>Sign Out</Button>
                </div>
            </Popper>

        </div>
    )
}

export default HeaderContainer;

