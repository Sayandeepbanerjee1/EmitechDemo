import React from "react";
import Partners from "../../../Partner";

const RemoteSensing = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Remote Sensing Software – ENVI</h2>

                <div className="ml-4">
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    The ENVI product family provides a variety of software solutions for processing and analyzing geospatial imagery used by scientists, researchers, image analysts, and GIS professionals around the world. ENVI solutions combine the latest spectral image processing and image analysis technology with an intuitive, user-friendly interface to help get meaningful information from imagery.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                    ENVI combines advanced spectral image processing and proven geospatial analysis technology with a modern, user-friendly interface. Whether you use panchromatic, LiDAR, SAR, multispectral or hyperspectral imagery, ENVI has the latest processing and analysis tools to help you extract meaningful information to make better decisions.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">ENVI LiDAR</h3>

                    <p className="text-gray-700 leading-relaxed mb-4 ml-4">
                    ENVI LiDAR is an interactive geospatial software environment that lets you create realistic 3D visualizations and easily extract important features and products from raw LiDAR point cloud data. The elevation information contained within LiDAR can be used to create Digital Elevation Models (DEMs), or be included in your geospatial products like line-of-sight or right-of way analyses. ENVI LiDAR can also be customized with the API to meet the unique needs of your organization.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">ENVI for ArcGIS</h3>

                    <p className="text-gray-700 leading-relaxed mb-4 ml-4">
                    ENVI for ArcGIS allows you to analyze geospatial imagery such as hyperspectral, multispectral, panchromatic, LiDAR, and SAR within any ArcGIS environment whether deployed on the desktop, in the cloud, or online. This flexibility allows you to implement scientifically proven ENVI image analysis without having to change your existing workflow.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">ENVI Services Engine
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4 ml-4">
                    ENVI Services Engine is a cloud-based image analysis solution that lets your organization create, publish, and deploy advanced ENVI image and data analytics to virtually any existing enterprise infrastructure. Now users can take full advantage of the information imagery provides from their desktop, mobile devices, or web applications. ENVI Services Engine maximizes the return on your investment with increased efficiencies, improved decision-making processes, and simplified hardware maintenance.
                    </p>



                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">IDL</h3>

                    <p className="text-gray-700 leading-relaxed mb-4 ml-4">
                    IDL is the trusted scientific programming language used across disciplines to extract meaningful visualizations from complex numerical data. With IDL you can interpret your data, expedite discoveries, and deliver powerful applications to market. Additionally, IDL is a truly cross-platform solution, providing support for today’s most popular operating systems, including Microsoft Windows®, Mac OS X, Linux, and Solaris.
                    </p>

                    
                </div>
                

            </div>
        </section>
        <Partners />
    </>
    
  );
};

export default RemoteSensing;
