import { useParams } from "react-router-dom";
import Chat from "./Chat";
import ChatSelections from "./ChatSelections";


const Inbox = () => {
    //get id
    const id = useParams().id;


    return (
        <div className="">
            <h1>Inbox</h1>
            <p className="pxp-text-light">Keep in touch with your candidates.</p>

            <div className="row mt-4 mt-lg-5">
                <div className="col-xxl-4">
                    <ChatSelections />
                </div>
                <div className="col-xxl-8">
                    <Chat id={id} />
                </div>
            </div>
        </div>
    );
}
export default Inbox;