import React from "react";
import Partners from "../../../Partner";

const AutoCAD = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">AutoCAD Software</h2>

                <div className="ml-4">
                    
                    <p className="text-gray-700 text-base md:text-lg mb-2 ml-4">
                    AutoCAD is a commercial software application for 2D and 3D computer-aided design (CAD) and drafting — available since 1982 as a desktop application and since 2010 as a mobile, web- and cloud-based app marketed as AutoCAD 360.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg ml-4 mb-6">
                    Developed and marketed by Autodesk, AutoCAD was first released in December 1982, running on microcomputers with internal graphics controllers. Prior to the introduction of AutoCAD, most commercial CAD programs ran on mainframe computers or minicomputers, with each CAD operator (user) working at a separate graphics terminal.
                    </p>

                    <div className="flex justify-center lg:w-1/2 mb-4">
                        <img
                        src="autoCad.jpg"
                        alt="autoCad"
                        className="rounded-lg shadow-lg w-1/2"
                        />
                    </div>

                    <p className="text-gray-700 text-base md:text-lg ml-4 mb-4">
                    AutoCAD is used across a wide range of industries, by architects, project managers, engineers, graphic designers, and other professionals. It is supported by 750 training centers worldwide as of 1994.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Use ArcGIS for AutoCAD to: 
                    </h3>

                    <ul className="text-gray-700 text-base md:text-lg mb-4 list-disc list-inside ml-4">
                        <li>Streamline information sharing between GIS and CAD groups.</li>
                        <li>View live, rich cartographic GIS maps in AutoCAD.
                        </li>
                        <li>Include the results of GIS analysis in AutoCAD designs.
                        </li>
                        <li>Include the results of GIS analysis in AutoCAD designs.
                        </li>
                        <li>Create, manipulate, and define how CAD data is organized and attributed as GIS content so it can be used in ArcGIS for Desktop or AutoCAD.
                        </li>
                    </ul>
                    
                </div>
                

            </div>
        </section>
        <Partners />
    </>
    
  );
};

export default AutoCAD;
