import React, {Component} from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import './signIn.styles.scss'

import {auth, signInWithGoogle}  from '../../firebase/firebase.utils'


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email : '', password : ''})
        } catch (error) {
            console.log('unable to signin', error)
        }

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
                <h2 className="title">I already have an account</h2>
                <span >sign in with your email and password</span>

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
                    <CustomButton type="button" target="_self" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn