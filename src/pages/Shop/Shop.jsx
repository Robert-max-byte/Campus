import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { accessoriesItem} from '../../data'

export const Shop = () => {
  return (
   <div>
     <Footer/>
      <Container>
    <Col style={{marginDown:'10px',marginTop:'10px'}}><h1>Kagya Foods</h1></Col>
  <Col>
  <Row xs={1} md={2} className="g-4">
                                {accessoriesItem.map((item)=>(
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
