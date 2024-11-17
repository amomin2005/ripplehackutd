import React from 'react';
import './home.css';  

function Home() {
    return (
      <div>
        <div className='middlearea'>
          <h1 className='title'> Goldman Sachs </h1>
          <h2> X </h2>
          <h1 className='utdtitle'> UTDHackRipple </h1>
        </div>
        <div className='ok'>
          <div className='advising'>
            <h1>Schedule an Advising Appointment</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum doloribus odio, quae deserunt excepturi numquam eveniet, ipsa dolor nesciunt repudiandae dicta ipsam rem inventore nam. Perspiciatis illo eligendi veritatis?</h3>
            <button className='advisingbutton'> Get Started! </button>
          </div>
        </div>
        <div className='loan'>
          <h1>Need a loan but don't have enough credit?</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum doloribus odio, quae deserunt excepturi numquam eveniet, ipsa dolor nesciunt repudiandae dicta ipsam rem inventore nam. Perspiciatis illo eligendi veritatis?</h3>
          <button className='advisingbutton'> Get Started </button>
        </div>
        <div className='investment'>
          <h1>Investment Strategy Advising with AI ChatBot</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum doloribus odio, quae deserunt excepturi numquam eveniet, ipsa dolor nesciunt repudiandae dicta ipsam rem inventore nam. Perspiciatis illo eligendi veritatis?</h3>
          <button className='advisingbutton'> Get Started </button>
        </div>
      </div>
    );
  }

export default Home;