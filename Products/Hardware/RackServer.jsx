import React from 'react';
import Partners from '../../../Partner';

const RackServer = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Rack Server</h2>
                <div className="flex flex-col lg:flex-row items-center gap-5">

                    <div className="lg:w-1/3 lg:pl-8">
                        <img
                        src="laptop.jpg"
                        alt="laptop"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        Coming soon...
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default RackServer;
