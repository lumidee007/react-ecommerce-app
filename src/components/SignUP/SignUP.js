import React, {Component} from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import './signUp.styles.scss'



class SignUp extends Component {
    constructor() {
        super()
        this.state = ({
            displayName : "",
            email : "",
            password: "",
            confirmpassword: ""
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmpassword} = this.state
        if(password !== confirmpassword){
            alert("password don't match")
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            createUserProfileDocument(user, {displayName})
            this.setState({
                displayName : " ",
                email : " ",
                password: "",
                confirmpassword: ""
            })
        } catch (error) {
            console.error(error)
        }

    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        const {displayName, email, password, confirmpassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>sign up with your email and password</span>
                <form className="" onSubmit={this.handleSubmit}>
                    <FormInput
                        value={displayName}
                        name='displayName'
                        type='text'
                        label="Display name"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        value={email}
                        name='email'
                        type='text'
                        label="Email"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        value={password}
                        name='password'
                        type='password'
                        label="password"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        value={confirmpassword}
                        name='confirmpassword'
                        type="password"
                        label="confirmpassword"
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp