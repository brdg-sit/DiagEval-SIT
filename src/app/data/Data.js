import axios from 'axios'

const baseuri = "https://sitapi.brdg.kr/api/sit/";

const GetDefaults = () => {
    try{
        return axios.get(baseuri + 'defaults');
    }
    catch(error){
        console.error(error);
    }
}

const GetCodes = () => {
    try{
        return axios.get(baseuri + 'codes');
    }
    catch(error){
        console.error(error);
    }
}

export default {GetDefaults, GetCodes}