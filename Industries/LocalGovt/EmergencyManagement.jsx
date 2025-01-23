import React from "react";
import Partners from "../../../Partner";

  const EmergencyManagement = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/emergency-management/preparedness/',
            linkText: 'Preparedness',
            imageSrc: '	https://solutions.arcgis.com/assets/images/emergency-preparedness.jpg',
            imageAlt: 'Preparedness',
            description:
                'Map and model plans before an event occurs, determine their potential impacts, visualize critical vulnerabilities, and plan for special events.',
        },
        {
            link: 'http://solutions.arcgis.com/emergency-management/response/',
            linkText: 'Response',
            imageSrc: 'http://solutions.arcgis.com/assets/images/emergency-response.jpg',
            imageAlt: 'Response',
            description:
                'Deliver situational awareness, engage with the public, and understand the impact of an event using focused applications and common tools.',
        },
        {
            link: 'http://solutions.arcgis.com/emergency-management/recovery/',
            linkText: 'Recovery',
            imageSrc: 'induswater3.jpg',
            imageAlt: 'Recovery',
            description:
                'Analyze resources, assess the aftermath and collect information in support of your citizens.',
        },

        {
            link: 'http://solutions.arcgis.com/emergency-management/mitigation',
            linkText: 'Mitigation',
            imageSrc: 'http://solutions.arcgis.com/assets/images/emergency-mitigation.jpg',
            imageAlt: 'Mitigation',
            description:
                'Map and analyze potential risks, understand status of mitigation projects, and facilitate resiliency.',
        },
        {
            link: 'http://solutions.arcgis.com/emergency-management/organization/',
            linkText: 'Your Emergency Management Organization',
            imageSrc: 'induswater3.jpg',
            imageAlt: 'Your Emergency Management Organization',
            description:
                'Quickly aggregate authoritative content, deliver situational awareness to the organization, and configure EMI to support the mission.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Emergency Management
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                        <img
                            src="http://solutions.arcgis.com/assets/images/localgov-emergency-management.jpg"
                            alt="Fire Service"
                            className="rounded-lg shadow-lg w-full max-w-xl"
                        />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                        <p>
                        Develop and share response plans; maintain operational awareness during emergency incidents and events; and improve the efficiency and accuracy of recovery efforts.
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

export default EmergencyManagement;
