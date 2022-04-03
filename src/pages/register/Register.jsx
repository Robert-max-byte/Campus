import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {
  return <div>
    <Container style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
    <Col md={4}  >
    <Form>
  <Form.Group className="sm-2" controlId="formBasicEmail">
    <Form.Label>Firstname</Form.Label>
    <Form.Control type="text" placeholder="Enter firstname" />
  </Form.Group>

  <Form.Group className="sm-2" controlId="formBasicEmail">
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text" placeholder="Enter Lastname" />
  </Form.Group>

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

  <Form.Group className="mb-3">
    <Form.Label>Campus</Form.Label>
    <Form.Select>
      <option>Select Campus</option>
      <option value="Obuasi Campus"> knust(Obuasi campus)</option>
                <option value="Kumasi campus">KNUST(Kumasi Campus)</option>
                <option value="Legon">UG(Legon Campus)</option>
                <option value='Accra Poly'>Accra Technical University</option>
                <option value='Ucc'>University of Cape Coast</option>
                <option value='Uner'>University of Energy and Natural Resources</option>
    </Form.Select>
  </Form.Group>
  <div className="login">
            <Link to='/login'>
                <span>Already have an account? Login</span>
            </Link>
         </div>
  <Link to='/home'>
  <Button variant="primary" type="submit">
    Register
  </Button>
  </Link>
</Form>
    </Col>
    </Container>
  </div>

  ;
};

export default Register;
