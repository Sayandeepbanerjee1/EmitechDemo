import React from "react";
import Partners from "../../../Partner";

const HandheldGps = () => {
  return (
    <>
        <section className="bg-gray-100 mt-20 px-4 py-8 md:px-12 lg:px-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Handheld GPS</h2>

                <p className="text-gray-700 text-base md:text-lg mb-4">
                A GPS navigation device or GPS receiver, and when used for vehicle navigation commonly referred to simply as a GPS, is a device that is capable of receiving information from GPS satellites and then to accurately calculate its geographical location. The Global Positioning System (GPS) is a global navigation satellite system (GNSS) made up of a network of a minimum of 24, but currently 30, satellites placed into orbit by the U.S. Department of Defense.
                </p>
                <p className="text-gray-700 text-base md:text-lg mb-4">
                The GPS was originally developed for use by the United States military, but in the 1980s, the United States government allowed the system to be used for civilian purposes. Though the GPS satellite data is free and works anywhere in the world, the GPS device and the associated software must be bought or rented.
                </p>


                <div className="flex justify-center lg:w-1/3 mx-auto mb-6">
                    <img
                        src="handGps.jpg"
                        alt="microsoft"
                        className="flex justify-center shadow-lg rounded-lg"
                    />
                </div>

                <p className="text-gray-700 text-base md:text-lg mb-4">
                A GPS device can retrieve from the GPS system location and time information in all weather conditions, anywhere on or near the Earth. A GPS reception requires an unobstructed line of sight to four or more GPS satellites, and is subject to poor satellite signal conditions. In exceptionally poor signal conditions, for example in urban areas, satellite signals may exhibit multipath propagation where signals skip off structures, or are weakened by meteorological conditions. Obstructed lines of sight may arise from a tree canopy or inside a structure, such as in a building, garage or tunnel. Today, most standalone GPS receivers are used in automobiles. The GPS capability of smartphones may use assisted GPS (A-GPS) technology, which can use the base station or cell towers to provide the device location tracking capability, especially when GPS signals are poor or unavailable. However, even A-GPS would not be available when the smartphone is outside the range of the mobile reception network.
                </p>
    
            </div>
        
        </section>
        <Partners />
    </>
    
  );
};

export default HandheldGps;
