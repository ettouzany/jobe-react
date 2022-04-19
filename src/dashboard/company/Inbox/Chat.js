import { useEffect, useState } from "react";
import messageService from "../../../services/messages.service";
import Message from "./Message";
import AuthService from "../../../services/auth/auth.service";
import SendMessage from "./SendMessage";
const Chat = ({ id }) => {

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
            const { data } = await messageService.getMessagesByChatId(id);
            setMessages(data);
            setLoading(false);
        };
        fetchMessages();
    }, [id]);



    return (
        loading ?
            <div>loading</div>
            :
            (
                <div className="pxp-dashboard-inbox-messages-container">
                    <div className="pxp-dashboard-inbox-messages-header">
                        <div className="pxp-dashboard-inbox-list-item-left">
                            <div className="pxp-dashboard-inbox-list-item-avatar pxp-cover" style={{ backgroundImage: "url(images/avatar-1.jpg)" }}></div>
                            <div className="pxp-dashboard-inbox-list-item-name ms-2">Scott Goodwin</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="pxp-dashboard-inbox-list-item-options">
                                <button title="Delete conversation"><span className="fa fa-trash-o"></span></button>
                            </div>
                            <button className="btn rounded-pill pxp-dashboard-inbox-messages-close-btn d-inline-block d-xxl-none"><span className="fa fa-angle-left"></span> Back</button>
                        </div>
                    </div>
                    <div className="pxp-dashboard-inbox-messages-content">
                        {
                            messages.map((message, index) => {
                                return <Message key={index} message={message.message} date={message.date} user={
                                    message.senderId == userId ?
                                        {
                                            name: user.firstName + " " + user.lastName,
                                            avatar: user.photo
                                        }
                                        :
                                        {
                                            name: "Scott Goodwin",
                                            avatar: "images/avatar-1.jpg"
                                        }
                                } me={message.senderId == userId} />
                            })
                        }

                    </div>
                    <SendMessage id={id} />
                </div>
            )
    )
}

export default Chat;