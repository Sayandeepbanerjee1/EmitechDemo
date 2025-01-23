import React from "react";
import Partners from "../../../Partner";

  const WirelineAndCable = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Foundation Solutions',
            imageSrc: 'http://solutions.arcgis.com/assets/images/defense-orws.png',
            imageAlt: 'Foundation Solutions',
            description:
                'A collection of maps and apps to get started with EMI for Telecommunications.',
        },

        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Improve Customer Experience',
            imageSrc: 'http://solutions.arcgis.com/assets/images/defense-orws.png',
            imageAlt: 'Improve Customer Experience',
            description:
                'A collection of maps and apps that assist in improving network reliability, improve call center efficiency, and engage with customers.',
        },

        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Increase Revenue Growth',
            imageSrc: 'http://solutions.arcgis.com/assets/images/defense-orws.png',
            imageAlt: 'Increase Revenue Growth',
            description:
                'A collection of maps and apps that assist in identifying and selling to new customers, identifying new high value service areas, and improve marketing campaign efficiency.',
        },

        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Optimize Capital Expenditure Return On Investment',
            imageSrc: 'http://solutions.arcgis.com/assets/images/defense-orws.png',
            imageAlt: 'Optimize Capital Expenditure Return On Investment',
            description:
                'A collection of maps and apps that assist in creating higher value routes, optimize network route lengths, and automate network planning.',
        },
        
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Increase Field Crew Productivity',
            imageSrc: 'http://solutions.arcgis.com/assets/images/defense-orws.png',
            imageAlt: 'Increase Field Crew Productivity',
            description:
                'A collection of maps and apps that can be used by field operations staff to gain service area insights and support crew safety.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Wireline And Cable
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

export default WirelineAndCable;
