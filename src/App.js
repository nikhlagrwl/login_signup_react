import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import ForgotPassword from './pages/ForgotPassword';
import SignUpForm_Student from './pages/SignUpForm_Student';
import SignUpForm_Institute from './pages/SignUpForm_Institute';
import SignUpForm_Youth from './pages/SignUpForm_Youth';
import SignUpForm_Company from './pages/SignUpForm_Company';



import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="Right_Side">
          
            <Route path="/sign-up" component={SignUpForm}/>
            <Route path="/" exact component={SignInForm}/>
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path = "/sign-up-company" component = {SignUpForm_Company}/>
            <Route path = "/sign-up-institute" component = {SignUpForm_Institute}/>
            <Route path = "/sign-up-student" component = {SignUpForm_Student}/>
            <Route path = "/sign-up-youth" component = {SignUpForm_Youth}/>
            
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
