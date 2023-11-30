import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>About Us</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Empowering Bangle Industry Workers</h3>
          <p className='text-3xl'>
            The bangle industry, while culturally rich and economically significant, presents inherent challenges to the safety and well-being of its workers.
            Exposure to harmful gases and unpredictable temperature fluctuations in the workplace poses a serious threat to the health of these artisans.
          </p>
        </div>

        <div className='text-center py-8 text-slate-300'>
          <h3 className='text-5xl font-bold text-white py-8'>Our Solution: Smart Safety Mask</h3>
          <p className='text-3xl'>
            To address these concerns, we present a groundbreaking solution in the form of a Smart Safety Mask, integrating Internet of Things (IoT) technology.
            The mask employs an Arduino board, MQ135 and MQ07 gas sensors, and a K type thermocouple with a Max6675 sensor to dynamically monitor the atmospheric conditions.
          </p>
        </div>

       

      </div>
    </div>
  );
};

export default About;
