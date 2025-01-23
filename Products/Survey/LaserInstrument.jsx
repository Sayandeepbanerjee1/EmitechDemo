import React from "react";
import Partners from "../../../Partner";

const LaserInstrument = () => {
  return (
    <>
        <section className="bg-gray-100 mt-20 px-4 py-8 md:px-12 lg:px-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Laser Instrument</h2>

                <p className="text-gray-700 text-base md:text-lg mb-4">
                A laser rangefinder is a rangefinder which uses a laser beam to determine the distance to an object. The most common form of laser rangefinder operates on the time of flight principle by sending a laser pulse in a narrow beam towards the object and measuring the time taken by the pulse to be reflected off the target and returned to the sender. Due to the high speed of light, this technique is not appropriate for high precision sub-millimeter measurements, where triangulation and other techniques are often used.
                </p>
                
            </div>
        
        </section>
        <Partners />
    </>
    
  );
};

export default LaserInstrument;
