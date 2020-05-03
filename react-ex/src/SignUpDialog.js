import React from 'react'
import Dialog from './Dialog'

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return(
            <Dialog title="Mars Exploration Program" message="Too many marsians on Mars">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me up</button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp(e) {
        alert(`Welcome abroad, ${this.state.login}!`);
    }
}

export default SignUpDialog