import React from "react";
import Partners from "../../../Partner";

const DifferentialGps = () => {
  return (
    <>
        <section className="bg-gray-100 mt-20 px-4 py-8 md:px-12 lg:px-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Differential GPS</h2>

                <p className="text-gray-700 text-base md:text-lg mb-4">
                Differential Global Positioning System (DGPS) is an enhancement to Global Positioning System that provides improved location accuracy, from the 15-meter nominal GPS accuracy to about 10 cm in case of the best implementations.
                </p>
                <p className="text-gray-700 text-base md:text-lg mb-4">
                DGPS uses a network of fixed, ground-based reference stations to broadcast the difference between the positions indicated by the GPS satellite systems and the known fixed positions. These stations broadcast the difference between the measured satellite pseudoranges and actual (internally computed) pseudoranges, and receiver stations may correct their pseudoranges by the same amount. The digital correction signal is typically broadcast locally over ground-based transmitters of shorter range.
                </p>


                <div className="flex justify-center lg:w-1/3 mx-auto mb-6">
                    <img
                        src="diffGps.jpg"
                        alt="GPS"
                        className="shadow-lg rounded-lg"
                    />
                </div>

                <p className="text-gray-700 text-base md:text-lg mb-4">
                The term refers to a general technique of augmentation. The United States Coast Guard (USCG) and Canadian Coast Guard (CCG) each run such systems in the U.S. and Canada on the longwave radio frequencies between 285 kHz and 325 kHz near major waterways and harbors. The USCG’s DGPS system has been named NDGPS (Nationwide DGPS) and is now jointly administered by the Coast Guard and the U.S. Department of Transportation’s Federal Highway Administration. It consists of broadcast sites located throughout the inland and coastal portions of the United States including Alaska, Hawaii and Puerto Rico.
                </p>
    
            </div>
        
        </section>
        <Partners />
    </>
    
  );
};

export default DifferentialGps;
