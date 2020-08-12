import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { authenticated: null };
//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//   }

    state = { authenticated: null };

  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
    this.props.auth.login('/');
  }

  logout = async() => {
    this.props.auth.logout('/');
  }

  render() {
    if (this.props.authenticated === null) return null;

    const mainContent = this.props.authenticated ? (
        <div>
            <p className='lead'>You have entered the staff portal, <Link to='/staff'>click here</Link></p>
            <button className='btn btn-light btn-lg' onClick={this.logout}>Logout</button>
        </div>
    ) : (
        <div>
            <p className='lead'>You are a staff member, please get your credentials from your supervisor</p>
            <button className='btn btn-dark btn-lg' onClick={this.login}>Login</button>
        </div>
    );

    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Acme Staff Portal</h1>
        {mainContent}
      </div>
    );
  }
});