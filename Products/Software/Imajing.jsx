import React from 'react';

const Imajing = () => {
return (
    <section className="bg-gray-50 mt-20 px-4 py-8 md:px-12 lg:px-20">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Imajing</h2>
            <div className="flex justify-center lg:w-1/3 mx-auto mb-6">
                <img
                    src="imajing.png"
                    alt="microsoft"
                    className="flex justify-center"
                />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-red-800 mb-6">
                IMAJING GEOSPATIAL SOLUTIONS
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-4">
                Since 2008, imajing has been designing geospatial data collection and data processing
                technologies to serve the needs of transportation infrastructure managers, smart cities, 
                and engineering or construction companies.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-4">
                Ease of use, cost efficiency, productivity, and a wide range of tools have been at the 
                heart of our concept ever since the beginning.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-4">
                Our technology is bringing solutions to capture, produce, structure, and share geospatial
                information in order to map, inventory, monitor, or control any linear infrastructure and
                all its assets.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
                Today, our toolchain is used all around the world by engineering companies, local 
                authorities, and road & railway infrastructure owners.
            </p>
        </div>
        <div className="flex justify-center">
            <video className="w-full md:w-3/4 lg:w-2/3" controls>
                <source src="path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag!
            </video>
        </div>

        <div>

            <h3 className="pt-8 text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>

            <p className="text-gray-700 text-base md:text-lg mb-4 ml-4">
                Imajing has based its business relationships on honesty and professionalism, essential values to provide high quality products and services.
            </p>

            <h3 className="pt-8 text-2xl font-semibold text-gray-800 mb-4">Reliability</h3>

            <p className="text-gray-700 text-base md:text-lg mb-4 ml-4">
                Imajing solutions have proven to be highly reliable and effective throughout the hundreds of thousands of km surveyed and processed by imajing technologies, which serve worldwide projects on road or rail networks.
            </p>

            <h3 className="pt-8 text-2xl font-semibold text-gray-800 mb-4">Simplicity</h3>

            <p className="text-gray-700 text-base md:text-lg mb-4 ml-4">
                Imajing has chosen to turn data collection and GIS technologies into simple processes, accessible to anyone within an organization.
            </p>

        </div>
        
    </section>
);
};

export default Imajing;
