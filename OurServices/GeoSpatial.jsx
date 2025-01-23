import React from "react";
import Partners from "../../Partner";

const GeoSpatial = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-gray-800 mb-6">Geospatial Services</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          We provide a complete range of geo-spatial solutions ranging from web-based GIS applications to regional base mapping, 
          facilities conversion, and GIS consultancy. Emitech Infosystems has an expert GIS team handling projects proficiently. 
          Our team understands factors and probable upcoming issues related to GIS mapping projects. 
          We conduct in-depth assessments of the client's requirements. According to these requirements, 
          we categorize the work to provide comprehensive solutions. Our acclaim lies in providing our clients with high-quality 
          and affordable solutions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are well-equipped in providing geospatial services at any stage of the client’s business cycle, 
          either as a new integrated solution or for improving existing applications. As a technology-independent company 
          with broad experience in all leading GIS technologies, Emitech Infosystems can deliver the best results with more than 
          half a decade of experience. Geospatial services offered by us are with high levels of precision and accuracy.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="gs.jpg"
            alt="GIS Consulting"
            className="rounded-lg shadow-lg"
          />
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">GIS Consulting</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Emitech has an expert GIS team handling projects proficiently. Our team understands factors and probable upcoming issues 
          related to GIS mapping projects. We conduct in-depth assessments of the client’s requirements. According to these requirements, 
          we categorize the work to provide comprehensive solutions.
        </p>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          Our GIS consulting services are further defined in the following ways:
        </h4>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
          <li>Analyzing the client’s requirements</li>
          <li>Preparing the project scope based on the understanding of the client’s requirements</li>
          <li>
            Preparing a project cost-saving plan to minimize the client’s investment and maximize outputs
          </li>
          <li>Reviewing the plans prepared for GIS projects on a regular interval</li>
          <li>
            Analyzing the data report collected from sources like satellite images or surveys
          </li>
          <li>
            Specifications of the entire GIS project are then drawn for further action on the same, including accurate processes 
            through which the project should be implemented
          </li>
          <li>
            Deciding whether the vendor to whom the project should be outsourced will carry out services like field surveys and mapping 
            services for clients
          </li>
          <li>
            Deciding the type of GIS application that should be used for the project, including the type of technology and programming 
            language to be used to make customized applications
          </li>
        </ul>

        <h4 className="text-xl font-semibold text-gray-800 mb-4">Map Making Services</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          We offer the following map-making services:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Map Conversion and Digitization</li>
          <li>Remote Sensing Services</li>
          <li>Photogrammetry Services</li>
          <li>Survey and Mapping</li>
        </ul>
      </div>
    </section>
    <Partners />
    </>
    
  );
};

export default GeoSpatial;
