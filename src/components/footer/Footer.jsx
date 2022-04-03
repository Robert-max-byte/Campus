import { Badge } from '@material-ui/core';
import {Accordion, Button, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import {  Help, Home,  Menu,  MenuOutlined,  Person,  ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './footer.css'


export const Footer = () => {
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    return (
            <Navbar sticky='top' expand='md' bg='dark' collapseOnSelect variant='dark' 
            className="justify-content-between " >
                <div style={{display:'flex',marginLeft:'10px'}}>
                <Button variant="primary" onClick={handleShow} style={{marginRight:'10px'}}>
                    MENU
                </Button>
                <Navbar.Brand>CAMPUS MALL</Navbar.Brand>
                </div>
                <ul className='justify-content-end'>
               <div >
               <Navbar.Toggle style={{position:'absolute'}} />
                <MenuOutlined  className='control'/>
               </div>
                
                <Navbar.Collapse>
                    <Nav.Link>
                        <Person/> Account
                    </Nav.Link>
                    <Nav.Link>
                        <Help/>Help
                    </Nav.Link>
                    <Nav.Link >
                        <ShoppingCart/> Cart
                    </Nav.Link>
                </Navbar.Collapse>
                </ul>
                <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CAMPUS MALL</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Accordion defaultActiveKey='0' flush style={{ position:'sticky' }} >
                <Accordion.Item eventKey='0'>
                <Accordion.Header> Categories</Accordion.Header>
                <Accordion.Body style={{cursor:'pointer'}}><a href='/shops'>Fashion</a></Accordion.Body>
                    <Accordion.Body style={{cursor:'pointer'}}><a href='/shops'>Electronics</a></Accordion.Body>
                    <Accordion.Body style={{cursor:'pointer'}}><a href='/shops'>Foods</a></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                <Accordion.Header> Shops</Accordion.Header>
                <Accordion.Body style={{cursor:'pointer'}}><a href='/shop'>Kagya Foods</a></Accordion.Body>
                    <Accordion.Body style={{cursor:'pointer'}}><a href='/shop'>Hilson Clothings</a></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
            </Navbar>
    )
}
