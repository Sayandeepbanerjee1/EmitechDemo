import React from "react";
import Partners from "../../Partner";

const AppDev = () => {
  return (
    <>
      <section className="px-6 py-12 bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Mobile App Development</h2>
          <p className="text-gray-600 mb-8">
          EMI has established expertise in the domain of enterprise mobile apps development with teams in IOS (iPhone app development) and Android (Android App Development).
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">iOS Application Development</h3>
            <p className="text-gray-600">
            EMI ventured into the domain of iPhone and iPad apps development and has assisted a number of clients with their iPhone app development requirements.
            </p>
            <img
              src="/appD.jpg"
              alt="App Development"
              className="w-full max-w-md mx-auto my-6 rounded-lg shadow-lg"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Android Application Development</h3>
            <p className="text-gray-600">
            EMI Android App Development team has core expertise in developing enterprise application. It has developed application ranging from data collection using text, photographs and video’s to applications extensively using geographic locations with capabilities to integrate it with existing maps like Google, Bing, Open street map etc.
            </p>
            {/* <img
              src="/gps2.jpg"
              alt="gps2"
              className="w-full max-w-md mx-auto my-6"
            /> */}
          </div>
      </div>
      </section>
      <Partners />
    </>
    
  );
};

export default AppDev;
