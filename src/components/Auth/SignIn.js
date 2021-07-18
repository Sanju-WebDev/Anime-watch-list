import React from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, CardBody, Row, Col } from 'reactstrap'

function SignIn() {
    return (
        <Row className= "d-flex align-items-center py-5">
            <Col sm= {{ size:"12" }} md= {{ size:"4", offset: 4}}> 
        <Card  body className= "shadow p-3 mb-5 bg-white rounded">            
            <CardBody>
            <CardTitle><h2>Sign In</h2></CardTitle>
            <Form className="form">
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
            <Button className= "pull-right" color= "primary" size= "lg">Sign In</Button>
        </Form>
        </CardBody>
        <p className= "pull-right d-flex text-muted">Don't have an account ? < a href= '/signup'><span> Sign Up</span></a></p>
        </Card>
        </Col>
        </Row>
    )
}

export default SignIn
