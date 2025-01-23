import React from "react";
import Partners from "../../../Partner";

const AutoLevel = () => {
  return (
    <>
        <section className="bg-gray-100 mt-20 px-4 py-8 md:px-12 lg:px-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Auto Level</h2>

                <p className="text-gray-700 text-base md:text-lg mb-4">
                A dumpy level, builder’s auto level, leveling instrument, or automatic level is an optical instrument used to establish or verify points in the same horizontal plane. It is used in surveying and building with a vertical staff to measure height differences and to transfer, measure and set heights.
                </p>
                <p className="text-gray-700 text-base md:text-lg mb-4">
                The level instrument is set up on a tripod and, depending on the type, either roughly or accurately set to a leveled condition using footscrews (levelling screws). The operator looks through the eyepiece of the telescope while an assistant holds a tape measure or graduated staff vertical at the point under measurement. The instrument and staff are used to gather and/or transfer elevations (levels) during site surveys or building construction. Measurement generally starts from a benchmark with known height determined by a previous survey, or an arbitrary point with an assumed height.
                </p>
    
            </div>
        
        </section>
        <Partners />
    </>
    
  );
};

export default AutoLevel;
