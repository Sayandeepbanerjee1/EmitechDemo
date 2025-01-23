import React from "react";
import Partners from "../../../Partner";

const ArcGisArcFm = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">ArcGIS ArcFM Software</h2>
                <div className="ml-4">
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    ArcFM, based on the industry-leading Esri ArcGIS platform, consists of a family of configurable models and a set of sophisticated tools designed to provide a highly efficient asset management solution for energy and water / wastewater utilities.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                    While ArcFM provides a powerful query/display/edit environment, its integration capabilities and easy-to-use interface support viewing, editing, mapping, and management of spatial data across the multi-process utility business environment. It’s the unified enterprise asset management solution for creating, managing, and disseminating geographic information — at the project level and in the boardroom.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                    ArcFM takes advantage of industry-standard architecture and programming to offer:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                        <li>Easy customization as needed</li>
                        <li>Selectable functionality extensions</li>
                        <li>Scalability, from project GIS to enterprise spatial initiatives</li>
                        <li>Maintenance and viewing of data using business rules</li>
                    </ul>
                </div>
                

            </div>
        </section>
        <Partners />
    </>
    
  );
};

export default ArcGisArcFm;
