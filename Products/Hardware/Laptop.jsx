import React from 'react';
import Partners from '../../../Partner';

const Laptop = () => {
  return (
    <>
        <section className="bg-gray-50 py-12 px-6 mt-20">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Laptop</h2>
                <div className="flex flex-col lg:flex-row items-center gap-5">

                    <div className="lg:w-1/3 lg:pl-8">
                        <img
                        src="laptop.jpg"
                        alt="laptop"
                        className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 text-gray-700 space-y-6">
                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        A laptop, often called a notebook or “notebook computer”, is a small, portable personal computer with a “clamshell” form factor, an alphanumeric keyboard on the lower part of the “clamshell” and a thin LCD or LED computer screen on the upper portion, which is opened up to use the computer. Laptops are folded shut for transportation, and thus are suitable for mobile use. Although originally there was a distinction between laptops and notebooks, the former being bigger and heavier than the latter, as of 2014, there is often no longer any difference. Laptops are commonly used in a variety of settings, such as at work, in education, and for personal multimedia and home computer use.
                        </p>

                        <p className='text-gray-700 text-base md:text-lg mb-4'>
                        A laptop combines the components, inputs, outputs, and capabilities of a desktop computer, including the display screen, small speakers, a keyboard, pointing devices (such as a touchpad or trackpad), a processor, and memory into a single unit. Most 2016-era laptops also have integrated webcams and built-in microphones. Some 2016-era laptops have touchscreens. Laptops can be powered either from an internal battery or by an external power supply from an AC adapter. Hardware specifications, such as the processor speed and memory capacity, significantly vary between different types, makes, models and price points. Design elements, form factor, and construction can also vary significantly between models depending on intended use. Examples of specialized models of laptops include rugged notebooks for use in construction or military applications, as well as low production cost laptops such as those from the One Laptop per Child organization, which incorporate features like solar charging and semi-flexible components not found on most laptop computers.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
  );
};

export default Laptop;
