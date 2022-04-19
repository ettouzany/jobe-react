import { useEffect, useState } from "react";
import Notification from "./notification";
import notificationService from "../../../services/notifications.service";

const Notifications = () => {

    const [notifications, setNotifications] = useState([]);
    //loadin
    const [loading, setLoading] = useState(true);
    //count
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchNotifications = async () => {
            const { data } = await notificationService.getnotifications({
                search: "",
                filters: "",
                limit: "",
                page: "",
            });
            console.log(data);
            setNotifications(data[0]);
            setLoading(false);
            setCount(data[1]);
        };
        fetchNotifications();
    }, []);


    return (
        <div >
            <h1>Notifications</h1>
            <p className="pxp-text-light">History of all your received notifications.</p>

            {
                loading ?
                    <div>loading</div>
                    :
                    (
                        <div className="mt-4 mt-lg-5">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <tbody>
                                        {
                                            notifications.map(notification => (
                                                <Notification key={notification.id} notification={notification} />
                                            ))
                                        }
                                    </tbody>
                                </table>

                                <div className="col-auto">
                                    <nav className="mt-3 mt-sm-0" aria-label="Notifications pagination">
                                        <ul className="pagination pxp-pagination">
                                            <li className="page-item active" aria-current="page">
                                                <span className="page-link">1</span>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
export default Notifications;