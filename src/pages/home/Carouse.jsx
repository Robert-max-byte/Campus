import React from 'react'
import { Carousel } from 'react-bootstrap'
import './home.css'

const Carouse = () => {
  return (
      <Carousel>
        <Carousel.Item interval={1000}> 
            <img 
            className="d-block w-100"
            src='s5.jpg'/>
        </Carousel.Item>
        <Carousel.Item interval={500}> 
            <img 
            className="d-block w-100"
            src='s3.jpg'/>
        </Carousel.Item>
        <Carousel.Item> 
            <img src='s5.jpg'/>
        </Carousel.Item>
    </Carousel>
  )
}

export default Carouse