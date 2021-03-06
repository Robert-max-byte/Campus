import {  FavoriteOutlined, SearchOutlined,  ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import { shirtItems } from '../../data';
import Carouse from './Carouse';
import './home.css'


export const Home = () => {
    return (
           <div>
               <Footer/>
               {/* <div className='hideout'>
                   <Carouse/>
               </div> */}
                <Container>
                    <Col>
                            <Col>
                                <div style={{display:'flex',justifyContent:"space-between"}}>
                                    <span style={{marginTop:'15px'}} >Kagya Foods</span>
                                    <Link to='/shop'>
                                        <span>See all</span>
                                    </Link>
                                </div>
                            </Col>
                        <Row xs={1} md={2} className="g-4 " style={{marginLeft:'44px'}}>
                        {shirtItems.map((item)=>(
                                   <Col lg={3} >
                                   <Link to='/Product'>
                                    <Card  style={{ width: '16rem',height:'16em'}}> 
                                            <Card.Img variant="top" src={item.img} style={{width:'120px',heigth:'100px',marginLeft:'15px'}}/>
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
