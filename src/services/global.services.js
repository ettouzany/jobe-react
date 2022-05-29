

const getDateAgo = (date) => {
    const dateAgo = new Date(date);
    const now = new Date();
    const timeDiff = Math.abs(now.getTime() - dateAgo.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays === 0) {
        return "Today";
    }
    if (diffDays === 1) {
        return "Yesterday";
    }
    return `${diffDays} days ago`;
}


const globalService = 
{
    getDateAgo
}

export default globalService;