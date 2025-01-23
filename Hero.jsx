import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const HeroSection = () => {
    const slides = [
        { image: '/img-1.jpg', text: 'Welcome to Emitech Infosystems.We leverage cutting-edge data engineering tools to process and analyze massive datasets in real time.' },
        { image: '/BinaryNos.jpeg', text: 'Innovative Solutions for Your Business, Our expertise spans GPS, satellite communications, and next-gen wireless networks.' },
        { image: '/EarthAndSattelite.jpg', text: 'Connecting the World with Technology We specialize in.' },
        { image: '/img-2.jpeg', text: 'Our platform is designed to empower the next generation of innovators by providing them with the tools and resources they need.' },
    ];

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            className="h-screen w-full"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    {/* Image */}
                    <div
                        className="h-full w-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Text */}
                        <div className="absolute inset-10 flex items-center justify-center bg-black bg-opacity-40">
                            <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-5">
                                {slide.text}
                            </h1>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSection;
