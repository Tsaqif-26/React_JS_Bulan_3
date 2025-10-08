
function ProfileCard(props){
    return(
    <div style={{border: "1px solid black", borderRadius: "1px",padding: "15px" ,width: "100px"}}>
        <img 
        src="#" 
        alt={props.name} 
        style={{width:"100px",borderRadius: "15%"}}
        />

        <h2>{props.name}</h2>
        <p>{props.bio}</p>

        <h3>Skilss: </h3>
            <ul>
                {props.skills.map((skill,i) => <li key={i}>{skill}</li>)}
            </ul>       
    </div>)
}

export default ProfileCard