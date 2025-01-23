import React from "react";
import Partners from "../../../Partner";

  const WaterUtilities = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/water/water-delivery/',
            linkText: 'Water Delivery',
            imageSrc: 'induswater1.jpg',
            imageAlt: 'Water Delivery',
            description:
                'Maintain information about your water network assets, plan capital projects, respond to leaks, reduce water loss, optimize field work, communicate with customers, and more.',
        },
        {
            link: 'http://solutions.arcgis.com/water/sewer-collection/',
            linkText: 'Sewer Collection',
            imageSrc: 'induswater2.jpg',
            imageAlt: 'Sewer Collection',
            description:
                'Gain insight from CCTV data, improve capital project planning, maintain information about sewer network assets, perform field inspections, inform customers about overflows, understand service requests, and more.',
        },
        {
            link: 'http://solutions.arcgis.com/water/stormwater-conveyance/',
            linkText: 'Stormwater',
            imageSrc: 'induswater3.jpg',
            imageAlt: 'Stormwater',
            description:
                'Inventory stormwater assets, find illicit discharges, maintain information about stormwater networks, share stormwater maps, and more.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Water Utilities
                </h2>
                <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify mb-4 flex flex-col mx-auto">
                    <p>
                        For Water <strong>EMI</strong> provides maps and apps to maintain comprehensive water, sewer, and stormwater records; coordinate and plan capital projects; and improve the operations of utility networks that provide clean drinking water and protect public health.
                    </p>
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

export default WaterUtilities;
