import react from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../CartIcon/CartIcon'
import CartDownDown from '../CartDropDown/CartDropDown'

const Header = ({currentUser, hidden}) => {
    
    return (
        <div className='header'>
            <Link to='/' className='logo'>
                <Logo />
            </Link>


            <div className="options">
                <Link to='/shop' className="option">
                    SHOP
                </Link>
                <Link to='/shop' className="option">
                    CONTACT
                </Link>

                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link to='/signin' className="option">
                    SIGN IN
                </Link>

                }
                <CartIcon />
            </div>

            {hidden ? null : <CartDownDown />}
        </div>
    )
}

const mapStateToProps = ({user : {currentUser}, cart: {hidden}}) => ({currentUser , hidden})


export default connect(mapStateToProps,null)(Header)