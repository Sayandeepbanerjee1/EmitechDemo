import React from "react";
import Partners from "../../../Partner";

  const FireService
  = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/local-government/help/fire-incident-maps/',
            linkText: 'Create Fire Incident Maps',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/FireIncidentMaps.png',
            imageAlt: 'Create Fire Incident Maps',
            description:
                'Fire Incident Maps can be used by fire departments to create a series of fire incident maps from computer aided dispatch or records management data.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/target-hazard-analysis/',
            linkText: 'Identify Target Hazards',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/TargetHazardAnalysis.png',
            imageAlt: 'Identify Target Hazards',
            description:
                'Target Hazard Analysis can be used by fire personnel to identify properties that could result in a loss of life, or have a negative impact on the community, if a fire were to occur.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/fire-station-wall-map/',
            linkText: 'Produce Wall Maps',
            imageSrc: 'https://solutions.arcgis.com/local-government/help/fire-station-wall-map/img/FireStationWallMapOverview.png',
            imageAlt: 'Produce Wall Maps',
            description:
                'Fire Station Wall Map can be used by mapping technicians to create wall maps for each fire station.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/fire-run-book/',
            linkText: 'Generate Fire Run Books',
            imageSrc: 'https://solutions.arcgis.com/local-government/help/fire-run-book/img/FireRunBookOverview.png',
            imageAlt: 'Generate Fire Run Books',
            description:
                'Fire Run Book can be used by mapping technicians to produce individual map pages, a street index, and a Fire Run Book for personnel en route to a fire.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/fire-hydrant/',
            linkText: 'Prepare for Incidents',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/PreIncidentPlanning.png',
            imageAlt: 'Prepare for Incidents',
            description:
                'A collection of maps used by fire operations staff to prepare for incidents or events, develop response plans, and communicate road closures',
        },
        {
            link: 'https://solutions.arcgis.com/local-government/help/public-notification/',
            linkText: 'Conduct Damage Assessments',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/DamageAssessment.png',
            imageAlt: 'Conduct Damage Assessments',
            description:
                'Damage Assessment can be used by inspectors to conduct structural damage assessments in a connected or disconnected network environment.',
        },
        {
            link: 'https://www.arcgis.com/apps/solutions/index.html?gallery=true&industry=State%20and%20Local%20Government&sortField=relevance&sortOrder=desc#home',
            linkText: 'Inspect Fire Flow',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/FireHydrantInspection.png',
            description:
                'Fire Hydrant Inspection can be used by fire personnel to ensure every fire hydrant in a district performs properly and reliably when an emergency occurs.',
        },
        {
            link: 'https://doc.arcgis.com/en/arcgis-solutions/latest/reference/introduction-to-damage-assessment.htm',
            linkText: 'Conduct Fire Safety Surveys',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/HomeSafetyInspection.png',
            imageAlt: 'Conduct Fire Safety Surveys',
            description:
                'Fire Safety Survey can be used by fire personnel to conduct dwelling fire safety surveys that are a part of a community’s risk reduction program.',
        },

        {
            link: 'https://doc.arcgis.com/en/arcgis-solutions/latest/reference/introduction-to-damage-assessment.htm',
            linkText: 'Inventory Defibrillators',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/AEDInventory.png',
            imageAlt: 'Inventory Defibrillators',
            description:
                'AED Inventory can be used by fire personnel to collect automated external defibrillators (AEDs).',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/fire-service/manage-community-events/',
            linkText: 'Manage Community Events',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/EventSiteMap.png',
            imageAlt: 'Manage Community Events',
            description:
                'A collection of maps and apps used by government agencies and other stakeholders to permit, coordinate, plan, and promote community or special events.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/emergency-management/img/FloodPlanning.png',
            linkText: 'Share Evacuation Notices',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/EvacuationZones.png',
            imageAlt: 'Share Evacuation Notices',
            description:
                'Evacuation Zones can be used by fire personnel and emergency management staff to notify the public when evacuations are required.',
        },
        {
            link: 'https://doc.arcgis.com/en/arcgis-solutions/latest/reference/introduction-to-damage-assessment.htm',
            linkText: 'Adopt an Asset',
            imageSrc: 'http://solutions.arcgis.com/local-government/img/AdoptaFeature.png',
            imageAlt: 'Adopt an Asset',
            description:
                'Adopta can be used by government agencies and other organizations to engage the public in the maintenance of natural and man-made assets.',
        },

        {
            link: 'http://solutions.arcgis.com/local-government/fire-service/manage-addresses/',
            linkText: 'Manage Address Information',
            imageSrc: 'http://solutions.arcgis.com/local-government/planning-and-development/img/AddressDataManagement.png',
            imageAlt: 'Manage Address Information',
            description:
                'A collection of maps used to manage road centerlines, site addresses, facilities, mailing addresses, and aggregate this information from authoritative sources for use by state and regional agencies.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/administrative-area-management/',
            linkText: 'Inventory Administrative Areas',
            imageSrc: 'http://solutions.arcgis.com/local-government/help/administrative-area-management/',
            imageAlt: 'Inventory Administrative Areas',
            description:
                'Administrative Area Data Management can be used by mapping technicians to maintain an inventory of geopolitical areas, school districts, voting precincts, public safety districts, and service boundaries.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Fire Service
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                    <img
                        src="http://solutions.arcgis.com/assets/images/localgov-fire-service.jpg"
                        alt="Fire Service"
                        className="rounded-lg shadow-lg w-full max-w-xl"
                    />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                    <p>
                    Leverage geographic information to analyze risk; develop pre-incident plans; and improve response activities that protect human life, property, and natural resources.
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

export default FireService;
