import React from 'react';
import Partners from '../../Partner';

const MissionAndVision = () => {
  return (
    <>
    <div className="bg-gray-100 py-10 px-5 mt-20"> 
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mission & Vision</h2>
        <p className="text-gray-600 text-center mb-8">
          We make sure that our clients are always on the receiving end of our superlative and insightful consulting services. We are hell-bent on proffering reliable and refined IT services, making us a one-stop business solution company.
        </p>

        {/* Mission */}
        <div className="mb-10">
          <img
            src="/mv-1.png"
            alt="Mission"
            className="h-auto rounded-lg shadow-md mb-5 w-1/2 mx-auto"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">MISSION</h3>
          <p className="text-gray-600">
            Our mission is to spur productive expansion through superior client service, quality, innovation, and dedication. Utmost client satisfaction is cardinal to our business success. With an overriding goal of realizing all our client’s needs, we operate as a catalyst in their business. We incessantly upgrade our knowledge base and thereby keep abreast of all the swiftly transmuting GIS industry trends.
          </p>
        </div>

        {/* Vision */}
        <div>
          <img
            src="/mv-2.jpg"
            alt="Vision"
            className="h-auto rounded-lg shadow-md mb-5 w-1/2 mx-auto"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">VISION</h3>
          <p className="text-gray-600">
            The guiding vision of EMITECH INFOSYSTEMS is <span className="font-bold">"Bringing the best to everyone we touch".</span> By “The best,” we mean the best products, the best people, and the best ideas. We are committed to attracting, developing, and keeping a diverse workforce that reflects the nature of our global business. These three pillars have been the hallmarks of our company.
          </p>
        </div>
      </div>
    </div>
    <Partners />
    </>
  );
};

export default MissionAndVision;
