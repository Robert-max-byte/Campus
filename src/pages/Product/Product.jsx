import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { shirtItems } from '../../data'

const Product = () => {
  return (
   <div>
     <Footer/>
      <Container style={{marginTop:'20px'}}>
        <Row lg={2}>
        <Col md={6}>
          <Card style={{width:'20rem',marginTop:'10px'}}>
            <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVb2_tOW03-vIhwLA120fdRL7VWQSQr54WNA&usqp=CAU'
             className='cardImg'/>
          </Card>  
        </Col>
        <Col md={4}>
            <Card.Body>
              <Card.Title>Shirt</Card.Title>
              <Card.Text>Ghc10</Card.Text>
              <Card.Text>Color:</Card.Text>
              <Card.Text>Size:</Card.Text>
            </Card.Body>
            <Link to='/cart'>
              <Button>ADD TO CART</Button>
            </Link>
        </Col>
        </Row>
        <Col style={{marginTop:'20px'}}>
                            <Col>
                                <div style={{display:'flex',justifyContent:"space-between"}}>
                                    <span style={{marginTop:'15px',fontSize:'1.5rem'}} >Also available</span>
                                    <Link to='/shop'>
                                        <span>See all</span>
                                    </Link>
                                </div>
                            </Col>
                        <Row xs={1} md={2} className="g-4">
                                {shirtItems.map((item)=>(
                                   <Col lg={3} >
                                   <Link to='/Product'>
                                    <Card  style={{ width: '14rem'}}> 
                                            <Card.Img variant="top" src={item.img}/>
                                            <Card.Body>
                                            <Card.Title>{item.desc}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                    </Col>
                                ))}
                            </Row>
                    </Col>
    </Container>
   </div>
  )
}

export default Product