import React from 'react';
import Partners from '../../../Partner';

const Ups = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">UPS</h2>
                <div className="flex flex-col lg:flex-row items-center gap-5">

                    <div className="lg:w-1/3">
                        <img
                        src="ups.jpg"
                        alt="UPS"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        An uninterruptible power supply, also uninterruptible power source, UPS or battery/flywheel backup, is an electrical apparatus that provides emergency power to a load when the input power source or mains power fails. A UPS differs from an auxiliary or emergency power system or standby generator in that it will provide near-instantaneous protection from input power interruptions, by supplying energy stored in batteries, supercapacitors, or flywheels. The on-battery runtime of most uninterruptible power sources is relatively short (only a few minutes) but sufficient to start a standby power source or properly shut down the protected equipment.
                        </p>

                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        A UPS is typically used to protect hardware such as computers, data centers, telecommunication equipment or other electrical equipment where an unexpected power disruption could cause injuries, fatalities, serious business disruption or data loss. UPS units range in size from units designed to protect a single computer without a video monitor (around 200 volt-ampere rating) to large units powering entire data centers or buildings. The world’s largest UPS, the 46-megawatt Battery Electric Storage System (BESS), in Fairbanks, Alaska, powers the entire city and nearby rural communities during outages.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default Ups;
