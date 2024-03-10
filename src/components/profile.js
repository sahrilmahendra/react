import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>from class component</h1>
                {this.props.profile()}
            </div>
        )
    }
}

export default Profile