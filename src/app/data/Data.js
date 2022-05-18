import axios from 'axios'

var url = "https://localhost:7037/";

const GetDefaults = () => {
    try{
        return axios.get(url + 'defaults');
    }
    catch(error){
        console.error(error);
    }
}

const GetCodes = () => {
    try{
        return axios.get(url + 'codes');
    }
    catch(error){
        console.error(error);
    }
}

export default {GetDefaults, GetCodes}