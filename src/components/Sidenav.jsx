import React, { useState } from 'react'
import { Accordion, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
 
  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CAMPUS MALL</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Accordion defaultActiveKey='0' flush style={{ position:'sticky' }} >
                <Accordion.Item eventKey='0'>
                <Accordion.Header> Categories</Accordion.Header>
                    <Accordion.Body>Fashion</Accordion.Body>
                    <Accordion.Body>Electronics</Accordion.Body>
                    <Accordion.Body>Food</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                <Accordion.Header> Shops</Accordion.Header>
                    <Accordion.Body  >Kagya Foods</Accordion.Body>
                    
                </Accordion.Item>
            </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </div>
  )
}

export default Sidenav