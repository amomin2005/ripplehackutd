import React, { useEffect, useState } from 'react';
import './sample.css';  


const Sample = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Financial Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Investment Planning Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Investment Planning</h2>
            <p className="text-gray-600 mb-4">
              Get personalized investment strategies tailored to your goals and risk tolerance.
            </p>
            <a className='advisingbutton' href='https://www.goldmansachs.com/what-we-do/investment-banking' > Learn More! </a>
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Retirement Planning</h2>
            <p className="text-gray-600 mb-4">
            Plan for a secure retirement with our comprehensive retirement planning services.
            </p>
            <a className='advisingbutton' href='https://www.marcus.com/us/en/resources/retirement' > Learn More! </a>
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Tax Planning</h2>
            <p className="text-gray-600 mb-4">
            Optimize your tax strategy with expert guidance and planning services.
            </p>
            <a className='advisingbutton' href='https://www.goldmansachs.com/careers/our-firm/tax' > Learn More! </a>
        </div>
        </div>
        </div>
        </div>
      );
}
export default Sample;

