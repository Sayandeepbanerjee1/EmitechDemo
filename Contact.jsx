import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="pt-20">
      <h2 className="text-center font-bold text-2xl mt-6">Contact Us</h2>

      <div className="flex items-center justify-center">
        <div className="container w-1/2 justify-start items-center px-2">

          <h3 className="text-center font-semibold text-xl mt-2">Branch Offices</h3>
          <div className="grid grid-cols-2 gap-1">
              <p>
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-600 pt-2" />
                Agartala – Tripura
              </p>
              <p>
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-600" />
                Bhubaneswar – Orissa
              </p>
              <p>
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-600" />
                Itanagar – Arunachal Pradesh
              </p>
              <p>
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-600" />
                Noida – New Delhi
              </p>
              <p>
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-600" />
                Sikkim – Gangtok
              </p>
          </div>
          
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-10 py-5">
          {/* Left Section */}
          <section className="gap-10 py-4 px-5 ">
            <div>
              <div className="grid grid-rows justify-center">
                <p className="mb-4 text-wrap">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="mr-2 text-gray-600"
                  />
                  P 185, Suren Sarkar Road, KOLKATA-700010. INDIA.
                </p>
                <p className="mb-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 text-gray-600"
                  />
                  +91-9681191828/ 9830187605
                </p>
                <p className="mb-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 text-gray-600"
                  />
                  Landline: 033 23700878
                </p>
                <p className="mb-5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 text-gray-600"
                  />
                  admin@emitech-infosystems.com; emitechinfosystems@gmail.com
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.2300256265627!2d88.39154172363826!3d22.569894412291767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276635520d129%3A0x19b42c3d34fccf91!2sp%2C%20Panshi%20Apartment%2C%20P-185%2C%20Suren%20Sarkar%20Rd%2C%20Subhas%20Sarobar%20Park%2C%20Phool%20Bagan%2C%20Beleghata%2C%20Kolkata%2C%20West%20Bengal%20700010!5e0!3m2!1sen!2sin!4v1734730753120!5m2!1sen!2sin" width="100%" height="350" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </section>

          {/* Right Section */}
          <section className="bg-blue-300">
            <form
              action="https://formsubmit.co/emitechinfosystems@gmail.com"
              method="POST"
            >
              <div className="max-w-md mx-auto p-4 rounded">
                {/* Name and Phone */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-600 font-bold">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 font-bold">Phone:</label>
                    <input
                      type="tel"
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className=" font-bold block text-gray-600">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                

                {/* Message */}
                <div className="mb-4">
                  <label className="font-bold block text-gray-600">Message:</label>
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your message"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pb-4">
                <button
                  type="submit"
                  className=" bg-green-600 px-6 py-2 rounded hover:text-pink-500 text-white"
                >
                  Send Message
                </button>
              </div>
              <div className="mb-4">
                  <input type="hidden" name="_next" value="https://emitech-infosystems.com/"></input>

                  <input type="hidden" name="_captcha" value="true"></input>
                </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
