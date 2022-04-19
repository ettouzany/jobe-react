import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "http://localhost:3000/messages";


const getmessages = () => {
    //add params ro axios get request
    return axios.get(API_URL, { headers: authHeader() });
};

const getMessagesByChatId = (chatId) => {
    //add params ro axios get request
    return axios.get(API_URL + "/chat/" + chatId, { headers: authHeader() });
}

const sendMessage = (message, userId) => {

    return axios.post(API_URL, { message, userId }, { headers: authHeader() });
}




const messageService = {
    getmessages,
    sendMessage,
    getMessagesByChatId,
    
};

export default messageService;