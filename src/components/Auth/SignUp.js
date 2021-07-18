import React from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, CardBody, Row, Col } from 'reactstrap'

function SignUp() {
    return (
        <Row className= "d-flex align-items-center py-4">
            <Col sm= {{ size:"12" }} md= {{ size:"4", offset: 4}}> 
                <Card  body className= "shadow p-3 mb-5 bg-white rounded">            
                    <CardBody>
                        <CardTitle><h2>Sign Up</h2></CardTitle>
                            <Form className="form">
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="firstName">First Name</Label>
                                            <Input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="first name"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="lastname">Last Name</Label>
                                            <Input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            placeholder="last name"
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
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="********"
                                    />
                                </FormGroup>
                                <Button className= "pull-right" color= "primary" size= "lg">Sign Up</Button>
                            </Form>
                    </CardBody>
                    <p className= "pull-right d-flex text-muted">Already have an account ? < a href= '/signin'><span> Sign In</span></a></p>
                </Card>
            </Col>
        </Row>
    )
}

export default SignUp
