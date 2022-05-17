import axios from 'axios'

var url = "https://localhost:7037/";

const GetDefaults = (test) => {
    try{
        return axios.get(url + 'defaults');
    }
    catch(error){
        console.error(error);
    }
}

export default {GetDefaults}