import Partners from "../../../Partner";
import React from "react";

const RockWorks = () => {
    return (
        <>
            <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Rock Works Software</h2>

                    <div>
                        <p className="text-gray-700 text-base md:text-lg mb-4 ml-4">
                        RockWorks17 is the newest version of RockWare’s flagship software program. RockWorks is the standard in the petroleum, environmental, geotechnical and mining industries for subsurface data visualization, with popular tools such as maps, logs, cross sections, fence diagrams, solid models and volumetrics.
                        </p>

                        <p className="text-gray-700 text-base md:text-lg mb-4 ml-4">
                        RockWorks offers numerous options for analyzing your subsurface data, and accepts many different data types, such as stratigraphy, lithology, quantitative data, color intervals, fracture data and hydrology and aquifer data.
                        </p>

                        <p className="text-gray-700 text-base md:text-lg mb-4 ml-4">
                        In addition to its impressive collection of existing capabilities, the latest RockWorks version has numerous new features, including dozens of Google™ Earth display tools (the “EarthApps”); coordinate and unit support for data, models, and graphics; enhanced cross section drawing tools; and much more.
                        </p>

                        <p className="text-gray-700 text-base md:text-lg mb-2 ml-4">
                        RockWorks is extensively used in the following industries : 
                        </p>

                        <ol className="text-gray-700 text-base md:text-lg mb-4 list-decimal list-inside ml-8">
                            <li>Geotechnical</li>
                            <li>Environmental</li>
                            <li>Mining</li>
                            <li>Petroleum</li>
                        </ol>
                    </div>
                </div>
            </section>
            <Partners />
        </>
    )
};

export default RockWorks;