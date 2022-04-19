import Selection from "./Selection";
import { useEffect, useState } from "react";
import messageService from "../../../services/messages.service";
import AuthService from "../../../services/auth/auth.service";

const ChatSelections = () => {
    //get messages
    const [messages, setMessages] = useState([]);
    //loading
    const [loading, setLoading] = useState(true);
    //get user
    const [user, setUser] = useState(AuthService.getCurrentUser());
    //get user id
    const [userId, setUserId] = useState(AuthService.getUserId());

    useEffect(() => {
        const fetchMessages = async () => {
            const { data } = await messageService.getmessages();
            setMessages(data);
            setLoading(false);
        };
        fetchMessages();
    }, []);
    return (
        <div>
            <div className="pxp-dashboard-inbox-search-form">
                <div className="input-group">
                    <span className="input-group-text"><span className="fa fa-search"></span></span>
                    <input type="text" className="form-control" placeholder="Search messages..." />
                </div>
            </div>

            <div className="mt-3 mt-lg-4 pxp-dashboard-inbox-list">
                <ul className="list-unstyled">
                    <li className="pxp-active">
                        {messages.map((message, index) => {
                            return <Selection key={index} message={message.message_message} date={message.message_date} user={
                                message.message_senderId == userId ?
                                    {
                                        name: user.firstName + " " + user.lastName,
                                        avatar: user.photo,
                                        id: message.message_receiverId
                                    }
                                    :
                                    {
                                        name: "Scott Goodwin",
                                        avatar: "images/avatar-1.jpg",
                                        id: message.message_senderId
                                    }
                            } />
                        })}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ChatSelections;