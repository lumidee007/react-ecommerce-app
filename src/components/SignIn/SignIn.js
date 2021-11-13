import React, {Component} from "react";
import SignInSignUp from "../../pages/signIn-signUp/SignInSignUp";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import './signIn.styles.scss'

import {signInWithGoogle}  from '../../firebase/firebase.utils'


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = () => {
        this.setState({
            email : '',
            password : ''
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState(
            {[name] : value}
        )
    }

    render () {
        return(
            <div className="sign-in">
                <h2 >I already have an account</h2>
                <span className="title">sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='email' 
                    value={this.state.email} 
                    name='email' 
                    required 
                    handleChange={this.handleChange}
                    label="Email"
                    />
                    <FormInput 
                    type='password' 
                    value={this.state.password} 
                    name='password' 
                    handleChange={this.handleChange}
                    label="Password"
                    />
                    <div className="buttons">
                    <CustomButton type="submit"> Sign in</CustomButton>
                    <CustomButton target="_self" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn