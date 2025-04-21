"use client";
import React, { useState } from 'react';
import './Services.css';
import Button from 'react-bootstrap/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const allServices = [
  {
    image: '/s1.png',
    title: '1-on-1 Coaching',
    desc: 'Personalized mentoring sessions tailored to your specific sales challenges and goals.',
  },
  {
    image: '/s2.png',
    title: 'Sales Bootcamp',
    desc: 'Intensive training program to master essential sales skills in just 8 weeks.',
  },
  {
    image: '/s3.png',
    title: 'Best Strategy',
    desc: 'Custom sales frameworks and strategies for emerging businesses.',
  },
  {
    image: '/s4.png',
    title: 'Corporate Training',
    desc: 'Comprehensive sales training programs for enterprise teams.',
  },
  {
    image: '/s1.png',
    title: 'Advanced 1-on-1',
    desc: 'Deep dive into personal sales branding and long-term planning.',
  },
  {
    image: '/s2.png',
    title: 'Growth Bootcamp',
    desc: 'Next-level bootcamp for scaling sales skills.',
  },
  {
    image: '/s3.png',
    title: 'Sales Audit',
    desc: 'Full review of your sales funnel with data-backed feedback.',
  },
  {
    image: '/s4.png',
    title: 'Team Optimization',
    desc: 'Train your sales team to increase closing rates and motivation.',
  }
];

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    if (startIndex + itemsToShow < allServices.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleServices = allServices.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className='service'>
      <h1 className='title1'>Services <span>&</span> Programs</h1>
      <p className='para1'>Tailored solutions to elevate your sales performance and achieve breakthrough results.</p>
      <div className='slider-controls'>
        <button onClick={prevSlide} className='arrow-btn'><FaChevronLeft /></button>
        <div className='boxes1'>
          {visibleServices.map((service, index) => (
            <div className='card1' key={index}>
              <img src={service.image} className='card-image1' />
              <p className='card-subtext1'>{service.title}</p>
              <p className='card-subtext2'>{service.desc}</p>
              <Button className='know'>Know More</Button>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className='arrow-btn'><FaChevronRight /></button>
      </div>
    </div>
  );
}