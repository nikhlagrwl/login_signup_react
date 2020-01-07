import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';


class ForgotPassword extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            emailError: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        let match = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        this.setState({
            emailError: !match.test(this.state.email)
        })

    }

    render() {
        return (
            <div>
            <div className="PageSwitcher">
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="Back__Button">Back</NavLink>
            </div>
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Enter your registered e-mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                {this.state.emailError ? (<div className = "valid">*Please Enter a valid E-mail Address</div>) : null}
              </div>            
              <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button>
              </div>
            </form>
          </div>
          </div>
        );
    }
}

export default ForgotPassword;
