import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            this.setState({ 
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    };

    render(){
        return(
            <div className="sign-up" >
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" label="Display Name" type="text" value={this.state.displayName} handleChange={this.handleChange} required/>
                    <FormInput name="email" label="Email" type="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name="password" label="Password" type="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <FormInput name="confirmPassword" label="Confirm Password" type="password" value={this.state.confirmPassword} handleChange={this.handleChange} required/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;