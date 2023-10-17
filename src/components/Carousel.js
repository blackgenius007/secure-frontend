import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import prison1 from '../assets/img/prison1.jpeg';
import prison2 from '../assets/img/prison2.jpeg';
import prison3 from '../assets/img/prison4.jpg';
import prison5 from '../assets/img/prison3.jpg';
import prison6 from '../assets/img/prison7.jpg';
      

const ImageSlider = () => {
  const imageStyles = {
    width: '100%', // Adjust the desired width here
    height: '300px', // Adjust the desired height here
    objectFit: 'cover',

  };

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
   
      <div>
        <img src={prison2} alt="" style={imageStyles} />
       
      </div>
      <div>
        <img src={prison3} alt="" style={imageStyles} />
             </div>
      <div>
        <img src={prison5} alt="" style={imageStyles} />
       
      </div>
      <div>
        <img src={prison6} alt="" style={imageStyles} />
       
      </div>
    </Carousel>
    
  );
};

export default ImageSlider;
