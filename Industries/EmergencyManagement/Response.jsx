import React from "react";
import Partners from "../../../Partner";

  const Response  = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Situational Awareness',
            imageSrc: 'http://solutions.arcgis.com/shared/img/SituationalAwarenessFeatureCollection.png',
            imageAlt: 'Situational Awareness',
            description:
                'A collection of maps and apps used by emergency management and public safety personnel to maintain situational awareness when preparing for, and responding to, an incident or event.',
        },
        {
            link: 'http://video.arcgis.com/iframe/2868/000000/width/960/0/00:00:00',
            linkText: 'Summarize Impact',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/ImpactSummaryMap.png',
            imageAlt: 'Summarize Impact',
            description:
                'The Impact Summary Map can be used by emergency management organizations to quickly communicate impact of an event to interested parties. It utilizes enriched content to facilitate quick summary information for the affected population.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Public Information Map',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/PublicInformationMap.png',
            imageAlt: 'Public Information Map',
            description:
                'The Public Information Map can be used by emergency management organizations to communicate event based information with various stakeholders and constituents.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Communicate Road Closures',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/RoadClosures.png',
            imageAlt: 'Communicate Road Closures',
            description:
                'The Road Closures map can be used by emergency management staff to maintain an inventory of road closures and communicate closures and detours to travelers.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Conduct Damage Assessments',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/DamageAssessment.png',
            imageAlt: 'Conduct Damage Assessments',
            description:
                'The Damage Assessment application can be used by inspectors to conduct structural damage assessments in a connected or disconnected network environment.',
        },

        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Report Health and Safety Issues',
            imageSrc: 'http://solutions.arcgis.com/shared/img/HealthSafetyReportsFeatureCollection.png',
            imageAlt: 'Report Health and Safety Issues',
            description:
                'A collection of maps and apps used by citizens and public safety personnel to file reports important to the health and safety of a community.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Locate Emergency Shelters',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/ShelterLocatorFeature.png',
            imageAlt: 'Locate Emergency Shelters',
            description:
                'The Shelter Locator enables citizens to find emergency shelters near them when evacuating from a natural or man-made incident.',
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
            linkText: 'Import CAMEO data',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/CameoTools.png',
            imageAlt: 'Import CAMEO data',
            description:
                'Help prepare for and respond to chemical emergencies by importing data from a CAMEO system into a File Geodatabase for further GIS analysis.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Produce Emergency Maps',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/EMMaps.png',
            imageAlt: 'Produce Emergency Maps',
            description:
                'The Emergency Management Maps can be used by mapping technicians to create a standard set of briefing and response maps.',
        },

        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Perform Photo Surveys',
            imageSrc: 'http://solutions.arcgis.com/shared/img/PhotoSurveyFeature.png',
            imageAlt: 'Perform Photo Surveys',
            description:
                'Photo Survey can be used by emergency response organizations to conduct surveys that identify damaged structures.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Report Locations of Debris',
            imageSrc: 'http://solutions.arcgis.com/emergency-management/img/DebrisReportingFeature.png',
            imageAlt: 'Report Locations of Debris',
            description:
                'Debris Reporting supports Emergency Response organizations with determining the location of remaining debris by enabling the public and response workers with tools to report where debris is.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Brief Incident Personnel',
            imageSrc: 'http://solutions.arcgis.com/shared/img/IncidentBriefingJournalFeatureStory.png',
            imageAlt: 'Brief Incident Personnel',
            description:
                'The Incident Briefing application can be used by emergency management personnel to provide map-based briefings and reports during incident and blue sky conditions.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Response
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

export default Response;
