import axios, { AxiosInstance } from "axios";
import { ApiUrl } from "./env";
import { appLocalStorage } from "./localStorage";

export const Axios = (): AxiosInstance => {
    const token = appLocalStorage.Get("token");
    const axiosCreated = axios.create({
        baseURL: ApiUrl(),
        headers: { Authorization: `Bearer ${token}` },
    });
    axiosCreated.interceptors.response.use((r) => r.data);
    return axiosCreated;
};

export const AxiosFormData = (): AxiosInstance => {
    const token = appLocalStorage.Get("token");
    const axiosCreated = axios.create({
        baseURL: ApiUrl(),
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

    axiosCreated.interceptors.response.use((r) => r.data);

    return axiosCreated;
};
