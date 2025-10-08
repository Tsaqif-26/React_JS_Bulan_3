import UserInfo from "./UserInfo";

function Comment({author,text,date}){
    return(
        <div className="comment" style={{border: '1px solid black', padding: '15px', margin: '10px', borderRadius: '5px'}}>
            <UserInfo user={author}/>

            <div className="Comment-text">
                {text}
            </div>

            <div className="comment-date" style={{color: 'gray',fontSize: '12px'}}>
                {date.toLocaleDateString()}
            </div>
        </div>
    )
}

export default Comment;