import './App.css';
import Navbar from './Navbar.js'
import Appbody from './Appbody.js'
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart.js'
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './ProductDetails'
import Authenticate from './Authenticate.js'
import { useEffect } from 'react';
import auth from './firebase';
import shopActions from './shopActions'


function App() {
  const dispatch = useDispatch();
  const productname = useSelector( state => state.viewed_item)
  const user = useSelector(state => state.user)

  useEffect(()=> {
    auth.onAuthStateChanged(user => {
      if(user){
        console.log(user)
        dispatch(shopActions.login({
          id: user.uid,
          username: user.displayName,
          email: user.email,
          verified: user.emailVerified,
        }))
      }else{
        dispatch(shopActions.logout())
      }
    })
  }, [])

  return (
    <>
    {
      user ? auth.currentUser.emailVerified ? (
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Appbody />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path={`/${productname ? productname.id : "available"}`}>
            <ProductDetails />
          </Route>

        </Switch>
    </div>
       ) : (<div>go to email to verify your email</div>) : <Authenticate />
    }
    </>
  );
}

export default App;
