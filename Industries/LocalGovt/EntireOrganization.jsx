import React from "react";
import Partners from "../../../Partner";

  const EntireOrganization = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/local-government/help/early-voting/',
            linkText: 'Visualize Performance Indicators',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/ExecutiveDashboard.png',
            imageAlt: 'Visualize Performance Indicators',
            description:
                'Executive Dashboard can be used by local government leaders to review key performance metrics, identify trends, and devise new management strategies.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/maps-and-apps-gallery/',
            linkText: 'Simply Discover Maps and Apps',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/HostedMapAppGallery.png',
            imageAlt: 'Simply Discover Maps and Apps',
            description:
                'Maps and Apps Gallery can be used by the general public to quickly discover publicly available maps and apps.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/arcgis-online-for-local-government/',
            linkText: 'Deploy Mapping Platform',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/ModelOrganization.png',
            imageAlt: 'Deploy Mapping Platform',
            description:
                'The EMI for Local Government Model Organization can be used to deploy an online mapping platform that promotes collaboration in your organization.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/local-government-information-model/',
            linkText: 'Organize your Geographic Data',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/InformationModel.png',
            imageAlt: 'Organize your Geographic Data',
            description:
                'The Local Government Information Model is a harmonized information model designed to support the focused maps and apps provided in the local government solution.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/entire-organization/basemaps/',
            linkText: 'Publish High-Quality Basemaps',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/LocalGovBasemaps.png',
            imageAlt: 'Publish High-Quality Basemaps',
            description:
                'A collection of essential local government basemaps that serve as a foundation for desktop, mobile and web mapping applications.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/data-reviewer-for-basemaps/',
            linkText: 'Improve Basemap Data',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/DataReviewerforBasemaps.png',
            imageAlt: 'Improve Basemap Data',
            description:
                'Data Reviewer for Basemaps can be used by mapping technicians to automate quality control and continuously improve the integrity of basemap data.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/entire-organization/basescenes/',
            linkText: 'Publish 3D Scenes',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/LocalGovRealisticScenes.png',
            imageAlt: 'Publish 3D Scenes',
            description:
                'Administrative Area Data Management can be used by mapping technicians to maintain an inventory of geopolitical areas, school districts, voting precincts, public safety districts, and service boundaries.',
        },
        {
            link: 'http://opendata.arcgis.com/about',
            linkText: 'Share Data with Public',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/ArcGISOpenData.png',
            imageAlt: 'Share Data with Public',
            description:
                'EMI Open Data gives you a quick way to set up public-facing websites where people can easily find and download your open data in a variety of open formats.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Your Entire Organization
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                    <img
                        src="http://solutions.arcgis.com/assets/images/localgov-entire-org.jpg"
                        alt="Land Records Overview"
                        className="rounded-lg shadow-lg w-full max-w-xl"
                    />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                    <p>
                    Organize your online mapping platform and geographic information; publish a series of authoritative basemaps; and deploy a collection of maps and apps that add value to your entire organization.
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

export default EntireOrganization;
