import React from "react";
import Partners from "../../../Partner";

  const LawEnforcement = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/local-government/help/public-safety-incident-mapping/',
            linkText: 'Create Incident Maps',
            imageSrc: 'http://solutions.arcgis.com/local-government/law-enforcement/img/PublicSafetyIncidentMaps.png',
            imageAlt: 'Create Incident Maps',
            description:
                'Public Safety Incident Maps can be used by law enforcement agencies to create a series of incident layers from computer aided dispatch or records management data.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/repeat-and-near-repeat-analysis/',
            linkText: 'Create Crime Predictions',
            imageSrc: 'http://solutions.arcgis.com/local-government/law-enforcement/img/RepeatandNearRepeatAnalysis.png',
            imageAlt: 'Create Crime Predictions',
            description:
                'Repeat and Near Repeat Analysis can be used by law enforcement agencies to identify repeat and near repeat victimization patterns of a particular crime type within a specified time frame and geographic area.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/law-enforcement/manage-community-events/',
            linkText: 'Manage Community Events',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/EventSiteMap.png',
            imageAlt: 'Manage Community Events',
            description:
                'A collection of maps and apps used by government agencies and other stakeholders to permit, coordinate, plan, and promote community or special events.',
        },
        {
            link: 'https://doc.arcgis.com/en/arcgis-solutions/latest/reference/introduction-to-tax-reverted-property.htm',
            linkText: 'Develop Pre-Incident Plans',
            imageSrc: 'http://solutions.arcgis.com/local-government/fire-service/img/PreIncidentPlanning.png',
            imageAlt: 'Develop Pre-Incident Plans',
            description:
                'Pre-Incident Planning can be used by fire and law enforcement incident operations personnel to streamline the collection of hazards, equipment, supplies, and procedures needed to deal with a potential incident.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/cell-phone-analysis/',
            linkText: 'Analyze Cell Phone Data',
            imageSrc: 'http://solutions.arcgis.com/local-government/law-enforcement/img/CellPhoneAnalysis.png',
            imageAlt: 'Analyze Cell Phone Data',
            description:
                'Cell Phone Analysis can be used by law enforcement agencies to analyze cell tower information and call detail records acquired from wireless service providers.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/law-enforcement/identify-tansportation-hazards/',
            linkText: 'Identify Transportation Hazards',
            imageSrc: 'http://solutions.arcgis.com/local-government/public-works/img/VisionZero.png',
            imageAlt: 'Identify Transportation Hazards',
            description:
                'A collection of maps used to identify transportation hazards and dangerous traffic behaviors that could lead to fatalities or serious injury on a roadway.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/law-field-interview',
            linkText: 'Conduct Field Interviews',
            imageSrc: 'http://solutions.arcgis.com/local-government/law-enforcement/img/FieldInterview.png',
            imageAlt: 'Conduct Field Interviews',
            description:
                'Field Interview can be used by law enforcement officers to collect field interview cards and field contact reports.',
        },
        {
            link: 'https://doc.arcgis.com/en/arcgis-solutions/latest/reference/introduction-to-damage-assessment.htm',
            linkText: 'Submit Requests for Service',
            imageSrc: 'http://solutions.arcgis.com/local-government/img/CitizenProblemReporter.png',
            imageAlt: 'Submit Requests for Service',
            description:
                'Citizen Problem Reporter can be used by the general public to submit non-emergency problems or requests for service in their community from a smartphone, tablet, and desktop computer.',
        },

        {
            link: 'http://solutions.arcgis.com/local-government/law-enforcement/manage-addresses/',
            linkText: 'Manage Address Information',
            imageSrc: 'http://solutions.arcgis.com/local-government/planning-and-development/img/AddressDataManagement.png',
            imageAlt: 'Manage Address Information',
            description:
                'A collection of maps used to manage road centerlines, site addresses, facilities, mailing addresses, and aggregate this information from authoritative sources for use by state and regional agencies.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/administrative-area-management/',
            linkText: 'Inventory Administrative Areas',
            imageSrc: 'http://solutions.arcgis.com/shared/img/AdministrativeAreaManagement.png',
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
                Law Enforcement
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                        <img
                            src="http://solutions.arcgis.com/assets/images/localgov-law-enforcement.jpg"
                            alt="Law Enforcement"
                            className="rounded-lg shadow-lg w-full max-w-xl"
                        />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                        <p>
                            Analyze and understand incident trends; collaborate with other agencies; and allocate resources effectively to protect human life and property.
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

export default LawEnforcement;
