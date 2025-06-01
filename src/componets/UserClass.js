import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

   

    render () {
        const {name} = this.props
        const {count} = this.state
        return (
            <div className="dev-card">
                <h3>Count: {count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: count+1
                    })
                }}>Increase</button>
                <h3>Name: {name}</h3>
                <h3>Location: Jaipur</h3>
            </div>
        )
    }
}

export default UserClass;