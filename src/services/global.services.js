

    const getDateAgo = (date) => {
        const dateAgo = new Date(date);
        const now = new Date();
        const diff = Math.abs(now.getTime() - dateAgo.getTime());
        const diffDays = Math.floor(diff / (1000 * 3600 * 24));
        const diffHours = Math.floor(diff / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diff / (1000 * 60));
        console.log(diff / (1000 * 60 * 60 * 24));
        if(diffDays == 1){
            return "Yesterday at " + dateAgo.getHours() + ":" + dateAgo.getMinutes();
        }
        else if(diffDays > 1 && diffDays < 7){
            return diffDays + " days ago";
        }
        else if(diffDays > 7 && diffDays < 30){
            return diffDays/7 + " weeks ago";
        }
        else if(diffDays > 30){
            return diffDays/30 + " months ago";
        }
        else if(diffHours > 1){
            return diffHours + " hours ago";
        }
        else if(diffMinutes > 1){
            return diffMinutes + " minutes ago";
        }
        else{
            return "Just now";
        }
    }


const globalService = 
{
    getDateAgo
}

export default globalService;