import axios from "axios";


// Axios instance for authenticated requests
const axiosInstance = axios.create({
    baseURL: "/api",
});


//Register a new user
export const registerUserFn = async (data: StudentFormData) => {
    const response = await axiosInstance.post("/register", data);
    return response.data;
}