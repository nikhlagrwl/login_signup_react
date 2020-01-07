import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';

class SignUpForm_Student extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailError: false,
            password: '',
            pwdError: false,
            name: '',
            nameError: false,
            hasAgreed: false,
            contact_number: '',
            number_Error: false,
            contact_address: '',
            add_Error: false,
            college_name: '',
            clg_Error: false,
            skill: '',
            skillError: false
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
      e.preventDefault();

      let match = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      
      this.setState({
        emailError: !match.test(this.state.email),
        pwdError: !(this.state.password.length>8 && this.state.password.length<129),
        nameError: !(this.state.name.length>0),
        add_Error: !(this.state.contact_address.length>0),
        number_Error: !(this.state.contact_number.length>0 && this.state.contact_number.length<11),
        clg_Error: !(this.state.college_name.length>0),
        skillError: !(this.state.skill.length>0)

      })     

    }
    

    render() {
        return (
          <div>
            <div className="FormHeading ">
                About You
            </div>

        <div className="FormCenter">

            <form onSubmit={this.handleSubmit} className="FormFields">

              <div className="FormField">
                <label className="FormField__Label" htmlFor="text">your full name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} errorText = {this.state.nameError} />
                {this.state.nameError ? (<div className = "valid">*Please Enter a valid Name</div>) : null}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor = "email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                {this.state.emailError ? (<div className = "valid">*Please Enter a valid E-mail Address</div>) : null}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="text">Contact Number</label>
                <input type="text" id="contact_number" className="FormField__Input" placeholder="Enter your contact number" name="contact_number" value={this.state.contact_number} onChange={this.handleChange} />
                {this.state.number_Error ? (<div className = "valid">*Please Enter a valid Contact Number</div>) : null}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="text">Enter your college name</label>
                <input type="text" id="college_name" className="FormField__Input" placeholder="Enter your college name" name="college_name" value={this.state.college_name} onChange={this.handleChange} errorText = {this.state.nameError} />
                {this.state.clg_Error ? (<div className = "valid">*Please Enter a valid College Name</div>) : null}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="text">Enter your skills</label>
                <input type="text" id="skill" className="FormField__Input" placeholder="Enter your skills(seperated by ,)" name="skill" value={this.state.skill} onChange={this.handleChange} errorText = {this.state.nameError} />
                {this.state.skillError ? (<div className = "valid">*Skills cannot be empty</div>) : null}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="text">Address</label>
                <input type="text" id="contact_address" className="FormField__Input" placeholder="Enter your address" name="contact_address" value={this.state.contact_address} onChange={this.handleChange} />
                {this.state.add_Error ? (<div className = "valid">*Please Enter a valid Contact Address</div>) : null}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password(Must be between 8 to 128 character)" name="password" value={this.state.password} onChange={this.handleChange} />
                {this.state.pwdError ? (<div className = "valid">*Please Enter a valid Password between 8 to 128 characters</div>) : null}
              </div>
              

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <Link to = "/sign-up-student" className="FormField__TermsLink">terms of service</Link>
                </label>
              </div>

              <div className="FormField">
                  <button className="Submit__Button" disabled={!this.state.hasAgreed} >Sign Up</button>
                  <Link exact to="/" className="FormField__Link">I'm already a member</Link>
              </div>
              
            </form>
            
        </div>
          </div>
        );
    }
}

export default SignUpForm_Student;
