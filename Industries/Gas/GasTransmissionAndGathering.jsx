import React from "react";
import Partners from "../../../Partner";

  const GasTransmissionAndGathering = () => {
    const tableData = [
        {
            link: 'https://www.esri.com/en-us/arcgis/products/arcgis-solutions/overview',
            linkText: 'Foundational Solutions',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/em-org-feature.png',
            imageAlt: 'Foundational Solutions',
            description:
                'A collection of services and maps to get started with EMI for Gas Utilities.',
        },
        {
            link: 'https://www.esri.com/en-us/arcgis/products/arcgis-solutions/overview',
            linkText: 'Maintain Utility Assets',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/community-parcels.png',
            imageAlt: 'Maintain Utility Assets',
            description:
                'A collection of editing maps and apps used to maintain comprehensive gas network records.',
        },
        {
            link: 'https://www.esri.com/en-us/arcgis/products/arcgis-solutions/overview',
            linkText: 'Summarize Gas Transmission Facilities',
            imageSrc: 'http://solutions.arcgis.com/state-government/em-management/img/MyHazardInfo.png',
            imageAlt: 'Summarize Gas Transmission Facilities',
            description:
                'The Facility Reports for Gas Transmission solution can be used to create map-based reports for your service territory.',
        },
        {
            link: 'https://www.esri.com/en-us/arcgis/products/arcgis-solutions/overview',
            linkText: 'Capture Field Notes',
            imageSrc: 'http://solutions.arcgis.com/state-government/em-management/img/MyHazardInfo.png',
            imageAlt: 'Capture Field Notes',
            description:
                'The Map Notes app provides the ability to record and share detailed map notes or redlines from the office or field.',
        },
        
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Transmission And Gathering
                </h2>

                <div className="grid gap-6 md:gap-8 lg:gap-10">
                    {/* Cards for Mobile */}
                                <div className="block md:hidden space-y-6">
                                {tableData.map((item, index) => (
                                    <div
                                    key={index}
                                    className="bg-white text-center rounded-lg shadow-lg p-6 space-y-4"
                                    >
                                    <a
                                        href={item.link}
                                        className="font-bold text-green-600 hover:text-green-700 text-lg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.linkText}
                                    </a>
                                    <div className="flex justify-center">
                                        <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="rounded-lg shadow-md w-full max-w-xs"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-justify">{item.description}</p>
                                    </div>
                                ))}
                                </div>

                        {/* Table for Desktop */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="table-auto border-collapse border border-gray-300 w-full text-gray-700">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 px-4 py-2 text-center w-1/4">
                                        Link
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-center w-1/3">
                                        Image
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-center w-1/2">
                                        Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <a
                                                href={item.link}
                                                className="font-bold text-green-600 hover:text-green-700"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >
                                                {item.linkText}
                                                </a>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <div className="flex justify-center">
                                                <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="rounded-lg shadow-lg w-full max-w-xs"
                                                />
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-justify">
                                                {item.description}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
    );
};

export default GasTransmissionAndGathering;
