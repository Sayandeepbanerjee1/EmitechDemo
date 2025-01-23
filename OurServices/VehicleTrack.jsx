// import React from "react";
// import Partners from "../../Partner";

// const VehicleTrack = () => {
//   return (
//     <>
//       <section className="px-6 py-12 bg-gray-50 mt-12">
//         <div className="max-w-7xl mx-auto">

//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Vehicle Tracking Solution</h2>
//           <p className="text-gray-600 mb-8">
//           A vehicle tracking system integrates automatic vehicle location (AVL) in individual vehicles with software that collects and displays fleet data, offering a real-time overview of vehicle locations. These systems primarily use GPS or GLONASS technology for accurate tracking, though other methods like cellular triangulation can also be employed.
//           </p>
//           <img
//               src="/vehicle.jpeg"
//               alt="Vehicle Tracking"
//               className="w-full max-w-md mx-auto my-6 rounded-lg shadow-lg"
//           />
//           <p className="text-gray-600 mb-8">
//           The data is processed and visualized on electronic maps via the Internet or specialized software, enabling users to monitor and manage fleets efficiently. Urban public transit authorities frequently use these systems in large cities to optimize routes, reduce delays, and improve passenger communication. Beyond transit, vehicle tracking systems are vital in industries like logistics and fleet management, offering tools like geofencing, driver behavior analysis, and maintenance tracking to enhance efficiency and safety.
//           </p>
//         </div>
//       </section>
//       <Partners />
//     </>
    
//   );
// };

// export default VehicleTrack;


import React from 'react';
import Partners from '../../Partner';

const VehicleTrack = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Vehicle Tracking Solution</h2>
                <div className="flex flex-col lg:flex-row items-center gap-5">

                    <div className="lg:w-1/3 lg:pl-8">
                        <img
                        src="vehicle.jpeg"
                        alt="Vehicle Tracking"
                        className="lg:w-max mx-auto my-6 rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        A vehicle tracking system integrates automatic vehicle location (AVL) in individual vehicles with software that collects and displays fleet data, offering a real-time overview of vehicle locations. These systems primarily use GPS or GLONASS technology for accurate tracking, though other methods like cellular triangulation can also be employed.
                        </p>

                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        The data is processed and visualized on electronic maps via the Internet or specialized software, enabling users to monitor and manage fleets efficiently. Urban public transit authorities frequently use these systems in large cities to optimize routes, reduce delays, and improve passenger communication. Beyond transit, vehicle tracking systems are vital in industries like logistics and fleet management, offering tools like geofencing, driver behavior analysis, and maintenance tracking to enhance efficiency and safety.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default VehicleTrack;
