import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import SignUpForm_Student from './SignUpForm_Student';
import SignUpForm_Company from './SignUpForm_Company';
import SignUpForm_Institute from './SignUpForm_Institute';
import SignUpForm_Youth from './SignUpForm_Youth';


class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false,
            cmplt: false
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

        alert('The form was submitted with the following data:');
        console.log((this.state.password).length);

    }
    

    render() {
        return (
          <Router>
          <div>

            <div className="FormTitle">
                <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
                <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>

        <div className="FormField">
          <div className = "Category__Box">
            <div className="Category__Text">
            <p>Want to grow your company by hiring fresh Talents!!!</p>
            <p>Let us help you grow your company.</p>
            </div>
              <Link to="/sign-up-company" className="Category__Button">Sign Up</Link>
            </div>
            <div className = "Category__Box">
              <div className="Category__Text">
            <p>Want to make your students future ready!!!</p>
            <p>Let us help you grow your students to rule the industry.</p>
            </div>
              <Link to="/sign-up-institute" className="Category__Button">Sign Up</Link>
            </div>
            <div className = "Category__Box">
              <div className="Category__Text">
            <p>Are you a student and want to grow your skillset!!!</p>
            <p>Let us help you polish your skills to make you shine in the future.</p>
            </div>
              <Link to="/sign-up-student" className="Category__Button">Sign Up</Link>
            </div>
            <div className = "Category__Box">
              <div className="Category__Text">
            <p>Are you a professional looking for an upgrade in your professional life!!!</p>
            <p>Let us help you </p>
            </div>
              <Link to="/sign-up-youth" className="Category__Button">Sign Up</Link>
            </div>
            
        </div>
        <Route path="/sign-up-company"  component={SignUpForm_Company}/>
        <Route path="/sign-up-institute"  component={SignUpForm_Institute}/>
        <Route path="/sign-up-student"  component={SignUpForm_Student}/>
        <Route path="/sign-up-youth"  component={SignUpForm_Youth}/>


      </div>
      </Router>



        );
    }
}

export default SignUpForm;
