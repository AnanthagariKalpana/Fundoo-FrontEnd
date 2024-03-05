
import React from 'react';
import '../Styles/Login.scss';
import Button from '@mui/material/Button';

function Login() {
    return (
        <div className="Log">
            <p className='fundo'>Fundo</p>
            <p className='sign-txt'>Sign in</p>
            <p className='text'>Use your Fundoo Account</p>
            <form>
                <input
                    type="email"
                    placeholder="email or phone*"
                    className='email-txt'
                />
                <input
                    type="password"
                    placeholder="passsword*" 
                    className='pwd-txt'
                />
                 
                <a variant='text' className='forgot-pwd'>forgot password</a>
                
                
                <div className='button'>
                <Button variant='text'>create account</Button>
                <Button variant="contained">Login</Button>
                </div>

            </form>
        </div>
    )
}
export default Login;