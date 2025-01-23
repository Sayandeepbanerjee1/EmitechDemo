import React from "react";
import Partners from "../../../Partner";

  const Preparedness = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Manage Community Events',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/EventSiteMap.png',
            imageAlt: 'Manage Community Events',
            description:
                'A collection of maps and apps used by government agencies and other stakeholders to permit, coordinate, plan, and promote community or special events.',
        },
        {
            link: 'http://video.arcgis.com/iframe/2868/000000/width/960/0/00:00:00',
            linkText: 'Develop Flood Response Plans',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/FloodPlanning.png',
            imageAlt: 'Develop Flood Response Plans',
            description:
                'The Flood Planning map can be used by emergency management personnel to analyze the impact of seasonal flooding scenarios and develop flood response plans.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Emergency Assistance',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/EmergencyAssistance.png',
            imageAlt: 'Emergency Assistance',
            description:
                'The Emergency Assistance application can be used by citizens to provide emergency management organizations with pertinent information about themselves in order to ensure their safety during an emergency incident.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Share Evacuation Zones',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/EvacuationZones.png',
            imageAlt: 'Share Evacuation Zones',
            description:
                'The Evacuation Zones application can be used by emergency management organizations to enable the public to determine when evacuations are required.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Increase Preparedness',
            imageSrc: 'http://solutions.arcgis.com/state-government/em-management/img/MyHazardInfo.png',
            imageAlt: 'Increase Preparedness',
            description:
                'The My Hazard Information application helps residents discover hazards that exist in their community and obtain information about evacuation routes and government facilities.',
        },

        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Brief Incident Personnel',
            imageSrc: 'http://solutions.arcgis.com/shared/img/IncidentBriefingJournalFeatureStory.png',
            imageAlt: 'Brief Incident Personnel',
            description:
                'The Incident Briefing application can be used by emergency management personnel to provide map-based briefings and reports during incident and blue sky conditions.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Aggregate Parcel Information',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/community-parcels.png',
            imageAlt: 'Aggregate Parcel Information',
            description:
                'Community Parcels can be used by organizations to aggregate authoritative parcel data and deliver focused parcel maps to key stakeholders.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Aggregate Address Information',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/community-addresses.png',
            imageAlt: 'Aggregate Address Information',
            description:
                'Community Addresses can be used by organizations to aggregate authoritative address data and deliver focused maps and locators to key stakeholders.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Identify Flood Risks',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/FloodInquiry.png',
            imageAlt: 'Identify Flood Risks',
            description:
                'The Floodplain Inquiry application can be used by citizens, land development companies, and real estate professionals to locate parcels impacted by FEMA floodplain boundaries.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Import CAMEO data',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/CameoTools.png',
            imageAlt: 'Import CAMEO data',
            description:
                'Help prepare for and respond to chemical emergencies by importing data from a CAMEO system into a File Geodatabase for further GIS analysis.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Preparedness
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

export default Preparedness;
