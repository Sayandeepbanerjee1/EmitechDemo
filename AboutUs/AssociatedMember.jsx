import React from 'react';

const AssociatedMember = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-20 pt-5 bg-gray-50">Associated Member</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-6 space-y-6 md:space-y-0 p-6   bg-gray-50 ">

        <img
          src="/agi-cert.png"
          alt="Certificate"
          className="w-full md:w-1/3 h-85 object-contain"
        />


        <img
          src="/agi-2nd.jpeg"
          alt="Certificate"
          className="w-full md:w-1/3 md:pt-20 h-auto object-contain rounded-md bg-red shadow-md "
        />
      </div>
    </div>
  );
};

export default AssociatedMember;
