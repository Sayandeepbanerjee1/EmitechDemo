import React from 'react';
import Partners from '../../Partner';

const OurCapabilities = () => {
  return (
    <>
        <section className="bg-gray-100 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our capabilities</h2>
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <div className="lg:w-1/3">
                        <img
                        src="oc.jpg"
                        alt="OCimage"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p>
                        <strong>Emitech Infosystems Private Limited</strong> is the leading technology startup company
                        with the most innovative ideas and a vast variety of product lines and services. We are the
                        leading associate and business partner of various OEMs like ESRI, FARO, Imaging, CITRIX, Planet,
                        and many more, providing principal solutions for Geographical Information System (GIS), Remote
                        Sensing (RS), and IT-related support to clients across India.
                        </p>
                        <p>
                        We are going beyond the ordinary every time by delivering the best IT software, services, and
                        consultancy to our clients in India and the global market. Through a vast network of technology
                        partners and our strong presence in multiple geographic locations, we have achieved great
                        success with customer service. We offer industry-leading IT solutions and cost-effective services
                        for setting up virtual workspaces, public and private cloud, database management, web application
                        development, mobile application, and data analytics.
                        </p>
                        <p>
                        At Emitech Infosystems, our mission is to offer innovative and customized latest GIS solutions,
                        RS support, CADD, and staffing solutions to our clients. We strive for excellence, refining
                        quality, expanding capabilities, increasing efficiency, and elevating the customer service
                        experience with professional integrity.
                        </p>
                        <p>
                        We are looking to form successful work relationships in each market we serve by providing the
                        best-in-class, extra-mile service to our valued clients and associate employees. With the
                        successful implementation of the latest GIS & RS technology, we at Emitech Infosystems are
                        dedicated to significantly helping our clients. Our Geo-Informatics services include remote
                        sensing and image processing, digitization, thematic mapping, digital image processing, contour
                        mapping, spatial analysis, and much more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default OurCapabilities;
