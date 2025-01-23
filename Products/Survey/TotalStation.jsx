import React from "react";
import Partners from "../../../Partner";

const TotalStation = () => {
  return (
    <>
        <section className="bg-gray-100 mt-20 px-4 py-8 md:px-12 lg:px-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Total Station</h2>

                <p className="text-gray-700 text-base md:text-lg mb-4">
                A total station or TST (total station theodolite) is an electronic/optical instrument used in modern surveying and building construction. The total station is an electronic theodolite (transit) integrated with an electronic distance meter (EDM) to read slope distances from the instrument to a particular point.
                </p>
                <p className="text-gray-700 text-base md:text-lg mb-4">
                Robotic total stations allow the operator to control the instrument from a distance via remote control. This eliminates the need for an assistant staff member as the operator holds the reflector and controls the total station from the observed point.
                </p>
    
            </div>
        
        </section>
        <Partners />
    </>
    
  );
};

export default TotalStation;
