import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, CardBody, Row, Col, Spinner } from 'reactstrap'
import axiosInstance from './../../Http'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../actions/auth.actions'
import { useHistory } from 'react-router'

function SignIn() {

const history = useHistory()

const dispatch = useDispatch()
const [signinCred, setsigninCred] = useState({
    email: '', 
    password: '', 
})
const auth = useSelector(state => state.auth)

const submitHandler = async (e) => {
    e.preventDefault()
    dispatch(signIn(signinCred, history))
}

    return (
        <Row className= "d-flex align-items-center py-5">
            <Col sm= {{ size:"12" }} md= {{ size:"4", offset: 4}}> 
        <Card  body className= "shadow p-3 mb-5 bg-white rounded">            
            <CardBody>
            <CardTitle><h2>Sign In</h2></CardTitle>
            <Form className="form" onSubmit= {(e) => submitHandler(e)}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
                value= {signinCred.email}
                onChange= {e => setsigninCred({...signinCred, email: e.target.value})}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value= {signinCred.password}
                onChange= {e => setsigninCred({...signinCred, password: e.target.value})}
                required
                />
            </FormGroup>
            <Button className= "pull-right" color= "primary" size= "lg" type= "submit" disabled={auth?.loading}>{auth?.loading ?<Spinner color="light" /> : "Sign In" }</Button>
        </Form>
        </CardBody>
        <p className= "pull-right d-flex text-muted">Don't have an account ? < a href= '/signup'><span> Sign Up</span></a></p>
        </Card>
        </Col>
        </Row>
    )
}

export default SignIn
