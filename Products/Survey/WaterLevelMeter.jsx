import React from 'react';
import Partners from '../../../Partner';

const WaterLevelMeter = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Water Level Meter</h2>
                <div className="flex flex-col lg:flex-row items-center gap-5">

                    <div className="lg:w-1/3 lg:pl-8">
                        <img
                        src="waterMeter2.png"
                        alt="waterMeter"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        A water level is a device used for matching elevations of locations that are too far apart for a spirit level to span. The simplest water level is a section of clear tubing, partially filled with water. Water is easily procured for use, and easily discarded after use. The ends are held vertical, and the rest of the tubing lies on the ground or floor. The water level at each end of the tube will be at the same elevation, whether the two ends are adjacent or far apart. Water levels have been used for many years. The water level is lower-tech than the laser level, but it can be more accurate over long distances. To avoid error, all of the water should be at the same temperature. Other sources of error include difficulty reading due to meniscus. The water level is also used in surveying, to measure the difference in height between two points on the ground.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default WaterLevelMeter;
