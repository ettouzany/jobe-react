import { useParams } from "react-router-dom";
import Chat from "./Chat";
import ChatSelections from "./ChatSelections";
import { useEffect, useState } from "react";

const Inbox = () => {
    //get id
    const [ActiveChat, setActiveChat] = useState(null);

    //calback func
    const handleActiveChat = (e) => {
        setActiveChat(e);
    }


    return (
        <div className="">
            <h1>Inbox</h1>
            <p className="pxp-text-light">Keep in touch with your candidates.</p>

            <div className="row mt-4 mt-lg-5">
                <div className="col-xxl-4">
                    <ChatSelections callback={handleActiveChat} />
                </div>
                <div className="col-xxl-8">
                    {ActiveChat ? <Chat chat={ActiveChat} /> : <div>Select a chat</div>}
                </div>
            </div>
        </div>
    );
}
export default Inbox;