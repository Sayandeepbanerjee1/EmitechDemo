import React from "react";
import Partners from "../../../Partner";

  const SecretaryOfState = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Early Voting',
            imageSrc: 'http://solutions.arcgis.com/state-government/secretary-state/img/EarlyVoting-FeatureStory.png',
            imageAlt: 'Early Voting',
            description:
                'The Early Voting application can be used by citizens to locate the nearest voting centers where ballots can be cast in person or by mail.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Election Polling Places',
            imageSrc: 'http://solutions.arcgis.com/state-government/secretary-state/img/PollingPlace-FeatureStory.png',
            imageAlt: 'Election Polling Places',
            description:
                'The Election Polling Places application can be used by citizens to locate the polling place where ballots can be cast on election day.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'My Elected Representative',
            imageSrc: 'http://solutions.arcgis.com/state-government/secretary-state/img/MyLegislativeRepresentatives-FeatureStory.png',
            imageAlt: 'My Elected Representative',
            description:
                'The My Elected Representative application can be used by citizens to determine who represents them in state and federal elected offices.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Share Election Results',
            imageSrc: 'http://solutions.arcgis.com/state-government/secretary-state/img/ElectionResults.png',
            imageAlt: 'Share Election Results',
            description:
                'The Election Results application can be used by the general public and other interested parties to view map-based election results.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Review Historical Results',
            imageSrc: 'http://solutions.arcgis.com/shared/img/Historical-Election-Results.png',
            imageAlt: 'Review Historical Results',
            description:
                'The Historical Election Results Gallery can be used by the general public and other interested parties to view past election results.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/',
            linkText: 'Develop Redistricting Plans',
            imageSrc: 'http://solutions.arcgis.com/state-government/secretary-state/img/RedistrictingPlans.png',
            imageAlt: 'Develop Redistricting Plans',
            description:
                'Redistricting Online can be used by state and local governments, advocacy groups, and the general public to draw legislative and congressional redistricting plans and understand demographic changes.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Secretary of State
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

export default SecretaryOfState;
