import React from "react";
import Partners from "../../Partner";

const PartnerDropDown = () => {
    return (
        <>
            <div className="bg-gray-100 py-10 px-5 mt-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Partners</h2>
                </div>
                <div className="mx-auto">
                    <p className="text-gray-600 mb-8 text-left">
                        Emitech Infosystems is a business partner of various famous OEMs like ESRI, CITRIX, Trimble, Planet, etc. We deliver the entire range of ArcGIS products in Eastern and North-Eastern India. To date, we have successfully implemented ArcGIS Enterprise solutions in many organizations and institutions in Eastern and North-Eastern India. ESRI Inc. is the world leader in GIS Mapping and Solutions. It produces and markets the most widely used and globally famous ArcGIS suite of software. From 1980 onwards, ArcGIS has emerged from its initial toolbox of geographic processing modules to a rich suite of desktop and server-based GIS tools that power many GIS projects/programs, Spatial Data Infrastructures, Decision Support Systems, Management Information Systems, and Image and Map Portals across the world.
                    </p>
                </div>
                <div>
                    <img
                        src="/PartnersC.jpg"
                        alt="Vision"
                        className="w-full h-auto rounded-lg shadow-md mb-5 lg:w-1/2 lg:mx-auto"
                    />
                </div>
            </div>
            <Partners />
        </>
    );
};

export default PartnerDropDown;
