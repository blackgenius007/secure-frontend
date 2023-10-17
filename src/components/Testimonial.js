import React from 'react';

const Testimonial = ({ name, text, image }) => (
  <div className="testimonial">
    <img src={image} alt={name} className="testimonial-image" />
    <p className="testimonial-text">{text}</p>
    <p className="testimonial-name">{name}</p>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'jane-smith.jpg',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;