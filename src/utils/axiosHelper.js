import axios from "axios";


export const fetchData =(str) =>{
    const apiEP = `http://www.omdbapi.com/?t=${str}&apikey=f167da47`;
    try{
   return axios.get(apiEP);  
    }catch(error){
        console.log(error)
    }
    
};