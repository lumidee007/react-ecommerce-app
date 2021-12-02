import React from 'react'
import './customButton.styles.scss'

function CustomButton({children, inverted, isGoogleSignIn, ...restProps}) {
    return (
        <button 
        className={`inverted ? 'inverted': ''} {${isGoogleSignIn ? 'google-sign-in': ""} custom-button`}
        {...restProps}>
            {children}
        </button>
    )
}

export default CustomButton
