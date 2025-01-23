import React from "react";
import Partners from "../../../Partner";

  const EconomicDevelopment = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Live, Work, Locate',
            imageSrc: 'http://solutions.arcgis.com/parks-gardens/img/IrrigationMapperFeature.png',
            imageAlt: 'Live, Work, Locate',
            description:
                'An application configuration that enables people to explore amenities and services within a certain drive time from a location used for living, working or locating a business within the state.',
        },
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Incentive Zone',
            imageSrc: 'http://solutions.arcgis.com/parks-gardens/img/IrrigationEditorFeature.png',
            imageAlt: 'Incentive Zone',
            description:
                'An application configuration that allows businesses to explore enterprise or incentive zones within the state and to understand the specific details around the zones.',
        },
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Site Selector',
            imageSrc: 'http://solutions.arcgis.com/parks-gardens/img/IrrigationViewerFeature.png',
            imageAlt: 'Site Selector',
            description:
                'Site Selector is an application configuration that allows individuals and businesses to explore a region and discover information that can aid in making informed business decisions.',
        },
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Manage Community Events',
            imageSrc: 'http://solutions.arcgis.com/parks-gardens/img/IrrigationViewerFeature.png',
            imageAlt: 'Manage Community Events',
            description:
                'A collection of maps and apps used by government agencies and other stakeholders to permit, coordinate, plan, and promote community or special events.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Economic Development
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

export default EconomicDevelopment;
