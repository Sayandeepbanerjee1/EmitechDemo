import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Partners = () => {
  const partnerLogos = [
    { id: 1, name: "Trimble", logo: "/partners/trimble.png" },
    { id: 2, name: "Imajing", logo: "/partners/imajing.png" },
    { id: 3, name: "Microsoft", logo: "/partners/microsoft.png" },
    { id: 4, name: "RockWare", logo: "/partners/rockware.jpeg" },
    { id: 5, name: "IBM", logo: "/partners/ibm.png" },
    { id: 6, name: "Citrix", logo: "/partners/citrix.png" },
    { id: 7, name: "Envi", logo: "/partners/envi.png" },
    { id: 8, name: "Faro", logo: "/partners/faro.png" },
    { id: 9, name: "Esri", logo: "/partners/esri.jpeg" },
    { id: 10, name: "Garmin", logo: "/partners/garmin.png" },
  ];

  const associatedMembers = [
    { id: 1, name: "ISRS", logo: "/partners/isrs.png" },
    { id: 2, name: "AGI", logo: "/partners/agi.png" },
  ];

  return (
    <div className="bg-green-50 py-12">
      {/* Partners */}
      <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          0: { slidesPerView: 3 },
        }}
      >
        {partnerLogos.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Associated Members */}
      <div className="bg-green-50 py-12 mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Associated Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {associatedMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-100 shadow-md rounded-lg flex items-center justify-center h-40"
            >
              <img
                src={member.logo}
                alt={member.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
