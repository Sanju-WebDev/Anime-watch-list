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
import Headers from "./components/helpers/headers";
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
  if(auth?.token?.token) {
    const decodedToken = decode(auth?.token?.token)
    if(decodedToken.exp * 1000 < new Date().getTime()) dispatch(signOut())
  }
},[auth])

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => !isAuthenticated ? ( <Component {...props} /> ) : ( <Redirect to={{ pathname: "/" }} /> ) } />
  );

  return (
    <Container >      
        <Router>
          <Header /> 
          {/* <Headers /> */}
          <Switch> 
            <Route exact path= "/add-anime" component= {AnimeForm} />
            <Route exact path= "/" component= {AnimeLists} />
            <PrivateRoute exact path= "/signin" component= {SignIn} />
            <PrivateRoute exact path= "/signup" component= {SignUp} />
          </Switch>
        </Router>
    </Container>
  );
}

export default App;
