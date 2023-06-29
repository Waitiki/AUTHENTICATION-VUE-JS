import axios from "axios";

axios.defaults.baseURL="http://127.0.0.1:8080/api/v1/auth"

axios.defaults.headers.common['Authorization']='Bearer'+localStorage.getItem('token')
export default axios


