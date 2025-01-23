import React from "react";
import Partners from "../../../Partner";

  const Facilities = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Irrigation Mapper',
            imageSrc: 'http://solutions.arcgis.com/parks-gardens/img/IrrigationMapperFeature.png',
            imageAlt: 'Irrigation Mapper',
            description:
                'Start mapping your irrigation system in the field quickly with a configuration of Collector for EMI for parks and gardens. It provides a template to create focused irrigation system maps that can be used to easily create and update your irrigation inventory on mobile devices in the garden.',
        },
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Irrigation Editor',
            imageSrc: 'http://solutions.arcgis.com/parks-gardens/img/IrrigationEditorFeature.png',
            imageAlt: 'Irrigation Editor',
            description:
                'Edit your irrigation system information in the office quickly with an irrigation editing web application for parks and gardens. It provides a template to create focused irrigation system maps that can be used to easily create and update your irrigation system inventory through your web browser.',
        },
        {
            link: 'http://solutions.arcgis.com/gallery/#s=0&md=industries:defense:Operational%20Readiness',
            linkText: 'Irrigation Viewer',
            imageSrc: 'http://solutions.arcgis.com/parks-gardens/img/IrrigationViewerFeature.png',
            imageAlt: 'Irrigation Viewer',
            description:
                'Explore and search your irrigation system information anywhere quickly with an irrigation web application for parks and gardens. It provides a template to create focused irrigation system maps that can be used to easily view irrigation system inventory through your web browser on any device.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Facilities
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

export default Facilities;
