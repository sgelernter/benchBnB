import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // debugger
    }

    updateField(type){
        return (e) => this.setState({[type]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.setState({username: '', password: ''});
    }

    render() {
        const currentPath = this.props.match.path;
        const otherFormPath = (currentPath === '/signup' ? '/login' : '/signup'); 
        if (this.props.loggedIn) {
            return <Redirect to='/'></Redirect>
        } else {
            return (
                <div id='session-form'>
                    <h3>{this.props.formType}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:
                            <input type="text" value={this.state.username} onChange={this.updateField('username')}/>
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.updateField('password')}/>
                        </label>
                        <br/>
                        <input type="submit" value="DO IT" />
                    </form>
                    <Link to={otherFormPath}>Other Form</Link>
                    <ul>
                        {this.props.errors.map ((error) => {
                            return (
                                <li>
                                    {error}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }
}

export default SessionForm;