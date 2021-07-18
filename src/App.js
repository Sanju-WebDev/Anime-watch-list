import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AnimeForm from "./components/AnimeForm/Form";
import AnimeLists from "./components/AnimeList/List";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimeList } from "./actions/animes.actions";
import Header from "./components/common/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
// import './App.css'

function App() {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAnimeList())
}, [dispatch])

  return (
    <Container >      
        <Router>
          <Header /> 
          <Switch> 
            <Route exact path= "/add-anime" component= {AnimeForm} />
            <Route exact path= "/" component= {AnimeLists} />
            <Route exact path= "/signin" component= {SignIn} />
            <Route exact path= "/signup" component= {SignUp} />
          </Switch>
        </Router>
    </Container>
  );
}

export default App;
