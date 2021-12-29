import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div id='greeting'>
                    <h3>Welcome, {this.props.currentUser.username}</h3>
                    <button onClick={this.props.logout}>Get outta hear</button>
                </div>
            )
        } else {
            return (
                <div id='greeting'>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </div>
            )
        }
    }
}

export default Greeting;