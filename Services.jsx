import React from "react";

const services = [
  {
    image: "/WebDevelopement.jpeg",
    title: "Web Development",
    description:
      "Web development involves creating and maintaining websites, focusing on both frontend (user interface) and backend (server and database) aspects. It utilizes technologies like HTML, CSS, JavaScript, and various backend frameworks. Web development is essential for building responsive and interactive websites and web applications.",
  },
  {
    image: "/AndroidDevelopement.jpeg",
    title: "Android Development",
    description:
      "Android development involves creating applications for devices running the Android operating system. It's a versatile and widely used platform, powering billions of smartphones, tablets, and other devices globally. Android apps are primarily developed using Java or Kotlin, supported by Android Studio, the official integrated development environment (IDE).",
  },
  {
    image: "/SoftwareDevelopement.jpg",
    title: "Software Developement",
    description:
      "A software application is a program or group of programs designed to perform specific tasks for users, such as word processing, data management, or communication. It can be standalone or part of a larger system and is developed using various programming languages and tools. Software applications enhance productivity and streamline workflows across different platforms.",
  },
  {
    image: "/WebGis.jpeg",
    title: "Web GIS",
    description:
      "Web GIS (Geographic Information Systems) refers to the use of web-based tools and technologies to access, analyze, and share geographic data and maps. It allows users to visualize spatial information, perform geographic analysis, and make data-driven decisions in a browser environment.",
  },
  {
    image: "/service3.jpg",
    title: "Aerial & DGPS Survey",
    description:
      "Emitech Infosystems conduct DGPS, Total Station and Aerial surveys on all types of topography. The survey data is used for digitizing cadastral maps, visualizing land features, identifying obstacles etc. Once the surveyed data is mapped, it provides valuable spatial information that can be used for project planning, risk analysis, monitoring environmental impacts of particular operations etc. This data is also integrated into the GIS application that acts as a decision-support system. Our experienced team of surveyors ensures a high-degree of detail and accuracy in their procedures for maximum effectiveness.",
  },
  {
    image: "/service4.jpeg",
    title: "Vehicle Tracking Solution",
    description:
      "A vehicle tracking system combines the use of automatic vehicle location in individual vehicles with software that collects these fleet data for a comprehensive picture of vehicle locations. Modern vehicle tracking systems commonly use GPS or GLONASS technology for locating the vehicle, but other types of automatic vehicle location technology can also be used. Vehicle information can be viewed on electronic maps via the Internet or specialized software. Urban public transit authorities are an increasingly common user of vehicle tracking systems, particularly in large cities.",
  },
];

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-2 m-5 bg-white transform transition-transform duration-500 hover:scale-105">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-52 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold text-gray-700 bg-gray-200 text-center py-2 rounded-md mb-1">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-10 px-5 py-12 pt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;