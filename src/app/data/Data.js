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

const GetUValues = () => {
    try{
        return axios.get(baseuri + 'uval');
    }
    catch(error){
        console.error(error);
    }
}

const GetUsgTypes = (id) => {
    try{
        const headers = {'Content-Type': 'application/json'}
        const response = axios.post(baseuri + 'typload',  id , {headers: headers})
            .then(function a(response){
                if(response!=undefined){
                    return response;
                }
            });
    }
    catch(error){
        console.error(error);
    }
}

const InsertEnergyUsage = () => {

}

export default {GetDefaults, GetCodes, GetUValues, InsertEnergyUsage}
