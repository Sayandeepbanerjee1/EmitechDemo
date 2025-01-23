import React from "react";
import Partners from "../../../Partner";

  const LandRecords = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/local-government/land-records/manage-property/',
            linkText: 'Maintain Property Information',
            imageSrc: 'LR2.png',
            imageAlt: 'Maintain Property Information',
            description:
                'A collection of maps and apps used by mapping technicians to maintain a survey framework, examine deeds, inventory tax parcel descriptions, produce map books, and publish property information.',
        },
        {
            link: 'https://solutions.arcgis.com/local-government/help/photo-survey/',
            linkText: 'Photo Inventory Properties',
            imageSrc: 'LR3.png',
            imageAlt: 'Photo Inventory Properties',
            description:
                'Photo Survey can be used by local governments to publish street-level photo collections and conduct focused property surveys that may identify blight, damaged structures, or construction activity.',
        },
        {
            link: 'https://solutions.arcgis.com/local-government/help/value-analysis-dashboard/',
            linkText: 'Visualize Property Value',
            imageSrc: 'LR4.png',
            imageAlt: 'Visualize Property Value',
            description:
                'Value Analysis Dashboard can be used by assessors to visualize the impact of sales, foreclosures, and assessment appeals on property value and revenue in a neighborhood or tax district.',
        },
        {
            link: 'https://doc.arcgis.com/en/arcgis-solutions/latest/reference/introduction-to-tax-reverted-property.htm',
            linkText: 'Recover Tax Revenue',
            imageSrc: 'LR5.png',
            imageAlt: 'Recover Tax Revenue',
            description:
                'Tax Reverted Property can be used by the treasurer’s office staff to collect delinquent tax property information and market delinquent properties to the general public, land development companies, and real estate professionals.',
        },
        {
            link: 'https://www.arcgis.com/apps/solutions/index.html?gallery=true&industry=State%20and%20Local%20Government&sortField=relevance&sortOrder=desc#home',
            linkText: 'Engage Citizens',
            imageSrc: 'LR6.png',
            imageAlt: 'Engage Citizens',
            description:
                'A collection of maps and apps used by the general public to access tax parcel and related property information, find comparable sales, file assessment appeals, and identify properties impacted by FEMA floodplain boundaries.',
        },
        {
            link: 'https://solutions.arcgis.com/local-government/help/public-notification/',
            linkText: 'Notify Property Owners',
            imageSrc: 'LR7.png',
            imageAlt: 'Notify Property Owners',
            description:
                'Public Notification can be used by local government staff to identify a collection of properties and create mailing labels, or a structured text file, of owners and occupants.',
        },
        {
            link: 'https://www.arcgis.com/apps/solutions/index.html?gallery=true&industry=State%20and%20Local%20Government&sortField=relevance&sortOrder=desc#home',
            linkText: 'Manage Address Information',
            imageSrc: 'LR8.png',
            imageAlt: 'Manage Address Information',
            description:
                'A collection of maps used to manage road centerlines, site addresses, facilities, mailing addresses, and aggregate this information from authoritative sources for use by state and regional agencies.',
        },
        {
            link: 'https://doc.arcgis.com/en/arcgis-solutions/latest/reference/introduction-to-damage-assessment.htm',
            linkText: 'Conduct Damage Assessments',
            imageSrc: 'LR9.png',
            imageAlt: 'Conduct Damage Assessments',
            description:
                'Damage Assessment can be used by inspectors to conduct structural damage assessments in a connected or disconnected network environment.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Land Records
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                    <img
                        src="LR1.jpg"
                        alt="Land Records Overview"
                        className="rounded-lg shadow-lg w-full max-w-xl"
                    />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                    <p>
                        Manage an accurate inventory of real property; describe who owns
                        the land; analyze land value and associated improvements; and
                        maximize property tax revenue.
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

export default LandRecords;
