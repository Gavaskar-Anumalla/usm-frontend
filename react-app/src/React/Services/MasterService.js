import axios from "axios";
const baseURL="http://localhost:8090/api/master";
class MasterService{


    getByIsin(isinNumber){
        return axios.get(`${baseURL}/fetchByIsin/`+isinNumber);
    }
    getBySector(sector){
        return axios.get(`${baseURL}/fetchBySector/`+sector);
    }
    getBySymbol(symbol){
        return axios.get(`${baseURL}/fetchBySymbol/`+symbol);
    }
    getAllData(){
        return axios.get(`${baseURL}/fetchData`);
    }
    deleteSingleRow(isinNumber){
        return axios.delete(`${baseURL}/deleteData/`+isinNumber)
    }

    updateStockData(isinNumber,securityMaster){
        return axios.put(`${baseURL}/update/${isinNumber}`,securityMaster)
    }

}
export default new MasterService();