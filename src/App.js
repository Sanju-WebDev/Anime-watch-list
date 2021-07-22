import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AnimeForm from "./components/AnimeForm/Form";
import AnimeLists from "./components/AnimeList/List";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimeList } from "./actions/animes.actions";
import Header from "./components/common/Header";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import decode from 'jwt-decode'
import { signOut } from "./actions/auth.actions";
// import './App.css'

function App() {

const dispatch = useDispatch()
const auth = useSelector(state => state.auth)

const [isAuthenticated, setisAuthenticated] = useState(false)

useEffect(() => {
  dispatch(fetchAnimeList())
}, [dispatch])

useEffect(() => {
  setisAuthenticated(auth.token!=null)
  if(auth?.token) {
    const decodedToken = decode(auth?.token)
    if(decodedToken.exp * 1000 < new Date().getTime()) dispatch(signOut())
  }
},[auth])

const GuestRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => !isAuthenticated ? ( <Component {...props} /> ) : ( <Redirect to={{ pathname: "/" }} /> ) } />
  );

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => isAuthenticated ? ( <Component {...props} /> ) : ( <Redirect to={{ pathname: "/" }} /> ) } />
  );

  return (
    <Container >      
        <Router>
          <Header /> 
          <Switch> 
            <Route exact path= "/add-anime" component= {AnimeForm} />
            <Route exact path= "/" component= {AnimeLists} />
            <GuestRoute exact path= "/signin" component= {SignIn} />
            <GuestRoute exact path= "/signup" component= {SignUp} />
          </Switch>
        </Router>
    </Container>
  );
}

export default App;
