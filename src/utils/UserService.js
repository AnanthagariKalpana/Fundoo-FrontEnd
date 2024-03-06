import axios from 'axios';

const baseURL= "http://localhost:3000/api/v1/users";
export const LoginApi=async (data)=>
{
    return await axios.post(baseURL+"/login",data)
}

export const SignupApi=async(res)=>{
    return await axios.post(baseURL+"/",res) 
}