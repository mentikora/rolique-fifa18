import React from 'react';
import './styles.css';

const sponsors = [
  {
    name: '2 pizdylinu from Vasya',
    image: './images/s1.jpg'
  },
  {
    name: 'Coach Tolique',
    image: './images/s2.png'
  },
  {
    name: 'Vegetarian cafe "Dich West"',
    image: './images/s3.jpg'
  },
];

export default () => (
  <div className="sponsors">

    {
      sponsors.map( (sponsor, key) => (
        <div 
          className="sponsor" 
          key={ key }
          style={{ backgroundImage: `url(${ sponsor.image })` }}
        >
          <h3 className="sponsor__name">
            { sponsor.name }
          </h3>
        </div>
      ))
    }

  </div>
)