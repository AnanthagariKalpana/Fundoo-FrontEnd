
import React, { useState } from 'react';
import '../Styles/Login.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LoginApi } from '../utils/UserService';


function Login() {
    let userName
    let password
    const [userNameError, setUserNameError]=useState(false)
    const emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const handleLogin=async ()=>{
       setUserNameError(!emailRegex.test(userName))
        const loginPayload={
            email:userName,
            password:password
        }
       const data= await LoginApi(loginPayload);
        console.log(data);
    }

    return (
        <div className="Log">
            <p className='fundo'>Fundo</p>
            <p className='sign-txt'>Sign in</p>
            <p className='text'>Use your Fundoo Account</p>
            <form>
            <TextField label="email or phone" 
            onChange={(e)=>userName=e.target.value}
            />
            
            {userNameError && <span>UserName is incorrect</span>}

            <TextField label="password" 
            onChange={(e)=>password=e.target.value}
            />
                 
                <a variant='text' className='forgot-pwd'>forgot password</a>
                
                
                <div className='button'>
                <Button variant='text'>create account</Button>
                <Button variant="contained" onClick={handleLogin}>Login</Button>
                </div>

            </form>
        </div>
    )
}
export default Login;