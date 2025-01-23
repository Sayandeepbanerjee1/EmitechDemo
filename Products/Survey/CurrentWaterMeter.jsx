import React from 'react';
import Partners from '../../../Partner';

const CurrentWaterMeter = () => {
  return (
    <>
        <section className="bg-gray-100 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Current Water Meter</h2>
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <div className="lg:w-1/3">
                        <img
                        src="waterMeter.jpg"
                        alt="waterMeter"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        In many developed countries water meters are used to building that are supplied with water by a public water supply system. Water meters can also be used at the water source, well, or throughout a water system to determine flow through a particular portion of the system. In most of the world water meters measure flow in cubic metres (m3) or litres but in the USA and some other countries water meters are calibrated in cubic feet (ft.3) or US gallons on a mechanical or electronic register. Some electronic meter registers can display rate-of-flow in addition to total usage.
                        </p>
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        There are several types of water meters in common use. The choice depends on the flow measurement method, the type of end user, the required flow rates, and accuracy requirements.
                        </p>
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        In North America, standards for manufacturing water meters are set by the American Water Works Association. Outside of North America, most countries use ISO standards.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default CurrentWaterMeter;
