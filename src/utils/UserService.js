import axios from 'axios';

export const LoginApi=async (data)=>
{
    return await axios.post("http://localhost:3000/api/v1/users/login",data)
}