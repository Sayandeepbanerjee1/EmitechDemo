import React from "react";
import Partners from "../../../Partner";

  const Health = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Birth Outcome Analysis',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/BirthOutcomeAnalysis.png',
            imageAlt: 'Birth Outcome Analysis',
            description:
                'The Birth Outcome Analysis template enables organizations to utilize tools to identify patterns in their community around birth outcomes. It also enables them to begin to correlate contributing factors within the community to the spatial pattern that emerges.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Birth Outcomes Briefing',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/stbriefingbook.png',
            imageAlt: 'Birth Outcomes Briefing',
            description:
                'The Birth Outcomes Briefing application can be used by state governments to create map-based birth outcomes briefings and reports with interactive content that can be viewed by executives, decision-makers, knowledge-workers, and constituents.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Restaurant Inspection Results',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/RestaurantResults.png',
            imageAlt: 'Restaurant Inspection Results',
            description:
                'The Restaurant Inspection application allows constituents to search for inspection results and to determine the status of inspections.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Restaurant Inspections',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/Restaurant-Inspection.png',
            imageAlt: 'Restaurant Inspections',
            description:
                'Restaurant Inspection is a configuration of EMI Online and the Collector for EMI application that supports the collection of restaurant inspection information used by Health departments.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Facilitate Water Quality Inspections',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/WaterQualityField.png',
            imageAlt: 'Facilitate Water Quality Inspections',
            description:
                'Water Quality Inspections is a configuration of EMI Online and the Collector for EMI application that supports the collection of waterway inspection information.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Communicate Water Quality',
            imageSrc: 'http://solutions.arcgis.com/state-government/fish-wildlife/img/waterquality.png',
            imageAlt: 'Communicate Water Quality',
            description:
                'An application configuration that enables citizens to find out water quality status based on monitored parameters.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'EMI Online for State Government – Health',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/stmodelorg.png',
            imageAlt: 'EMI Online for State Government – Health',
            description:
                'The EMI Online Model Organization for Health provides users with a series of guidelines to follow when setting up EMI Online. The guidelines include group structure, sharing policies, and user access rights.',
        },

        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'My Health Services',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/HealthFacilities.png',
            imageAlt: 'My Health Services',
            description:
                'An application configuration that enables citizens to determine access to various healthcare service providers within their geography.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Health
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

export default Health;
