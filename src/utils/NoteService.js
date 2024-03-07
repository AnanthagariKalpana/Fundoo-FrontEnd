import axios from 'axios';

export const createNote=async (data)=>{
    const token = localStorage.getItem('token');

    const config ={
        headers: {
            Authorization : `Bearer ${token}`
        }
    };
    return await axios.post("http://localhost:3000/api/v1/note",data,config)
}

export const getNote=async ()=>{
    const token = localStorage.getItem('token');
    const config ={
        headers: {
            Authorization : `Bearer ${token}`
        }
    };
    return await axios.get("http://localhost:3000/api/v1/note",config)
}