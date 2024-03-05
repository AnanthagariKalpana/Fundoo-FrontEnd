
import React from "react";
import Button from '@mui/material/Button';
import '../Styles/Signup.scss';
import TextField from '@mui/material/TextField';

function Signup() {
    return (
        <div>
            <div className="container">
                <div className="form">
                    <div>
                        <p className="title">Fundo</p>
                        <p className="txt">Create your Fundo Account</p>
                    </div>

                    <div id="name">
                        <TextField className="Fname" label="FirstName" type="text" placeholder="Fisrt Name*" /><br />
                        <TextField className="Lname" label="LatName" type="text" placeholder="Last Name*" />
                    </div>
                    <div className="username">
                        <TextField className="Uname" label="UserName" type="text" placeholder="User Name*" />
                        <p className="userNameInfo">You can use letters, numbers & periods</p>
                    </div>                
                    
                    <div className="pwd">
                        <div className="pwd-1">
                        <TextField type="text" label="Password" placeholder="password*" />
                        <TextField type="text" label="confirm" placeholder="confirm*" />
                        </div>
                        <p id="passInfo">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </div>
                    
                    <div className="sign">
                        <Button variant='text'>Sign in instead</Button>
                        <Button variant="contained">Signin</Button>
                    </div>
                </div>
            </div>
            <div id='text'>
                <p style={{ marginRight: '350px', marginLeft: '45px' }}>English(UnitedState)</p>
                <p style={{ marginRight: '40px' }}>Help</p>
                <p style={{ marginRight: '40px' }}>Privacy</p>
                <p>Terms</p>
            </div>
        </div>
    )
}
export default Signup