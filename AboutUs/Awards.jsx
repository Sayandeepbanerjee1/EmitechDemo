import React from 'react';
import Partners from '../../Partner';

const Awards = () => {
  return (
    <>
      <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Awards & Testimonials</h2>
        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 leading-relaxed">
            "EMI (Emitech Infosystems) has demonstrated their unwavering commitment to the <strong>Tripura Space Application Centre (TSAC)</strong> by providing exceptional service and always striving for improvement. They actively seek feedback to identify areas where they can enhance their services and consistently aim to add value wherever possible.  
            <br /><br />
            Their strong understanding of TSAC's work and organizational culture allows them to deliver solutions that are well-aligned with TSAC's processes and goals. EMI's ability to integrate seamlessly into existing workflows ensures efficient and effective project delivery.  
            <br /><br />
            The consultants at EMI are highly professional, knowledgeable, and a pleasure to collaborate with. Their expertise, combined with their proactive approach, has fostered trust and strengthened the partnership between EMI and TSAC. This level of dedication and professionalism underscores EMI's position as a reliable and valuable partner."
        </blockquote>
      </div>
    </section>
    <Partners />
    </>
  );
};

export default Awards;
