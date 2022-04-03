import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css'

export const Login = () => {
  return <div>
  <Container style={{display:'flex',justifyContent:'center',marginTop:'60px'}}>
  <Col md={4}  >
  <Form>


<Form.Group className="sm-2" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>

<div className="login">
          <Link to='/register'>
              <span>Don't have an accout? Register</span>
          </Link>
       </div>
<Link to='/home'>
<Button variant="primary" type="submit">
  Login
</Button>
</Link>
</Form>
  </Col>
  </Container>
</div>
};
