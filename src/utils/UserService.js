import axios from 'axios';

const baseURL= "http://localhost:3000/api/v1/";
export const LoginApi=async (data)=>
{
    return await axios.post(baseURL+"users/login",data)
}