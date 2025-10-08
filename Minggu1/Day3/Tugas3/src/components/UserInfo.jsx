import Avatar from "./Avatar";

function UserInfo({user}){
    return(
        <div>
            <Avatar user={user}/>
            <div className="userInfo">{user.name}</div>
        </div>
    )
}

export default UserInfo