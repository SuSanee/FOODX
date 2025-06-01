import { useState } from "react";



const User = ({name}) => {

    const [count] = useState(0)
    const [count2] = useState(2);
    return (
        <div className="dev-card">
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h3>Name: {name}</h3>
            <h3>Location: Jaipur</h3>
        </div>
    )
}

export default User;