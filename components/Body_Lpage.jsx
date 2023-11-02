
import React from 'react';
import Link from 'next/link';

const Body_Lpage = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-green-200 font-bold mb-4">Welcome to Our Grievance Redressal System</h1>
        <p className="text-lg text-white mb-8">
          At [Your Organization's Name], we are dedicated to addressing your concerns and ensuring a harmonious environment for everyone. Our Grievance Redressal System provides a secure and confidential platform for you to raise grievances, report issues, and seek resolutions.
        </p>

        <div className="bg-green-200 shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl text-black font-bold mb-4">Key Features:</h2>
            <ul className="text-gray-700 mb-6">
              <li className="flex items-start mb-2">
                <span className="inline-block w-6 h-6 bg-black rounded-full flex-shrink-0 mr-2 mt-1"></span>
                <span>User-Friendly Interface: Our system offers an intuitive and easy-to-navigate interface, ensuring a seamless experience for users of all backgrounds.</span>
              </li>
              <li className="flex items-start mb-2">
                <span className="inline-block w-6 h-6 bg-black rounded-full flex-shrink-0 mr-2 mt-1"></span>
                <span>Secure and Confidential: Your privacy and security are our top priorities. All information shared on this platform is encrypted and confidential.</span>
              </li>
              <li className="flex items-start mb-2">
                <span className="inline-block w-6 h-6 bg-black rounded-full flex-shrink-0 mr-2 mt-1"></span>
                <span>Efficient Ticketing System: File your grievance through our efficient ticketing system. Each grievance is assigned a unique reference number, allowing you to track its status.</span>
              </li>
              <li className="flex items-start mb-2">
                <span className="inline-block w-6 h-6 bg-black rounded-full flex-shrink-0 mr-2 mt-1"></span>
                <span>Transparent Process: Stay informed about the progress of your grievance. Our system provides real-time updates, ensuring transparency in the resolution process.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-black rounded-full flex-shrink-0 mr-2 mt-1"></span>
                <span>Diverse Categories: Whether it's workplace-related issues, suggestions for improvement, or any other concern, our system accommodates a wide range of grievance categories.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-black rounded-full flex-shrink-0 mr-2 mt-1"></span>
                <span>Quick Resolutions: Our dedicated team of experts works tirelessly to resolve grievances promptly. Expect timely responses and effective solutions.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl text-green-200 font-bold mb-4">How It Works:</h2>
          <p className="text-white mb-6">
            Submit Your Grievance: Click on the "Submit a Grievance" button to provide details about your concern. Include relevant information to help us understand the issue better.
          </p>
          <p className="text-white mb-6">
            Track Your Grievance: Use your unique reference number to track the status of your grievance. Our system keeps you updated on every step of the resolution process.
          </p>
          <p className="text-white mb-6">
            Receive Resolution: Once your grievance is resolved, you'll receive a notification with details about the solution. We encourage open communication and welcome feedback.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl text-green-200 font-bold mb-4">Get Started:</h2>
          <p className="text-white mb-6">
            Ready to address your concern? Click on the "Submit a Grievance" button to get started. Your voice matters, and we are here to listen and act.
          </p>
        </div>

        <p className="text-white mt-8">
          Thank you for choosing [Your Organization's Name] for your grievance redressal needs. Together, let's build a respectful and supportive community.
        </p>
      </div>
    </div>
  );
};


export default Body_Lpage
