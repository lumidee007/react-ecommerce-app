import './App.css';
import { Component } from 'react';
import {connect} from "react-redux"
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop'; 
import Header from './components/Header/Header';
import SignInSignUp from './pages/signIn-signUp/SignInSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action';


class App extends Component {


  unsubscriberFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscriberFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
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
          <Route  exact path="/shop" component={ShopPage} />
          <Route  exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null,  mapDispatchToProps)(App);
