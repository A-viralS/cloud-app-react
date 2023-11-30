import React from 'react';

const Hero = () => {
  return (
    <div
      name='home'
      className='w-full h-screen flex flex-col justify-between'
      style={{
        backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20201119/pngtree-korean-new-year-texture-traditional-background-image_472987.jpg)`,
        backgroundSize: 'cover',
      }}
    >
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Beyond Bangles</h1>
          <p className='text-2xl'>Revolution in the way of bangles making </p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <div className="flex">
            <img
              className='w-[250px] h-[300px] '
              src="https://www.alphonsostories.com/AlphonSoStoriesImages/SubServiceImage/bangles-making-sehkawati.jpg"
              alt="/"
            />
            <img
              className='w-[400px] h-[270px] ml-6 '
              src="https://c8.alamy.com/comp/2AWJ194/india-rajasthan-shekhawati-nawalgarh-mother-and-daughter-making-traditional-lac-bangles-by-hand-melting-to-soften-material-over-charcoal-fire-2AWJ194.jpg"
              alt="/"
            />
          </div>

          <img
            className='w-[400px] h-[270px] mt-6 '
            src="https://en.gaonconnection.com/wp-content/uploads/2020/11/Bangle-worker.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
