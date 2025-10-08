
function Avatar({user}){
    return(
        <img
        className="avatar"
         src={user.avatar} 
         alt={user.name}
         style={{width:'50px',height:'50px', borderRadius: '50%'}}/>
    )
}

export default Avatar
