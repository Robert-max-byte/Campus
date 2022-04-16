import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import './cart.css'

export const Cart = () => {
  return (
    <div>
        <Footer/>
        <Container>
            <Row style={{marginTop:'10px'}} >
                <Col><span>YOUR CART</span></Col>
                <Col>
                    <Link to='/Home'><Button>Continue Shopping</Button></Link>
                </Col>
            </Row>
            <Row sm={1}>
                <Col sm={4} lg={8}>
                    <Col  >
                    <Row>
                    <Col>
                    <Card style={{width:'10rem',marginTop:'10px'}}>
                        <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVb2_tOW03-vIhwLA120fdRL7VWQSQr54WNA&usqp=CAU'
                         className='cardImg'/>
                     </Card>  
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Shirt</Card.Title>
                            <Card.Text>Size:</Card.Text>
                            <Card.Text>COlor:</Card.Text>
                            <Card.Text>Price:</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col style={{display:'flex', marginTop:'10px'}} >
                        <div >
                            <span>Quantity</span>
                            1
                            <Button className='btn-danger'>Remove</Button>
                        </div>
                    </Col>
                    </Row>
                   
                    </Col>
                </Col>
                <Col className='Shader ' sm={4} lg={4} >
                    <div className='content' >
                        <h1>Summary</h1>
                        <Card.Title>Sub-total:GHc300</Card.Title>
                        <Card.Title>Total:GHc300</Card.Title>
                        <Button className='btn-danger' >CHECKOUT</Button>
                    </div>
                   
                </Col>
            </Row>
        </Container>
    </div>
  )
}
