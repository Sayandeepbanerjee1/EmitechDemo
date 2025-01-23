import React from "react";
import Partners from "../../../Partner";

  const YourCollectiveOrganization = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'EMI Online Model Organization – State',
            imageSrc: 'http://solutions.arcgis.com/state-government/entire-organization/img/stmodelorg.png',
            imageAlt: 'EMI Online Model Organization – State',
            description:
                'The EMI Online Model Organization for State Government provides users with a series of guidelines to follow when setting up EMI Online. The guidelines include group structure, sharing policies, and user access rights.',
        },
        {
            link: 'http://video.arcgis.com/iframe/2868/000000/width/960/0/00:00:00',
            linkText: 'Executive Dashboard',
            imageSrc: 'http://solutions.arcgis.com/state-government/entire-organization/img/dashboard.png',
            imageAlt: 'Executive Dashboard',
            description:
                'The Executive Dashboard is a configuration of EMI Online and a JavaScript application used by government leaders to proactively view critical metrics, identify trends, raise questions, and devise new management strategies. It supports statewide efforts to increase accountability and transparency in government, and with the citizens they serve.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Aggregate Address Information',
            imageSrc: 'http://solutions.arcgis.com/state-government/entire-organization/img/community-addresses.png',
            imageAlt: 'Aggregate Address Information',
            description:
                'Community Addresses can be used by organizations to aggregate authoritative address data and deliver focused maps and locators to key stakeholders.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Aggregate Parcel Information',
            imageSrc: 'http://solutions.arcgis.com/state-government/entire-organization/img/community-parcels.png',
            imageAlt: 'Aggregate Parcel Information',
            description:
                'Community Parcels can be used to enable organizations to aggregate authoritative parcel data and property information to deliver focused parcel maps to key stakeholders.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Simply Discover Maps and Apps',
            imageSrc: 'http://solutions.arcgis.com/state-government/entire-organization/img/HostedMapAppGallery.png',
            imageAlt: 'Simply Discover Maps and Apps',
            description:
                'The Maps and Apps Gallery application is a simple way for citizens to discover your publicly available maps and apps.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Your Collective Organization
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

export default YourCollectiveOrganization;
