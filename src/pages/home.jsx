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
            <a className='advisingbutton' href='https://docs.google.com/forms/d/e/1FAIpQLSdZIfpzywOTAct0mvtb3BnEbF6F5Ir0KdN4_aypxOAmlmHnBg/viewform?usp=sf_link' > Get Started! </a>
          </div>
        </div>
        <div className='loanok'>
        <div className='loan'>
          <h1>Need a loan but don't have enough credit?</h1>
          <h3> Get personalized investment strategies tailored to your goals and risk tolerance.</h3>
          <a className='loanbutton' href='https://www.marcus.com/us/en/resources/lending'> Get Started </a>
        </div>
        </div>
        <div className='investmentok'>
        <div className='investment'>
          <h1>Investment Strategy Advising with AI ChatBot</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum doloribus odio, quae deserunt excepturi numquam eveniet, ipsa dolor nesciunt repudiandae dicta ipsam rem inventore nam. Perspiciatis illo eligendi veritatis?</h3>
          <button className='advisingbutton'> Get Started </button>
        </div>
        </div>
      </div>
    );
  }

export default Home;