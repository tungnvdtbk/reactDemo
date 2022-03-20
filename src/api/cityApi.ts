import axiosClient from "./axiosClient.ts";



const cityApi = {
    getAll() {
        const url = '/cities';
        return axiosClient.get(url);
    },
}


export default cityApi;