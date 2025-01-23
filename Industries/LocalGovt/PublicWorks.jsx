import React from "react";
import Partners from "../../../Partner";

  const PublicWorks = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/local-government/public-works/maintain-roads/',
            linkText: 'Maintain Public Road Network',
            imageSrc: 'https://solutions.arcgis.com/local-government/public-works/img/MaintainRoadNetwork.png',
            imageAlt: 'Maintain Public Road Network',
            description:
                'A collection of maps used by public works staff to manage the public road network, road characteristics, service boundaries, and associated maintenance agreements.',
        },
        {
            link: 'https://solutions.arcgis.com/local-government/help/photo-survey/',
            linkText: 'Inventory Right of Way Assets',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/AssetInventory2.png',
            imageAlt: 'Inventory Right of Way Assets',
            description:
                'A collection of maps used by field staff to inventory signs, signals, streetlights, and other visible assets in the public right of way.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/public-works/capital-projects/',
            linkText: 'Maximize Capital Investments',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/MaximizeCapitalInvestments.png',
            imageAlt: 'Maximize Capital Investments',
            description:
                'A collection of maps and apps used by public works staff to define capital projects, coordinate project schedules, track project performance, and share project status with key stakeholders and the general public.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/road-closures/',
            linkText: 'Communicate Road Closures',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/RoadClosures.png',
            imageAlt: 'Communicate Road Closures',
            description:
                'Road Closures can be used by engineering and operations staff to maintain an inventory of road closures, and communicate closures and detours to travelers.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/public-works/connect-citizens/',
            linkText: 'Connect with Citizens',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/ConnectCitizens.png',
            imageAlt: 'Connect with Citizens',
            description:
                'A collection of maps used by the general public to locate parks, obtain information about public works services, comment on proposed projects, and submit requests for service in their community',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/public-parking/',
            linkText: 'Promote Public Parking',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/PublicParking.png',
            imageAlt: 'Promote Public Parking',
            description:
                'Public Parking can be used by parking staff to inventory parking assets and promote public parking alternatives in their community.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/public-works/manage-community-events/',
            linkText: 'Manage Community Events',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/EventSiteMap.png',
            imageAlt: 'Manage Community Events',
            description:
                'A collection of maps and apps used by government agencies and other stakeholders to permit, coordinate, plan, and promote community or special events.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/public-works/mosquito-control/',
            linkText: 'Manage Mosquito Populations',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/MosquitoControl.png',
            imageAlt: 'Manage Mosquito Populations',
            description:
                'A collection of maps and apps used by public works or mosquito control agencies to manage mosquito populations and the spread of vector-borne diseases.',
        },

        {
            link: 'http://solutions.arcgis.com/local-government/public-works/identify-tansportation-hazards/',
            linkText: 'Identify Transportation Hazards',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/VisionZero.png',
            imageAlt: 'Identify Transportation Hazards',
            description:
                'A collection of maps used to identify transportation hazards and dangerous traffic behaviors that could lead to fatalities or serious injury on a roadway.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/snow-cop/',
            linkText: 'Manage Snow Operations',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/SnowOperations.png',
            imageAlt: 'Manage Snow Operations',
            description:
                'SnowCOP can be used by operations managers to monitor snow event responses and determine which streets are not getting attention.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/flood-planning/',
            linkText: 'Develop Flood Response Plans',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/MosquitoControl.png',
            imageAlt: 'Develop Flood Response Plans',
            description:
                'Flood Planning can be used by emergency management personnel to analyze the impact of seasonal flooding scenarios and develop flood response plans.',
        },
        {
            link: 'hhttp://solutions.arcgis.com/local-government/public-works/facilities-grounds/',
            linkText: 'Maintain Facilities and Grounds',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/CampusEditing.png',
            imageAlt: 'Maintain Facilities and Grounds',
            description:
                'A collection of maps and apps used by public works staff to maintain facilities and grounds on a campus or a single building.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Public Works
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

export default PublicWorks;
