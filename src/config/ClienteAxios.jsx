import axios from 'axios';


const ClienteAxios = axios.create({
    baseURL: "https://www.tuinvernadero.xyz/v1"
})

export default ClienteAxios;