import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUP/SignUP";
import "./signInSignUp.styles.scss"

const SignInSignUp = () => {
    return (
        <div className="signIn-signUP">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp