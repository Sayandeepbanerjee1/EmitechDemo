import React from "react";
import Partners from "../../Partner";

const Gps = () => {
  return (
    <>
        <section className="px-6 py-12 bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">GPS & DGPS</h2>
        <p className="text-gray-600 mb-8">
          Emitech Infosystems is a leading provider of precision measuring instruments. The company is
          promoted by pioneers in the field of surveying instruments, laser instruments, GPS & DGPS equipment,
          and other high-precision systems. Emitech Infosystems always provides the most complete measurement
          solutions for surveying, mapping, and GIS.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">The Global Positioning System (GPS)</h3>
          <p className="text-gray-600">
            Also known as Navstar, it is a global navigation satellite system (GNSS) that provides location and
            time information in all weather conditions, anywhere on or near the Earth where there is an
            unobstructed line of sight to four or more GPS satellites.
          </p>
          <img
            src="/gps1.jpg"
            alt="gps1"
            className="w-full max-w-md mx-auto my-6 rounded-lg shadow-lg"
          />
          <p className="text-gray-600">
            The GPS system operates independently of any telephonic or internet reception. Though these technologies
            enhance the utilities of the GPS positioning information, the GPS system provides critical positioning
            capabilities to military, civil, and commercial users around the world.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Differential Global Positioning System (DGPS)</h3>
          <p className="text-gray-600">
            DGPS is an enhancement to the Global Positioning System that provides improved location accuracy, from
            the 15-meter nominal GPS accuracy to about 10 cm in the best implementations.
          </p>
          <img
            src="/gps2.jpg"
            alt="gps2"
            className="w-full max-w-md mx-auto my-6 rounded-lg shadow-lg"
          />
          <p className="text-gray-600">
            DGPS uses a network of fixed ground-based reference stations to broadcast the difference between the
            positions indicated by the GPS satellite systems and the known fixed positions.
          </p>
        </div>


        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Topographical Survey</h3>
          <p className="text-gray-600">
            Detailed topographical surveys of a mining site are necessary to understand the physical and geological
            condition of the land. We conduct topographical surveys for multiple surface features, including
            streams, hills, barren land, water bodies, roads, bridges, forest plants, afforestation, and cultivated land.
          </p>
          <img
            src="/gps3.jpeg"
            alt="gps3"
            className="w-full max-w-md mx-auto my-6 rounded-lg shadow-lg"
          />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Drone Survey</h3>
          <p className="text-gray-600">
          An unmanned aerial vehicle (UAV), commonly referred to as a drone, is a type of aircraft that operates without a human pilot on board. Instead, it is controlled remotely by an operator or autonomously through onboard computer systems. Drones have revolutionized the field of surveying by enabling access to areas that are otherwise difficult, dangerous, or time-consuming to reach using traditional methods.
          </p>
          <img
            src="/gps4.jpg"
            alt="gps4"
            className="w-full max-w-md mx-auto my-6 rounded-lg shadow-lg"
          />
          <p className="text-gray-600">
          Equipped with high-resolution cameras, LiDAR sensors, and advanced GPS systems, UAVs are capable of capturing detailed aerial imagery and topographical data with exceptional accuracy. This makes drones an indispensable tool for tasks such as land mapping, infrastructure inspection, environmental monitoring, and construction project planning. The data captured by drones is processed using specialized software to generate orthomosaic maps, 3D models, and elevation profiles, allowing surveyors to make precise measurements and informed decisions.
          </p>
        </div>
      </div>
    </section>
    <Partners />
    </>
    
  );
};

export default Gps;
