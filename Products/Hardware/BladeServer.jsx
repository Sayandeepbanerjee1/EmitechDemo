import React from 'react';
import Partners from '../../../Partner';

const BladeServer = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Blade Server</h2>
                <div className="flex flex-col lg:flex-row items-center gap-5">

                    <div className="lg:w-1/3 lg:pl-8">
                        <img
                        src="bladeServer.jpg"
                        alt="Blade Server"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        A blade server is a stripped-down server computer with a modular design optimized to minimize the use of physical space and energy. Blade servers have many components removed to save space, minimize power consumption and other considerations, while still having all the functional components to be considered a computer. Unlike a rack-mount server, a blade server needs a blade enclosure, which can hold multiple blade servers, providing services such as power, cooling, networking, various interconnects and management. Together, blades and the blade enclosure form a blade system. Different blade providers have differing principles regarding what to include in the blade itself, and in the blade system as a whole.
                        </p>

                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        In a standard server-rack configuration, one rack unit or 1U—19 inches (480 mm) wide and 1.75 inches (44 mm) tall—defines the minimum possible size of any equipment. The principal benefit and justification of blade computing relates to lifting this restriction so as to reduce size requirements. The most common computer rack form-factor is 42U high, which limits the number of discrete computer devices directly mountable in a rack to 42 components. Blades do not have this limitation. As of 2014, densities of up to 180 servers per blade system (or 1440 servers per rack) are achievable with blade systems.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default BladeServer;
