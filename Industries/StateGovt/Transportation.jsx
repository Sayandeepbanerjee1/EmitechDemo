import React from "react";
import Partners from "../../../Partner";

  const Transportation = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Understand Impact',
            imageSrc: 'http://solutions.arcgis.com/state-government/fish-wildlife/img/environmental-impact.png',
            imageAlt: 'Understand Impact',
            description:
                'An application configuration that enables interested parties to discover potential impacts to the natural landscape, species, and species habitat due to development and mitigation activities.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Communicate Impact',
            imageSrc: 'http://solutions.arcgis.com/state-government/environment/img/nrmodelorg.png',
            imageAlt: 'Communicate Impact',
            description:
                'A Story Map configuration that can be used by state governments to create map-based briefings and reports with interactive content that can be viewed by executives, decision-makers, knowledge-workers, and constituents.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Railroad Inspection',
            imageSrc: 'http://solutions.arcgis.com/state-government/transportation/img/RailroadInspection.png',
            imageAlt: 'Railroad Inspection',
            description:
                'An application configuration of EMI that supports the collection of inspection information for railroad crossings.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Communicate Road Closures',
            imageSrc: 'http://solutions.arcgis.com/state-government/transportation/img/RoadClosures.png',
            imageAlt: 'Communicate Road Closures',
            description:
                'The Road Closures map can be used by transportation staff to maintain an inventory of road closures and communicate closures and detours to travelers.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Analyze Crashes',
            imageSrc: 'http://solutions.arcgis.com/state-government/transportation/img/CrashDensity.png',
            imageAlt: 'Analyze Crashes',
            description:
                'Crash Analysis can be used by transportation departments to standardize roadway datasets and assign crash locations to road segments.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Crash Risks Briefing',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/WaterQualityField.png',
            imageAlt: 'Crash Risks Briefing',
            description:
                'Story Maps can be used by Departments of Transportation to create map-based briefings and reports with interactive content that can be viewed by executives, decision-makers, knowledge-workers, and constituents.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Manage Snow Operations',
            imageSrc: 'http://solutions.arcgis.com/state-government/transportation/img/SnowOperations.png',
            imageAlt: 'Manage Snow Operations',
            description:
                'The Snow Operations Dashboard application can be used by operations managers to monitor snow event responses and determine which streets are not getting attention.',
        },

        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Share Roadway Conditions',
            imageSrc: 'http://solutions.arcgis.com/state-government/img/Transportation511FeatureStory.png',
            imageAlt: 'Share Roadway Conditions',
            description:
                'Transportaion 511 can be used by departments of transportation to communicate information about the status of roadways across the state with citizens and travelers.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Inventory Street Signs',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/SignInventory.png',
            imageAlt: 'Inventory Street Signs',
            description:
                'The Sign Inventory map can be used by field staff to inventory traffic signs erected at the side of, or above roads.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Inventory Traffic Signals',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/SignalInventory.png',
            imageAlt: 'Inventory Traffic Signals',
            description:
                'The Signal Inventory map can be used by field staff to inventory traffic signals and signal cabinets positioned at road intersections to control the flow of traffic.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Inventory Pavement Markings',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/PavementMarkingInventory.png',
            imageAlt: 'Inventory Pavement Markings',
            description:
                'The Pavement Markings Inventory map can be used by field staff to inventory pavement markings that delineate vehicular paths of travel.',
        },

        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Inventory Guardrails',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/GuardrailInventory.png',
            imageAlt: 'Inventory Guardrails',
            description:
                'The Guardrails Inventory map can be used by field staff to inventory railings placed alongside a road for safety purposes.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Inventory Bridges',
            imageSrc: 'http://solutions.arcgis.com/state-government/transportation/img/BridgeInventory.png',
            imageAlt: 'Inventory Bridges',
            description:
                'The Bridge Inventory map can be used by field staff to inventory bridges built to span a road, body of water, or valley.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Inventory Streetlights',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/StreetlightInventory.png',
            imageAlt: 'Inventory Streetlights',
            description:
                'The Streetlight Inventory map can be used by field staff to inventory streetlights erected at the edge of a road or walkway.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Transportation
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                    <img
                        src="http://solutions.arcgis.com/assets/images/state-transportation.jpg"
                        alt="Transportation"
                        className="rounded-lg shadow-lg w-full max-w-xl"
                    />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                    <p>
                    Maps and applications that enable constituents to find timely information about permitted activities, understand the water quality landscape in the state, and discover recreational activities in the state.
                    </p>
                    </div>
                </div>

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

export default Transportation;
