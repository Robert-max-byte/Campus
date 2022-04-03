import React from 'react';
import './categories.css'

const Categories = () => {
  return <div className='cat-content'>
      <div className="category">
        <div className="inside">
          <div className="cat-image">
            <img src='image.jpg' alt=''/>
          </div>
          <div className="desc">
            <span>Dress</span>
          </div>
        </div>

        <div className="inside">
          <div className="cat-image">
            <img src='image.jpg' alt=''/>
          </div>
          <div className="desc">
            <span>Phones and Accessories</span>
          </div>
        </div>

        <div className="inside">
          <div className="cat-image">
            <img src='image.jpg' alt=''/>
          </div>
          <div className="desc">
            <span>Foods</span>
          </div>
        </div>

      </div>
      
  </div>;
};

export default Categories;
