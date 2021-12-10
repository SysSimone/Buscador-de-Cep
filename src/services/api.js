import axios from "axios";


const api = axios.create({
 baseURL: "https://viacep.com.br/ws/" // baseURL é a base que nunca vai mudar
});

export default api;