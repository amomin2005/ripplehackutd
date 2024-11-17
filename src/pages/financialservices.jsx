import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FinancialServices = () => {
  useEffect(() => {
    // Add the Coze SDK script
    const script = document.createElement('script');
    script.src = "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.0.0-beta.4/libs/oversea/index.js";
    script.async = true;
    
    script.onload = () => {
      // Initialize the chat client after the script loads
      new window.CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7438248516491395128',
        },
        componentProps: {
          title: 'Financial Advisor',  // You can customize this title
          // You can add more styling props here
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        },
      });
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Financial Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Investment Planning Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Investment Planning</h2>
            <p className="text-gray-600 mb-4">
              Get personalized investment strategies tailored to your goals and risk tolerance.
            </p>
            <Link
              to="/investment"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Retirement Planning Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Retirement Planning</h2>
            <p className="text-gray-600 mb-4">
              Plan for a secure retirement with our comprehensive retirement planning services.
            </p>
            <Link
              to="/retirement"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Tax Planning Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Tax Planning</h2>
            <p className="text-gray-600 mb-4">
              Optimize your tax strategy with expert guidance and planning services.
            </p>
            <Link
              to="/tax"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Add a container for the chat widget */}
        <div id="coze-chat-container"></div>
      </div>
    </div>
  );
};

export default FinancialServices;
