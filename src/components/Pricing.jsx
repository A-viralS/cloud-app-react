import React, { useState } from 'react';

const Pricing = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, such as sending an email or saving to a database
    console.log('Form submitted:', { name, email, message });
    // You can reset the form fields after submission if needed
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div name='contact' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-yellow-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>
        <div className='text-center py-8 text-yellow-300'>
          <h2 className='text-3xl uppercase'>Contact Us</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Have a question or want to place an order? Reach out to us!</h3>
        </div>

        <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
          <div className='mb-6'>
            <label htmlFor='name' className='block text-2xl text-yellow-500 mb-2'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-4 py-2 rounded-md bg-white text-yellow-900 focus:outline-none focus:ring-2 focus:ring-indigo-400'
              required
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='email' className='block text-2xl text-yellow-500 mb-2'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2 rounded-md bg-white text-yellow-900 focus:outline-none focus:ring-2 focus:ring-indigo-400'
              required
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='block text-2xl text-yellow-500 mb-2'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows='4'
              className='w-full px-4 py-2 rounded-md bg-white text-yellow-900 focus:outline-none focus:ring-2 focus:ring-indigo-400'
              required
            ></textarea>
          </div>

          <button type='submit' className='w-full bg-indigo-500 text-white py-3 rounded-md transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pricing;
