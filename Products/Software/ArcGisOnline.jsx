import React from 'react';
import Partners from '../../../Partner';

const ArcGisOnline = () => {
  return (
    <>
        <section className="bg-gray-100 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">ArcGIS Online</h2>
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <div className="lg:w-1/3">
                        <img
                        src="img1.png"
                        alt="OCimage"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p>
                        ArcGIS Online is a complete, cloud-based mapping platform. Make and share beautiful maps, and do everything in between.It’s possible only with ArcGIS Online, a scalable and secure software-as-a-service hosted by EMI.
                        </p>
                        <p>
                        As s cloud-based service, ArcGIS Online is designed from the ground up to automatically scale to meet peak periods of demand, all day, every day. Whether you have hundreds of viewers or millions, EMI scales it for you with nothing for you to install or manage.
                        </p>
                    </div>
                    
                </div>


                <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">

                    <div className="lg:w-1/3">
                        <img
                        src="img2.png"
                        alt="img2"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p>
                        Get started right away.ArcGIS Online comes with a suite of basemaps, high-resolution imagery, and the highest rated demographic data. Make 2D and 3D maps with the built-in map viewer and scene viewer. Access maps and layers on hundreds of topics in the Living Atlas of the World—a constantly growing collection from the EMI user community.
                        </p>
                    </div>
                    
                </div>



                <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">

                    <div className="lg:w-1/3">
                        <img
                        src="img3.png"
                        alt="img3"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p>
                        Give coworkers the gift of self-service mapping.ArcGIS Online mapping tools are powerful yet simple to use so everyone in your organization can make and share beautiful maps. Beyond mapping, people in your organization can use ArcGIS Online to explore data and gain the kind of insights that leads to better decisions
                        </p>
                    </div>
                    
                </div>


                <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">

                    <div className="lg:w-1/3">
                        <img
                        src="img4.png"
                        alt="img4"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p>
                        ArcGIS Online is designed as a secure system with controlled access. You can always access up-to-date information on security, privacy, and compliance information along with updates and alerts, best practices, system availability, and status history.
                        </p>
                    </div>
                    
                </div>


            </div>
        </section>
        <Partners />
    </>
  );
};

export default ArcGisOnline;
