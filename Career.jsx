import React, { useState } from "react";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    jobTitle: '',
    cv: null,
  });



  const jobPostings = [
    {
      title: "Environmental Compliance Specialist",
      vacancy: 1,
      experience: "1+ years",
      responsibilities: [
        "Conduct assessments to evaluate environmental impact in regulated zones.",
        "Collaborate with stakeholders to ensure compliance with relevant environmental policies.",
        "Prepare reports and documentation for regulatory submissions.",
        "Guide project teams to adhere to environmental standards.",
        "Stay updated with changes in environmental laws and regulations.",
      ],
      technicalSkills: [
        "Strong knowledge base of satellite image classification and deliniation for Coastal Zone Management.",
      ],
      location: "Bhubaneswar, Kolkata",
    },

    {
      title: "Senior Consultant",
      vacancy: 1,
      experience: "20 years",
      responsibilities: [
        "Minimum of 20 years of experience managing large-scale projects related to ecological zones and sensitive environments.",



        "Should have experience in Sales",
        "Should have experience in IT Sales and Marketing",
        "Should be experienced in handling both Corporate and Govt. Clients",
        "Should be innovative in finding opportunities and leads",
        "Should be conversant in Hindi, English & Odiya",
        "Should be responsible for both Pre and Post Sales Relationship Management",
        "Should be responsible for Payment follow-ups and collections",
        "Should have experience in Team Handling",
        "Should be conversant with Funneling and Forecasting",
        "Should be experienced in Presentation and Demonstrations",
      ],
      technicalSkills: [
        "MS Office",
        "Any one Software Development Language",
        "Any one Database Language",
        "Basic Hardware Knowledge",
      ],
      location: "Bhubaneswar, Kolkata",
    },
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
       ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };


  // Application Form
  // const JobApplicationForm = () => (
  //   <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
  //     <h2 className="text-2xl font-bold mb-4">Add your contact information</h2>
  //     <form action="https://formsubmit.co/emitechinfosystems@gmail.com"
  //             method="POST">
        
        
  //       <div className="mb-2">
  //         <label htmlFor="jobTitle" className="block font-medium text-gray-700">
  //           Job Title
  //         </label>
  //         <input 
  //           type="text" 
  //           id="jobTitle" 
  //           name="jobTitle" 
  //           value={formData.jobTitle} 
  //           onChange={handleInputChange} 
  //           className="w-full border border-gray-300 rounded-md p-2 mt-1" 
  //         />
  //       </div>
        
        
        
  //       <div className="mb-2">
  //         <label htmlFor="firstName" className="block font-medium text-gray-700">
  //           First name
  //         </label>
  //         <input
  //           type="text"
  //           id="firstName"
  //           name="firstName"
  //           value={formData.firstName} 
  //           onChange={handleInputChange}
  //           className="w-full border border-gray-300 rounded-md p-2 mt-1"
  //           placeholder="Enter your first name"
  //           required
  //         />
  //       </div>

  //       <div className="mb-2">
  //         <label htmlFor="lastName" className="block font-medium text-gray-700">
  //           Last name
  //         </label>
  //         <input
  //           type="text"
  //           id="lastName"
  //           name="lastName"
  //           value={formData.lastName} 
  //           onChange={handleInputChange}
  //           className="w-full border border-gray-300 rounded-md p-2 mt-1"
  //           placeholder="Enter your first name"
  //           required
  //         />
  //       </div>



  //       <div className="mb-2">
  //         <label htmlFor="phone" className="block font-medium text-gray-700">Phone number</label>
  //         <input
  //           type="tel"
  //           id="phone"
  //           name="phone"
  //           value={formData.phone}
  //           onChange={handleInputChange}
  //           className="w-full border border-gray-300 rounded-r-md p-2"
  //           placeholder="Enter your phone number"
  //           required
  //         />
  //       </div>


  //       <div className="mb-2">
  //         <label htmlFor="email" className="block font-medium text-gray-700">
  //           Email
  //         </label>
  //         <input
  //           type="email"
  //           id="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleInputChange}
  //           className="w-full border border-gray-300 rounded-md p-2 mt-1"
  //           placeholder="Enter your email"
  //           required
  //         />
  //       </div>


  //       <div className="mb-2">
  //         <label htmlFor="cv" className="block font-medium text-gray-700">
  //           Upload CV
  //         </label>
  //         <input 
  //           type="file" 
  //           id="cv" 
  //           name="cv" 
  //           onChange={handleFileChange} 
  //           className="w-full border border-gray-300 rounded-md p-2 mt-1" 
  //         />
  //       </div>


  //       <button
  //         type="submit"
  //         className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
  //       >
  //         Submit
  //       </button>

  //       <div className="mb-4">
  //         <input type="hidden" name="_next" value="https://emitech-infosystems.com/"></input>

  //         <input type="hidden" name="_captcha" value="true"></input>
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-16 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Career Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobPostings.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Vacancy:</strong> {job.vacancy}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Experience:</strong> {job.experience}
                </p>
                <h4 className="font-semibold text-gray-800">Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                <h4 className="font-semibold text-gray-800">Technical Skills:</h4>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {job.technicalSkills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
                <p className="text-gray-600">
                  <strong>Location:</strong> {job.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-20">
          <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-xl w-full">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute text-3xl font-bold top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            {/* <JobApplicationForm /> */}

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-bold mb-4">Add your contact information</h2>
              <form action="https://formsubmit.co/emitechinfosystems@gmail.com"
                      method="POST">
                
                
                <div className="mb-2">
                  <label htmlFor="jobTitle" className="block font-medium text-gray-700">
                    Job Title
                  </label>
                  <input 
                    type="text" 
                    id="jobTitle" 
                    name="jobTitle" 
                    value={formData.jobTitle} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-300 rounded-md p-2 mt-1" 
                  />
                </div>
                
                
                
                <div className="mb-2">
                  <label htmlFor="firstName" className="block font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName} 
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="lastName" className="block font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName} 
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    placeholder="Enter your first name"
                    required
                  />
                </div>



                <div className="mb-2">
                  <label htmlFor="phone" className="block font-medium text-gray-700">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-r-md p-2"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>


                <div className="mb-2">
                  <label htmlFor="email" className="block font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    placeholder="Enter your email"
                    required
                  />
                </div>


                <div className="mb-2">
                  <label htmlFor="cv" className="block font-medium text-gray-700">
                    Upload CV
                  </label>
                  <input 
                    type="file" 
                    id="cv" 
                    name="cv" 
                    onChange={handleFileChange} 
                    className="w-full border border-gray-300 rounded-md p-2 mt-1" 
                  />
                </div>


                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
                >
                  Submit
                </button>

                <div className="mb-4">
                  <input type="hidden" name="_next" value="https://emitech-infosystems.com/"></input>

                  <input type="hidden" name="_captcha" value="true"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Career;



