import React from "react";
import Partners from "../../../Partner";

const ArcGisServer = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-gray-800 mb-6">ArcGIS Server Enterprise Software Suit</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                ArcGIS for Server improves the way your business works by bringing the power of GIS into the hands of everyone in your organization, enabling better decision making. Make GIS Available Everywhere, Keep Your GIS under Your Complete Control, Make It Simple for Your Users to Get the Information They Need.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                It is used for: creating and using maps; compiling geographic data; analyzing mapped information; sharing and discovering geographic information; using maps and geographic information in a range of applications; and managing geographic information in a database.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Make GIS Available Everywhere</h2>

                <div className="flex justify-center mb-6">
                    <img
                        src="third1.jpg"
                        alt="third1"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                Web GIS implemented with ArcGIS for Server allows maps and geographic information to be accessed anywhere, anytime, on any device. This includes web browsers, smartphones, tablets, and desktop applications.
                </p>


                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keep Your GIS under Your Complete Control</h2>

                <div className="flex justify-center mb-6">
                    <img
                        src="third2.jpg"
                        alt="third2"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                Stay in control of all aspects of how the GIS platform is deployed in your own IT infrastructure. ArcGIS for Server is designed to support your organization’s specific hardware and security requirements and gives you control over how your GIS platform is deployed, maintained, secured, and used.
                </p>


                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Make It Simple for Your Users to Get the Information They Need</h2>

                <div className="flex justify-center mb-6">
                    <img
                        src="third3.jpg"
                        alt="third3"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                The geographic information that you make available using ArcGIS for Server can be accessed via a variety of ready-to-use apps and templates. You can configure simple, focused user experiences so people can get their jobs done quickly and intuitively.
                </p>


            </div>
        </section>
        <Partners />
    </>
    
  );
};

export default ArcGisServer;
