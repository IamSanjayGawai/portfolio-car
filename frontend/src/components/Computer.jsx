import React from 'react';
import start from '/start6.mp4';

const Computer = () => {
  return (
    <div className='fixed inset-0 w-full h-full z-50 bg-black'>
      <video autoPlay  playsInline className='w-full h-full object-cover'>
        <source src={start} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Computer;
