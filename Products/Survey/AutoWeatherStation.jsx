import React from "react";
import Partners from "../../../Partner";

const AutoWeatherStation = () => {
  return (
    <>
        <section className="bg-gray-100 mt-20 px-4 py-8 md:px-12 lg:px-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Automatic Weather Station</h2>

                <p className="text-gray-700 text-base md:text-lg mb-4">
                An automatic weather station (AWS) is an automated version of the traditional weather station, either to save human labour or to enable measurements from remote areas. An AWS will typically consist of a weather-proof enclosure containing the data logger, rechargeable battery, telemetry (optional) and the meteorological sensors with an attached solar panel or wind turbine and mounted upon a mast. The specific configuration may vary due to the purpose of the system. The system may report in near real time via the Argos System and the Global Telecommunications System, or save the data for later recovery. In the past, automatic weather stations were often placed where electricity and communication lines were available. Nowadays, the solar panel, wind turbine and mobile phone technology have made it possible to have wireless stations that are not connected to the electrical grid or hardline telecommunications network.
                </p>
                
            </div>
        
        </section>
        <Partners />
    </>
    
  );
};

export default AutoWeatherStation;
