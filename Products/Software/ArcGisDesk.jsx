import React from "react";
import Partners from "../../../Partner";

const ArcGisDesk = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-gray-800 mb-6">ArcGIS Desktop Software Suit</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                    ArcGIS is a system that lets you easily author data, maps, globes, and models on the desktop and serve them out for use on a desktop, in a browser, or in the field via mobile devices, depending on the needs of your organization. If you are a developer, ArcGIS gives you tools for building your own applications.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                    ESRI Inc. is the world leader in GIS Mapping and Solutions and produces and markets the most-widely used and globally famous ArcGIS suite of software. From 1980 onwards, ArcGIS has emerged from its initial tool-box of geographic processing modules to a rich suite of desktop and server based GIS tools that powers many a GIS projects/programmes, Spatial Data Infrastructures, Decision Support Systems, Management Information Systems and Image and Map Portals across the world.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Unique feature of ArcGIS</h2>

                <div className="flex justify-center mb-6">
                    <img
                        src="Arc1.png"
                        alt="arc1"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Beyond showing your data as points on a map, ArcGIS for Desktop gives you the power to manage and integrate your data, perform advanced analysis, model and automate workflows, and display your results on professional-quality maps.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    NIIT Technologies is a Global IT solutions organisation, with its footprint spanning North America, Europe, Asia and Australia. Ranking among India’s Top 20 IT services players, the company offers a gamut of services in the areas of Application Development Management and Enterprise Solutions, encompassing Managed Services and Business Process Outsourcing.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Electrical Measuring Instruments [EMI] is established in 1974. Company is based in Kolkata. Company is into IT sectors in the vertical of GIS and Remote Sensing. Company is offering end-to- end domain specific solutions in the field of Geographic Information System (GIS) &amp; Image Processing.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    EMI is a business partner for ESRI India (NIIT GIS Ltd.) and deliver entire range of ArcGIS products in Eastern and North-Eastern India. Till date we have successfully implemented ArcGIS solution in many organisations and institutions in Eastern and North-Eastern India.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    From last 39 years we have continuously deliver satisfactory results in fulfilling the requirements of various clients in various domains like Urban Development, Natural Resource, Water Resources, Land Records, Public Health, Public Utility, Waterways and Irrigation, Forestry Dept and many more. We have also played a vital role in introducing GIS and Remote Sensing to various Education and Research Institutes in Eastern and North Eastern region of India.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Bringing the amalgamation of these two global technological and cultural ethos at NIIT GIS Ltd. and Electrical Measuring Instruments have established a deep niche for ArcGIS products and GIS solutions through the activities of the company.
                </p>


                <h3 className="text-2xl font-semibold text-gray-800 mb-4">WHY ESRI ARCGIS Software?</h3>

                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                    <li>ESRI is the World Leaders in Geospatial products and solutions</li>
                    <li>5th largest privately owned technology company in the World</li>
                    <li>
                    More than 3,50,000 customers worldwide
                    </li>
                    <li>Spends around 20% of Revenue in R&D</li>
                    <li>
                    ESRI software occupying 80% of market share of GIS industry, ESRI and its authorized
                    </li>
                    <li>
                    distributors are leader in GIS technology.
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The range of products of ESRI India ArcGIS include:</h3>

                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                    <li>Desktop GIS Products</li>
                    <li>Extension Products</li>
                    <li>Server / Internet-based Products: ArcGIS Server</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Spatial Analysis</h3>

                <div className="flex justify-center mb-6">
                    <img
                        src="Arc2.png"
                        alt="arc2"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Hundreds of tools for performing spatial analysis are included in ArcGIS for Desktop. These tools allow you to turn data into actionable information and automate many of your GIS tasks. For example, you can:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                    <li>Calculate density and distance.</li>
                    <li>Perform advanced statistical analysis.</li>
                    <li>Conduct overlay and proximity analysis.</li>
                </ul>


                <div className="flex justify-center mb-6">
                    <img
                        src="Arc3.png"
                        alt="arc3"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                    With support for more than 70 data formats, you can easily integrate all types of data for visualization and analysis. An extensive set of geographic, tabular, and metadata management, creation, and organization tools allows you to:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                    <li>Browse and find geographic information.
                    </li>
                    <li>Record, view, and manage metadata.</li>
                    <li>Create and manage the schemas of geodatabases.</li>
                </ul>


            </div>
        </section>
        <Partners />
    </>
    
  );
};

export default ArcGisDesk;
