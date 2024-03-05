
import React from "react";
import Button from '@mui/material/Button';
import '../Styles/Signup.scss';
import TextField from '@mui/material/TextField';

function Signup()
{
    return (
        <div>
        <div className="container">
        <div className="form">
            <p className="fundo">Fundo</p>
            <p className="txt">Create your Fundo Account</p>
            
                <div id="name">
                <TextField className="Fname" label="FirstName" type="text" placeholder="Fisrt Name*"/><br/>
                <TextField className="Lname" label="LatName" type="text" placeholder="Last Name*"/>
                </div><br></br>
                <TextField className="Uname" label="UserName" type="text" placeholder="User Name*"/>
                <p className="userNameInfo">You can use letters, numbers & periods</p>
            <div id="pwd">
                <TextField type="text" label="Password" placeholder="password*"/>
                <TextField type="text" label="confirm" placeholder="confirm*"/>
            </div>
            <p id="passInfo">Use 8 or more characters with a mix of letters, numbers & symbols</p>
            <div className="sign">
            <Button variant='text'>Sign in instead</Button>
                <Button variant="contained">Signin</Button>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Signup