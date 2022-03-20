import axiosClient from "./axiosClient.ts";
import { ListResponse } from "models/common";
import { City } from "models/city";


const cityApi = {
    getAll(): Promise<ListResponse<City>> {
      const url = '/cities';
      return axiosClient.get(url, {
        params: {
          _page: 1,
          _limit: 10,
        },
      });
    },
  };
  

export default cityApi;