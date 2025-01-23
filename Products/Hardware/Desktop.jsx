import React from 'react';
import Partners from '../../../Partner';

const Desktop = () => {
  return (
    <>
        <section className="bg-gray-100 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Desktop Computer</h2>
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <div className="lg:w-1/3">
                        <img
                        src="desktop.png"
                        alt="OCimage"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        A desktop computer is a personal computer designed for regular use at a single location on or near a desk or table due to its size and power requirements. The most common configuration has a case that houses the power supply, motherboard (a printed circuit board with a microprocessor as the central processing unit (CPU), memory, bus, and other electronic components), disk storage (usually one or more hard disk drives, optical disc drives, and in early models floppy disk drives); a keyboard and mouse for input; and computer monitor and printer for output. The case may be oriented horizontally and placed atop a desk or vertically and placed underneath or beside a desk.
                        </p>

                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default Desktop;
