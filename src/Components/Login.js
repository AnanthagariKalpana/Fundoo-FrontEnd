
import React, { useState } from 'react';
import '../Styles/Login.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LoginApi } from '../utils/UserService';
import { useNavigate } from 'react-router-dom';


function Login() {
    let userName
    let password
    //we are using hook here..useState it will return the array[]
    const [userNameError, setUserNameError]=useState(false)
    //emailregex checks the format of email
    const emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    // const [passwordError, setpassword]=useState(false);
    // const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const navigate= useNavigate();

    const handleNavigation=()=>{
        navigate("/signup");
    }

    const handleLogin=async ()=>{
        console.log(userName, password);
       setUserNameError(!emailRegex.test(userName))
      // setpassword(!passwordRegex.test(password))
        const loginPayload={
            email:userName,
            password:password
        }
       const data= await LoginApi(loginPayload);
       const token = data.data.user;
       localStorage.setItem("token", token);

       console.log(data.data.user);
       navigate("/dashboard/notes")
        
    }

    return (
        <div className="Log">
            <p className='fundo'>Fundo</p>
            <p className='sign-txt'>Sign in</p>
            <p className='text'>Use your Fundoo Account</p>
        
            <TextField label="email or phone" 
            onChange={(e)=>userName=e.target.value}
            />
            
            {userNameError && <span>UserName is incorrect</span>}

            <TextField label="password" 
            onChange={(e)=>password=e.target.value}
            />
            {/* {passwordError && <span>password is incorrect</span>} */}
                 
                <Button variant='text' className='forgot-pwd'>forgot password</Button>
                <div className='button'>
                <Button variant='text'onClick={handleNavigation}>create account</Button>
                <Button variant="contained" onClick={handleLogin}>Login</Button>
                </div>
            {/* <div id='text'>
        <p style={{marginRight:'60px' , marginLeft:'5px'} }>English(UnitedState)</p>
        <p style={{marginRight:'15px'}}>Help</p>
        <p style={{marginRight:'15px'}}>Privacy</p>
        <p>Terms</p>
    </div> */}
        </div>
    )
}
export default Login;