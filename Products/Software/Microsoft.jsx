import React from "react";
import Partners from "../../../Partner";

const Microsoft = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Microsoft</h2>

                <div className="ml-4">
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Microsoft Windows</strong> (or simply Windows) is a metafamily of graphical operating systems developed, marketed, and sold by Microsoft. It consists of several families of operating systems, each of which cater to a certain sector of the computing industry. Active Windows families include Windows NT, Windows Embedded and Windows Phone; these may encompass subfamilies, e.g. Windows Embedded Compact (Windows CE) or Windows Server. Defunct Windows families include Windows 9x; Windows 10 Mobile is an active product, unrelated to the defunct family Windows Mobile.
                    </p>

                    <div className="lg:w-1/3">
                        <img
                        src="microsoft.jpg"
                        alt="microsoft"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <h3 className="pt-8 text-2xl font-semibold text-gray-800 mb-4">Microsoft Office</h3>

                    <p className="text-gray-700 leading-relaxed mb-4 ml-4">
                    Microsoft Office is an office suite of applications, servers, and services developed by Microsoft. It was first announced by Bill Gates on 1 August 1988, at COMDEX in Las Vegas. Initially a marketing term for a bundled set of applications, the first version of Office contained Microsoft Word, Microsoft Excel, and Microsoft PowerPoint. Over the years, Office applications have grown substantially closer with shared features such as a common spell checker, OLE data integration and Visual Basic for Applications scripting language. Microsoft also positions Office as a development platform for line-of-business software under the Office Business Applications brand.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4 ml-4">
                    The desktop version of Office is available for Windows and OS X. A mobile version of Office, Office Mobile, is available for free on Windows Phone, Windows 10 Mobile, iOS and Android. A touch-optimized version of Microsoft Office 2013 is available pre-installed on Windows RT tablets. A free-to-use web-based version of Office, Office Online, is also available.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Microsoft SQL Server
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4 ml-4">
                    In computing, Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network (including the Internet).
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4 ml-4">
                    Microsoft markets at least a dozen different editions of Microsoft SQL Server, aimed at different audiences and for workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users.
                    </p>
                    
                </div>
                

            </div>
        </section>
        <Partners />
    </>
    
  );
};

export default Microsoft;
