import React from 'react';
import Partners from '../../Partner';

const WhyArc = () => {
  return (
    <>
      <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why ESRI ArcGIS Software?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-4">
          <li>
            <strong>World Leaders in Geospatial Solutions: </strong> 
            ESRI is globally recognized as the leader in geospatial products and solutions, empowering industries with tools to visualize and analyze spatial data effectively.
          </li>
          <li>
            <strong>5th Largest Privately-Owned Technology Company: </strong>  
            ESRI ranks among the top privately-owned tech companies in the world, focusing on innovation and quality without external public influence.
          </li>

          <div className="flex justify-center mb-6">
            <img
              src="arcGis.jpg"
              alt="ARCGIS"
              className="w-full max-w-md mx-auto my-6 rounded-lg shadow-lg"
            />
          </div>

          <li>
            <strong>Global Reach with Over 3.5 Million Customers: </strong>  
            ESRI serves a diverse range of industries, including urban planning, disaster management, logistics, and more, impacting millions globally.
          </li>
          <li>
            <strong>20% Revenue Invested in R&D: </strong>  
            ESRI dedicates around 20% of its annual revenue to research and development, ensuring their products remain cutting-edge and future-proof.
          </li>
          <li>
            <strong>80% Market Share in the GIS Industry: </strong>  
            ESRI’s dominance in the GIS space highlights its reliability and trust among users, setting benchmarks for geospatial technology worldwide.
          </li>
        </ul>
      </div>
    </section>
    <Partners />
    </>
  );
};

export default WhyArc;
