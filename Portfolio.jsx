import React from "react";

const portfolio = () => {
  const projects = [
    {
      img:  "https://picsum.photos/200/300?random=1",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris libero, iaculis et consectetur at, fringilla at ex. Nam ultricies facilisis nisi eget porttitor. Phasellus hendrerit in leo vel aliquam. Proin vulputate magna erat. Etiam vel risus vehicula, vestibulum ante in, tempor nisi."
    },
    {
      img:  "https://picsum.photos/200/300?random=2",
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris libero, iaculis et consectetur at, fringilla at ex. Nam ultricies facilisis nisi eget porttitor. Phasellus hendrerit in leo vel aliquam. Proin vulputate magna erat. Etiam vel risus vehicula, vestibulum ante in, tempor nisi."
    },
    {
      img:  "https://picsum.photos/200/300?random=3",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris libero, iaculis et consectetur at, fringilla at ex. Nam ultricies facilisis nisi eget porttitor. Phasellus hendrerit in leo vel aliquam. Proin vulputate magna erat. Etiam vel risus vehicula, vestibulum ante in, tempor nisi."
    },
    {
      img:  "https://picsum.photos/200/300?random=4",
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris libero, iaculis et consectetur at, fringilla at ex. Nam ultricies facilisis nisi eget porttitor. Phasellus hendrerit in leo vel aliquam. Proin vulputate magna erat. Etiam vel risus vehicula, vestibulum ante in, tempor nisi."
    },
    {
      img:  "https://picsum.photos/200/300?random=5",
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris libero, iaculis et consectetur at, fringilla at ex. Nam ultricies facilisis nisi eget porttitor. Phasellus hendrerit in leo vel aliquam. Proin vulputate magna erat. Etiam vel risus vehicula, vestibulum ante in, tempor nisi."
    }
  ]

  return (
  //   <div className="container mx-auto pt-20">
  //     <div className="mt-20">
  //       {projects.map((props) => (
  //         <div className="border border-gray-300 rounded-lg shadow-lg p-2 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  //           <div className="rounded-t-lg flex justify-center items-center">
  //             <img src={props.img} alt="" className="w-full h-52 object-cover rounded-md mb-2"/> 
  //           </div>

  //           <div className="flex flex-col justify-center items-center gap-4 p-4">
  //             <p className="text-lg font-semibold text-gray-700 bg-gray-200 text-center py-2 rounded-md mb-1">{props.title}</p>
  //             <p className="">{props.description}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )
  <div className="container mx-auto px-8 lg:px-16 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Portfolio</h2>
      <div className="overflow-x-auto portfolio-scrollbar-hide">
        <div className="inline-flex gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-lg p-4 bg-white transform transition-transform duration-300 hover:scale-105 w-80 min-h-[450px] flex-shrink-0 flex flex-col"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-700 bg-gray-200 text-center py-2 rounded-md mb-1">
                {project.title}
              </h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
