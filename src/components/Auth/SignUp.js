import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, CardBody, Row, Col, Spinner } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../actions/auth.actions'
import { useHistory } from 'react-router'

function SignUp() {

const history = useHistory()

const dispatch = useDispatch()
const auth = useSelector(state => state.auth)
const [userData, setuserData] = useState({
    firstName: '', 
    lastName: '',
    email: '', 
    password: '',
    confirmPassword: '', 
})

const changeHandler = (e) => {
    const { name, value } = e.target
    setuserData({...userData, [name]: value})
}

const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signUp(userData, history))
}

    return (
        <Row className= "d-flex align-items-center py-4">
            <Col sm= {{ size:"12" }} md= {{ size:"4", offset: 4}}> 
                <Card  body className= "shadow p-3 mb-5 bg-white rounded">            
                    <CardBody>
                        <CardTitle><h2>Sign Up</h2></CardTitle>
                            <Form className="form" onSubmit= {e => submitHandler(e)}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="firstName">First Name</Label>
                                            <Input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="first name"
                                            value= {userData.firstName}
                                            onChange= {e => changeHandler(e)}
                                            required
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="lastname">Last Name</Label>
                                            <Input
                                            type="text"
                                            name="lastName"
                                            id="lastname"
                                            placeholder="last name"
                                            value= {userData.lastName}
                                            onChange= {e => changeHandler(e)}
                                            required
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="example@example.com"
                                    value= {userData.email}
                                    onChange= {e => changeHandler(e)}
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
                                    value= {userData.password}
                                    onChange= {e => changeHandler(e)}
                                    required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="********"
                                    value= {userData.confirmPassword}
                                    onChange= {e => changeHandler(e)}
                                    required
                                    />
                                </FormGroup>
                                <small className= "text-danger">
                                    {userData.confirmPassword && userData.confirmPassword != userData.password && "passwords must match" }
                                </small>
                                <Button className= "pull-right" color= "primary" size= "lg" type= "submit" disabled= {userData.confirmPassword != userData.password || userData.confirmPassword || auth.loading =='' ? true : false} >{auth.loading ? <Spinner color="light" /> : "Sign Up" } </Button>
                            </Form>
                    </CardBody>
                    <p className= "pull-right d-flex text-muted">Already have an account ? < a href= '/signin'><span> Sign In</span></a></p>
                </Card>
            </Col>
        </Row>
    )
}

export default SignUp
