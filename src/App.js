import './App.css';
import { Component} from 'react';
import {connect} from "react-redux"
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop'; 
import Header from './components/Header/Header';
import SignInSignUp from './pages/signIn-signUp/SignInSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from "reselect"
import {selectCurrentUser} from './redux/user/userSelector'
import CheckOut from './pages/checkOut/CheckOut';


class App extends Component {


  unsubscriberFromAuth = null

  componentDidMount() {

    const {setCurrentUser} = this.props

    // console.log("setCurrentUser", setCurrentUser)

    this.unsubscriberFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          // console.log("snapShot", snapShot.data())
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })

      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscriberFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route  exact path="/" component={HomePage} />
          <Route   path="/shop" component={ShopPage} />
          <Route  exact path="/checkout" component={CheckOut} />
          <Route  exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)}/>
        </Switch>
      </div>
    );
  }
}


// pass props(currentUser) to the component
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,  mapDispatchToProps)(App);
