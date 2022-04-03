import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { shopImg } from '../../data';

export const Shops = () => {
  return <Container style={{marginTop:'20px'}}>
  <Col>
          <Row xs={1} md={2} className="g-4">
                                {shopImg.map((item)=>(
                                   <Col lg={3} >
                                   <Link to='/shop'>
                                    <Card  style={{ width: '14rem'}}> 
                                            <Card.Img variant="top" src={item.img}/>
                                            <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                    </Col>
                                ))}
            </Row>
  </Col>
</Container>
};
