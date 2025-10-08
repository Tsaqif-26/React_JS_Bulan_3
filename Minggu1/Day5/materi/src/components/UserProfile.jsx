import { useState } from "react";

function UserProfile() {
    const [name,setName] = useState("");
    const [age, setAge] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    return (
                <div>
                    <h1>Profile</h1>

                {isEditing ? (
                    <div>
                        <div>
                            <label htmlFor="name">Username</label>
                        <input type="text" 
                        name="name" 
                        onChange={(e) => {
                            setName(e.target.value)
                            }}/>
                        </div>
                            <div>
                                <label htmlFor="age">Age</label>
                        <input type="number" 
                        name="age" 
                        onChange={(e) => {
                            setAge(e.target.value)
                        }} />
                        </div>

                        <button onClick={() => {
                            setIsEditing(false)
                        }}>Save</button>

                    </div>
                        
                ) : (
                    <div>
                        <p>Name: {name}</p>
                        <p>Age: {age}</p>

                        <button onClick={() => {
                            setIsEditing(true)
                        }}>Edit</button>
                    </div>
                )}
                </div>
)}

export default UserProfile