import React from "react";
import Partners from "../../../Partner";

  const Elections = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/local-government/help/early-voting/',
            linkText: 'Locate Voting Centers',
            imageSrc: 'http://solutions.arcgis.com/local-government/elections/img/EarlyVoting.png',
            imageAlt: 'Locate Voting Centers',
            description:
                'Early Voting can be used by citizens to locate the nearest voting centers where ballots can be cast in person or by mail.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/election-polling-places/',
            linkText: 'Find a Polling Place',
            imageSrc: 'http://solutions.arcgis.com/local-government/elections/img/PollingPlace.png',
            imageAlt: 'Find a Polling Place',
            description:
                'Election Polling Places can be used by citizens to locate the polling place where ballots can be cast on election day.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/polling-wait-times/',
            linkText: 'Report Polling Place Wait Times',
            imageSrc: 'http://solutions.arcgis.com/local-government/elections/img/PollingPlaceWaitTimes.png',
            imageAlt: 'Report Polling Place Wait Times',
            description:
                'Polling Place Wait Times can be used by poll workers to report expected wait times at their assigned polling place and share this information with citizens on election day.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/my-elected-representative/',
            linkText: 'Find Elected Representatives',
            imageSrc: 'http://solutions.arcgis.com/local-government/elections/img/MyElectedRepresentative.png',
            imageAlt: 'Find Elected Representatives',
            description:
                'My Elected Representative can be used by citizens to determine who represents them in local, state, and federal elected offices.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/election-results/',
            linkText: 'Share Election Results',
            imageSrc: 'http://solutions.arcgis.com/local-government/elections/img/ElectionResults.png',
            imageAlt: 'Share Election Results',
            description:
                'Election Results can be used by the general public and other interested parties to view map-based election results.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/historical-election-results-gallery/',
            linkText: 'Review Historical Results',
            imageSrc: 'http://solutions.arcgis.com/shared/img/Historical-Election-Results.png',
            imageAlt: 'Review Historical Results',
            description:
                'Historical Election Results Gallery can be used by the general public and other interested parties to view past election results.',
        },
        {
            link: 'http://solutions.arcgis.com/local-government/help/administrative-area-management/',
            linkText: 'Inventory Administrative Areas',
            imageSrc: 'http://solutions.arcgis.com/shared/img/AdministrativeAreaManagement.png',
            imageAlt: 'Inventory Administrative Areas',
            description:
                'Administrative Area Data Management can be used by mapping technicians to maintain an inventory of geopolitical areas, school districts, voting precincts, public safety districts, and service boundaries.',
        },
        {
            link: 'http://www.esri.com/software/redistricting/',
            linkText: 'Develop Redistricting Plans',
            imageSrc: 'http://solutions.arcgis.com/local-government/elections/img/RedistrictingPlans.png',
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
                Elections
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                    <img
                        src="http://solutions.arcgis.com/assets/images/localgov-elections.jpg"
                        alt="Land Records Overview"
                        className="rounded-lg shadow-lg w-full max-w-xl"
                    />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                    <p>
                    Locate early voting or election day polling locations; share election results; obtain information about current elected officials; and develop redistricting plans.
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

export default Elections;
