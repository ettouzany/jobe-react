const Message = ({ message, date, user, me }) => {
    console.log(me);
    return (
        <div className="pxp-dashboard-inbox-messages-item">
            <div className={!me ? "row" : "row justify-content-end"}>
                <div className="col-7">
                    <div className={"pxp-dashboard-inbox-messages-item-header " + (me ? "flex-row-reverse" : null)}>
                        <div className="pxp-dashboard-inbox-messages-item-avatar pxp-cover" style={{ backgroundImage: `url(${user.avatar})` }}></div>
                        <div className="pxp-dashboard-inbox-messages-item-name ms-2">{user.name}</div>
                        <div className="pxp-dashboard-inbox-messages-item-time pxp-text-light ms-3">{date}</div>
                    </div>
                    <div className={"pxp-dashboard-inbox-messages-item-message mt-2 " + (!me ? "pxp-is-other" : "pxp-is-self")}>
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;