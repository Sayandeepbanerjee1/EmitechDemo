import React from "react";
import Partners from "../../../Partner";

  const PlanningAndDevelopment = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/local-government/planning-and-development/vibrant-economies/',
            linkText: 'Promote Vibrant Economies',
            imageSrc: 'http://solutions.arcgis.com/local-government/planning-and-development/img/LiveWorkLocate2.png',
            imageAlt: 'Promote Vibrant Economies',
            description:
                'A collection of maps and apps used by the general public and businesses to explore quality of life characteristics, locate available sites, and discover potential incentives.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/planning-and-development/orderly-growth/',
            linkText: 'Encourage Orderly Growth',
            imageSrc: 'http://solutions.arcgis.com/local-government/planning-and-development/img/LandUseRegulations.png',
            imageAlt: 'Encourage Orderly Growth',
            description:
                'A collection of maps used by field staff to inventory signs, signals, streetlights, and other visible assets in the public right of way.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/planning-and-development/blight-properties/',
            linkText: 'Transform Blighted Properties',
            imageSrc: 'http://solutions.arcgis.com/local-government/img/CitizenProblemReporter.png',
            imageAlt: 'Transform Blighted Properties',
            description:
                'A collection of maps and apps used by planning staff to understand the scope of blight issues in their community, acquire and maintain problem properties, and return properties to productive use.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/planning-and-development/manage-community-events/',
            linkText: 'Manage Community Events',
            imageSrc: 'http://solutions.arcgis.com/local-government/emergency-management/img/EventSiteMap.png',
            imageAlt: 'Manage Community Events',
            description:
                'A collection of maps and apps used by government agencies and other stakeholders to permit, coordinate, plan, and promote community or special events.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/photo-survey',
            linkText: 'Photo Inventory Properties',
            imageSrc: 'http://solutions.arcgis.com/local-government/img/PhotoSurveyFeature.png',
            imageAlt: 'Photo Inventory Properties',
            description:
                'Photo Survey can be used by local governments to publish street-level photo collections and conduct focused property surveys that may identify blight, damaged structures, or construction activity.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/public-notification/',
            linkText: 'Notify Property Owners',
            imageSrc: 'http://solutions.arcgis.com/local-government/planning-and-development/img/PublicNotification.png',
            imageAlt: 'Notify Property Owners',
            description:
                'Public Notification can be used by local government staff to identify a collection of properties and create mailing labels, or a structured text file, of owners and occupants.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/planning-and-development/connect-citizens/',
            linkText: 'Connect with Citizens',
            imageSrc: 'http://solutions.arcgis.com/local-government/img/CitizenProblemReporter.png',
            imageAlt: 'Connect with Citizens',
            description:
                'A collection of maps and apps used by the general public to review land use cases and submit feedback, locate a park or school, and submit requests for service in their community.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/code-violation/',
            linkText: 'Manage Code Violations',
            imageSrc: 'http://solutions.arcgis.com/local-government/planning-and-development/img/CodeViolation2.png',
            imageAlt: 'Manage Code Violations',
            description:
                'Code Violation can be used by code enforcement officers, building officials, and zoning administrators to collect violation and related inspection information.',
        },

        {
            link: 'http://solutions.arcgis.com/local-government/public-works/identify-tansportation-hazards/',
            linkText: 'Publish 3D Scenes',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/LocalGovRealisticScenes.png',
            imageAlt: 'Publish 3D Scenes',
            description:
                'A collection of local government 3D scenes that serve as a foundation for desktop, mobile and web mapping applications.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/planning-and-development/review-proposed-development/',
            linkText: 'Review Proposed Developments',
            imageSrc: 'http://solutions.arcgis.com/local-government/planning-and-development/img/ReviewProposedDevelopment.png',
            imageAlt: 'Review Proposed Developments',
            description:
                'Review Proposed Developments can used by local government staff to visualize proposed developments and assess the impact of each development on the existing community.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/planning-and-development/manage-addresses/',
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
                Planning and Development
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                    <img
                        src="http://solutions.arcgis.com/assets/images/localgov-planning.jpg"
                        alt="Land Records Overview"
                        className="rounded-lg shadow-lg w-full max-w-xl"
                    />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                    <p>
                    Engage the community in your growth management plans, promote business diversity, attract talented citizens, and encourage quality places and environments.
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

export default PlanningAndDevelopment;
