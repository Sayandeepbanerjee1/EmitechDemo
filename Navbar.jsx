import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({}); // Tracks which dropdown is open in desktop
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({}); // Tracks dropdowns in mobile
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseClick = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseClick);

    return () => {
      document.removeEventListener('mousedown', handleMouseClick);
    };
  }, []);

  const toggleDropdown = (menuName) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const toggleMobileDropdown = (menuName) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };


  return (
    <header className="fixed top-5 w-full z-10">
      <nav className="mx-auto flex justify-between items-center p-3 md:p-4 rounded-full bg-white shadow-lg transform transition-all duration-300">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <img
            src="/emitech.png"
            alt="Logo"
            className="h-11 rounded-full w-1rem md:w-[2rem] lg:w-[2rem]"
          />
          <span className="text-lg md:text-md font-bold text-gray-800 whitespace-normal leading-tight sm:whitespace-nowrap">
            <Link to="/">Emitech Infosystems</Link>
          </span>
        </div>

        {/* Mobile icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button ref={buttonRef} className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium relative">
           <li>
             <Link to="/" className="hover:text-blue-500 transition-colors">
               Home
             </Link>
           </li>
           {/* About Us Dropdown */}
           <li
             className="relative group"
             onMouseEnter={() => toggleDropdown("about")}
             onMouseLeave={() => toggleDropdown("about")}
           >
             <span className="hover:text-blue-500 cursor-pointer transition-colors">
               About Us
             </span>
             {dropdownOpen["about"] && (
               <ul className="absolute w-[200px] left-0 top-full bg-white shadow-lg p-4 rounded-md text-gray-700 group-hover-block"
               >
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/missionAndVision" className="hover:text-blue-500 block py-1">
                     Mission & Vision
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/partnerDropDown" className="hover:text-blue-500 block py-1">
                     Partners
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/ourCapabilities" className="hover:text-blue-500 block py-1">
                     Our Capabilities
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/whyArc" className="hover:text-blue-500 block py-1">
                     Why ESRI ARCGIS Software?
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/awards" className="hover:text-blue-500 block py-1">
                     Awards & Testimonials
                   </Link>
                 </li>
                 <li>
                   <Link to="/associatedMember" className="hover:text-blue-500 block">
                     Associated Members
                   </Link>
                 </li>
               </ul>
             )}
          </li>
           {/* Products Dropdown */}
           {/* <li
             className="relative"
             onMouseEnter={() => toggleDropdown("products")}
             onMouseLeave={() => toggleDropdown("products")}
           >
             <span className="hover:text-blue-500 cursor-pointer transition-colors">
               Products
             </span>
             {dropdownOpen["products"] && (
               <ul className="absolute w-[200px] left-0 top-full bg-white shadow-lg p-4 rounded-md text-gray-700">
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/software" className="hover:text-blue-500 block py-1">
                     Software
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/survey" className="hover:text-blue-500 block py-1">
                     Survey Instruments
                   </Link>
                 </li>
                 <li className="mb-2">
                   <Link to="/hardware" className="hover:text-blue-500 block">
                     Hardware
                   </Link>
                 </li>
               </ul>
             )}
           </li> */}



          {/* Products Dropdown */}
            <li
            className="relative"
            onMouseEnter={() => toggleDropdown("products")}
            onMouseLeave={() => toggleDropdown("products")}
            >
            <span className="hover:text-blue-500 cursor-pointer transition-colors">
              Products
            </span>
            {dropdownOpen["products"] && (
              <ul className="absolute w-[200px] left-0 top-full bg-white shadow-lg p-4 rounded-md text-gray-700">
              <li
                className="relative group mb-4"
                onMouseEnter={() => toggleDropdown("software")}
                onMouseLeave={() => toggleDropdown("software")}
              >
                <span className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1">
                Software
                </span>
                {dropdownOpen["software"] && (
                <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                  <li className="mb-2 border-b border-gray-500"><Link to="/arcGisDesk" className="hover:text-blue-500 block py-1">ArcGIS Desktop Software Suit</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/arcGisOnline" className="hover:text-blue-500 block py-1">ArcGIS Online</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/arcGisServer" className="hover:text-blue-500 block py-1">ArcGIS Server Enterprise Software Suit</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/arcGisArcFm" className="hover:text-blue-500 block py-1">ArcGIS ArcFM Software</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/remoteSensing" className="hover:text-blue-500 block py-1">Remote Sensing Software – ENVI</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/microsoft" className="hover:text-blue-500 block py-1">Microsoft</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/imajing" className="hover:text-blue-500 block py-1">Imajing</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/autoCAD" className="hover:text-blue-500 block py-1">AutoCAD Software</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/rockWorks" className="hover:text-blue-500 block py-1">Rock Works Software</Link></li>
                </ul>
                )}
              </li>

              <li
                className="relative group mb-4"
                onMouseEnter={() => toggleDropdown("survey")}
                onMouseLeave={() => toggleDropdown("survey")}
              >
                <span className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1">
                Survey Instruments
                </span>
                {dropdownOpen["survey"] && (
                <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                  <li className="mb-2 border-b border-gray-500"><Link to="/handheldGps" className="hover:text-blue-500 py-1 block">Handheld GPS</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/differentialGps" className="hover:text-blue-500 py-1 block">Differential GPS</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/totalStation" className="hover:text-blue-500 py-1 block">Total Station</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/autoLevel" className="hover:text-blue-500 py-1 block">Auto Level</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/autoWeatherStation" className="hover:text-blue-500 py-1 block">Automatic Weather Station</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/laserInstrument" className="hover:text-blue-500 py-1 block">Laser Instrument</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/currentWaterMeter" className="hover:text-blue-500 py-1 block">Current Water Meter</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/waterLevelMeter" className="hover:text-blue-500 py-1 block">Water Level Meter</Link></li>
                </ul>
                )}
              </li>


              <li
                className="relative group mb-4" // Added margin-bottom for spacing
                onMouseEnter={() => toggleDropdown("hardware")}
                onMouseLeave={() => toggleDropdown("hardware")}
              >
                <span className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1">
                Hardware
                </span>
                {dropdownOpen["hardware"] && (
                <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                  <li className="mb-2 border-b border-gray-500"><Link to="/desktop" className="hover:text-blue-500 block py-1">Desktop Computer</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/laptop" className="hover:text-blue-500 block py-1">Laptop</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/rackServer" className="hover:text-blue-500 block py-1">Rack Server</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/bladeServer" className="hover:text-blue-500 block py-1">Blade Server</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/ups" className="hover:text-blue-500 block py-1">UPS</Link></li>
                  <li className="mb-2 border-b border-gray-500"><Link to="/vehicleTrack" className="hover:text-blue-500 block py-1">Vehicle Tracking System</Link></li>
                </ul>
                )}
              </li>
              </ul>
            )}
            </li>



            {/* Industries Dropdown */}
           {/* <li
             className="relative"
             onMouseEnter={() => toggleDropdown("industries")}
             onMouseLeave={() => toggleDropdown("industries")}
           >
             <span className="hover:text-blue-500 cursor-pointer transition-colors">
               Industries
             </span>
             {dropdownOpen["industries"] && (
               <ul className="absolute left-0 top-full bg-white shadow-lg p-4 rounded-md text-gray-700">
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/local-government" className="hover:text-blue-500 block py-1">
                     Local Government
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/state-government" className="hover:text-blue-500 block py-1">
                     State Government
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/emergency" className="hover:text-blue-500 block py-1">
                     Emergency
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/water" className="hover:text-blue-500 block py-1">
                     Water
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/electric" className="hover:text-blue-500 block py-1">
                     Electric
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/gas" className="hover:text-blue-500 block py-1">
                     Gas
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/defense" className="hover:text-blue-500 block py-1">
                     Defense
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/telecom" className="hover:text-blue-500 block py-1">
                     Telecommunications
                   </Link>
                 </li>
                 <li>
                   <Link to="/parks" className="hover:text-blue-500 block">
                     Parks & Gardens
                   </Link>
                 </li>
               </ul>
             )}
           </li> */}




            <li
              className="relative"
              onMouseEnter={() => toggleDropdown("industries")}
              onMouseLeave={() => toggleDropdown("industries")}
            >
              <span className="hover:text-blue-500 cursor-pointer transition-colors">
                Industries
              </span>
              {dropdownOpen["industries"] && (
                
                <ul className="absolute w-[230px] left-0 top-full bg-white shadow-lg p-4 rounded-md text-gray-700">
                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("local-government")}
                      onMouseLeave={() => toggleDropdown("local-government")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"
                    >
                      Local Government
                    </span>
                    {dropdownOpen["local-government"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/landRecords" className="hover:text-blue-500 block py-1">
                            Land Records
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/waterUtilities" className="hover:text-blue-500 block py-1">
                            Water Utilities
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/publicWorks" className="hover:text-blue-500 block py-1">
                            Public Works
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/fireService" className="hover:text-blue-500 block py-1">
                            Fire Service
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/emergencyManagement" className="hover:text-blue-500 block py-1">
                            Emergency Management
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/lawEnforcement" className="hover:text-blue-500 block py-1">
                            Law Enforcement
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/planningAndDevelopment" className="hover:text-blue-500 block py-1">
                            Planning And Development
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/elections" className="hover:text-blue-500 block py-1">
                            Elections
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/entireOrganization" className="hover:text-blue-500 block py-1">
                            Your Entire Organization
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("state-government")}
                      onMouseLeave={() => toggleDropdown("state-government")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"
                    >
                      State Government
                    </span>
                    {dropdownOpen["state-government"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/fishAndWildlife" className="hover:text-blue-500 block py-1">
                          Fish and Wildlife
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/environmentAndNaturalResources" className="hover:text-blue-500 block py-1">
                          Environment and Natural Resources
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/transportation" className="hover:text-blue-500 block py-1">
                          Transportation
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/economicDevelopment" className="hover:text-blue-500 block py-1">
                          Economic Development
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/emergencyManagement" className="hover:text-blue-500 block py-1">
                          Emergency Management
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/health" className="hover:text-blue-500 block py-1">
                          Health
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/secretaryOfState" className="hover:text-blue-500 block py-1">
                          Secretary of State
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/yourCollectiveOrganization" className="hover:text-blue-500 block py-1">
                          Your Collective Organization
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("emergency-management")}
                      onMouseLeave={() => toggleDropdown("emergency-management")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"
                    >
                      Emergency Management
                    </span>
                    {dropdownOpen["emergency-management"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/preparedness" className="hover:text-blue-500 block py-1">
                          Preparedness
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/response" className="hover:text-blue-500 block py-1">
                          Response
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/recovery" className="hover:text-blue-500 block py-1">
                          Recovery
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/mitigation" className="hover:text-blue-500 block py-1">
                          Mitigation
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/yourEmergencyManagementOrganization" className="hover:text-blue-500 block py-1">
                          Your Emergency Management Organization
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("water")}
                      onMouseLeave={() => toggleDropdown("water")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"  
                    >
                      Water
                    </span>
                    {dropdownOpen["water"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/waterDelivery" className="hover:text-blue-500 block py-1">
                            Water Delivery
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/sewerCollection" className="hover:text-blue-500 block py-1">
                          Sewer Collection
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/stormwaterConveyance" className="hover:text-blue-500 block py-1">
                          Stormwater Conveyance
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("electric")}
                      onMouseLeave={() => toggleDropdown("electric")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"
                    >
                      Electric
                    </span>
                    {dropdownOpen["electric"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/distribution" className="hover:text-blue-500 block py-1">
                          Distribution
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/electricTransmission" className="hover:text-blue-500 block py-1">
                          Transmission
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/generation" className="hover:text-blue-500 block py-1">
                          Generation
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("gas")}
                      onMouseLeave={() => toggleDropdown("gas")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"
                    >
                      Gas
                    </span>
                    {dropdownOpen["gas"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/distribution" className="hover:text-blue-500 block py-1">
                          Distribution
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/gasTransmissionAndGathering" className="hover:text-blue-500 block py-1">
                          Transmission And Gathering
                          </Link>
                        </li>
                        {/* <li  className='mb-2 border-b border-gray-500'>
                          <Link to="/gasTransmissionAndGathering" className="hover:text-blue-500 block py-1">
                          Gathering
                          </Link>
                        </li> */}
                      </ul>
                    )}
                  </li>

                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("defence")}
                      onMouseLeave={() => toggleDropdown("defence")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"
                    >
                      Defence
                    </span>
                    {dropdownOpen["defence"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/commandAndControl" className="hover:text-blue-500 block py-1">
                          Command and Control
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/intelligence" className="hover:text-blue-500 block py-1">
                          Intelligence
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/operationalReadiness" className="hover:text-blue-500 block py-1">
                          Operational Readiness
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("telecommunications")}
                      onMouseLeave={() => toggleDropdown("telecommunications")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"
                    >
                      Telecommunications
                    </span>
                    {dropdownOpen["telecommunications"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/wireless" className="hover:text-blue-500 block py-1">
                          Wireless
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/wirelineAndCable" className="hover:text-blue-500 block py-1">
                          Wireline And Cable
                          </Link>
                        </li>
                        {/* <li className='mb-2 border-b border-gray-500'>
                          <Link to="/cable" className="hover:text-blue-500 block py-1">
                          Cable
                          </Link>
                        </li> */}
                      </ul>
                    )}
                  </li>

                  <li className="relative group mb-4"
                      onMouseEnter={() => toggleDropdown("parks & gardens")}
                      onMouseLeave={() => toggleDropdown("parks & gardens")}>
                    <span
                      className="hover:text-blue-500 cursor-pointer mb-2 border-b border-gray-500 py-1"                    
                    >
                      Parks & Gardens
                    </span>
                    {dropdownOpen["parks & gardens"] && (
                      <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg p-4 rounded-md text-gray-700">
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/collections" className="hover:text-blue-500 block py-1">
                          Collections
                          </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-500">
                          <Link to="/educationAndInterpretation" className="hover:text-blue-500 block py-1">
                          Education and Interpretation
                          </Link>
                        </li>
                        <li className='mb-2 border-b border-gray-500'>
                          <Link to="/facilities" className="hover:text-blue-500 block py-1">
                          Facilities
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                </ul>
              )}
            </li>











           {/* Our Services Dropdown */}
           <li
             className="relative"
             onMouseEnter={() => toggleDropdown("services")}
             onMouseLeave={() => toggleDropdown("services")}
           >
             <span className="hover:text-blue-500 cursor-pointer transition-colors">
               Our Services
             </span>
             {dropdownOpen["services"] && (
               <ul className="absolute w-[250px] left-0 top-full bg-white shadow-lg p-4 rounded-md text-gray-700">
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/geoSpatial" className="hover:text-blue-500 block py-1">
                     Geospatial Projects
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/itConsult" className="hover:text-blue-500 block py-1">
                     IT Consultancy
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/gps" className="hover:text-blue-500 block py-1">
                     GPS & DGPS
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/appDev" className="hover:text-blue-500 block py-1">
                     Mobile App Developement
                   </Link>
                 </li>
                 <li className="mb-2 border-b border-gray-500">
                   <Link to="/webDev" className="hover:text-blue-500 block py-1">
                     Website Developement
                   </Link>
                 </li>
                 <li>
                   <Link to="/vehicleTrack" className="hover:text-blue-500 block">
                     Vehicle Tracking Solutions
                   </Link>
                 </li>
               </ul>
             )}
           </li>
           <li>
             <Link to="/client" className="hover:text-blue-500 transition-colors">
               Clients
             </Link>
           </li>
           <li>
             <Link to="/portfolio" className="hover:text-blue-500 transition-colors">
               Portfolio
             </Link>
           </li>
           <li>
             <Link to="/career" className="hover:text-blue-500 transition-colors">
               Career
             </Link>
           </li>
           <li>
             <Link to="/events" className="hover:text-blue-500 transition-colors">
               Events
             </Link>
           </li>
           <li>
             <Link to="/contact" className="hover:text-blue-500 transition-colors">
               Contact
             </Link>
           </li>
         </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-lime-400 shadow-lg mr-2 pr-20 p-4 rounded-lg absolute right-0 top-16 z-10"
        >
          <ul className="text-gray-700 text-lg font-semibold">
            <li className="mb-3">
              <Link to="/" className="block hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>


            <li>
              <button
                onClick={() => toggleMobileDropdown('about')}
                className="flex py-2 justify-between items-center w-full text-left"
              >
                About Us
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-2 transition-transform ${
                    mobileDropdownOpen['about'] ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileDropdownOpen['about'] && (
                <ul className="pl-4 mt-2 text-gray-600">
                  <li>
                    <Link to="/missionAndVision" className="hover:text-blue-500 block">
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link to="/partnerDropDown" className="hover:text-blue-500 block">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourCapabilities" className="hover:text-blue-500 block">
                      Our Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link to="/whyArc" className="hover:text-blue-500 block">
                      Why ESRI ARCGIS Software?
                    </Link>
                  </li>
                  <li>
                    <Link to="/awards" className="hover:text-blue-500 block">
                      Awards And Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link to="/associatedMember" className="hover:text-blue-500 block">
                      Associated Members
                    </Link>
                  </li>
                </ul>
              )}
            </li>


            {/* <li>
              <button
                onClick={() => toggleMobileDropdown('products')}
                className="flex py-2 justify-between items-center w-full text-left"
              >
                Products
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-2 transition-transform ${
                    mobileDropdownOpen['products'] ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileDropdownOpen['products'] && (
                <ul className="pl-4 mt-2 text-gray-600">
                  <li>
                    <Link to="/about" className="hover:text-blue-500 block">
                      Software
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners" className="hover:text-blue-500 block">
                      Survey Instruments
                    </Link>
                  </li>
                  <li>
                    <Link to="/capabilities" className="hover:text-blue-500 block">
                      Hardware
                    </Link>
                  </li>
                </ul>
              )}
            </li> */}
            <li>
              <button
                onClick={() => toggleMobileDropdown('products')}
                className="flex py-2 justify-between items-center w-full text-left"
              >
                Products
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-2 transition-transform ${
                    mobileDropdownOpen['products'] ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileDropdownOpen['products'] && (
                <ul className="pl-4 mt-2 text-gray-600">
                  {/* Software */}
                  <li>
                    <button
                      onClick={() => toggleMobileDropdown('software')}
                      className="flex py-2 justify-between items-center w-full text-left"
                    >
                      Software
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`ml-2 transition-transform ${
                          mobileDropdownOpen['software'] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileDropdownOpen['software'] && (
                      <ul className="pl-4 mt-2">
                        <li><Link to="/arcGisDesk" className="hover:text-blue-500 block py-1">ArcGIS Desktop Software Suit</Link></li>
                        <li><Link to="/arcGisOnline" className="hover:text-blue-500 block py-1">ArcGIS Online</Link></li>
                        <li><Link to="/arcGisServer" className="hover:text-blue-500 block py-1">ArcGIS Server Enterprise Software Suit</Link></li>
                        <li><Link to="/arcGisArcFm" className="hover:text-blue-500 block py-1">ArcGIS ArcFM Software</Link></li>
                        <li><Link to="/remoteSensing" className="hover:text-blue-500 block py-1">Remote Sensing Software – ENVI</Link></li>
                        <li><Link to="/microsoft" className="hover:text-blue-500 block py-1">Microsoft</Link></li>
                        <li><Link to="/imajing" className="hover:text-blue-500 block py-1">Imajing</Link></li>
                        <li><Link to="/autoCAD" className="hover:text-blue-500 block py-1">AutoCAD Software</Link></li>
                        <li><Link to="/rockWorks" className="hover:text-blue-500 block py-1">Rock Works Software</Link></li>
                      </ul>
                    )}
                  </li>
                  {/* Survey Instruments */}
                  <li>
                    <button
                      onClick={() => toggleMobileDropdown('survey')}
                      className="flex py-2 justify-between items-center w-full text-left"
                    >
                      Survey Instruments
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`ml-2 transition-transform ${
                          mobileDropdownOpen['survey'] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileDropdownOpen['survey'] && (
                      <ul className="pl-4 mt-2">
                        <li><Link to="/handheldGps" className="hover:text-blue-500 block py-1">Handheld GPS</Link></li>
                        <li><Link to="/differentialGps" className="hover:text-blue-500 block py-1">Differential GPS</Link></li>
                        <li><Link to="/totalStation" className="hover:text-blue-500 block py-1">Total Station</Link></li>
                        <li><Link to="/autoLevel" className="hover:text-blue-500 block py-1">Auto Level</Link></li>
                        <li><Link to="/autoWeatherStation" className="hover:text-blue-500 block py-1">Automatic Weather Station</Link></li>
                        <li><Link to="/laserInstrument" className="hover:text-blue-500 block py-1">Laser Instrument</Link></li>
                        <li><Link to="/currentWaterMeter" className="hover:text-blue-500 block py-1">Current Water Meter</Link></li>
                        <li><Link to="/waterLevelMeter" className="hover:text-blue-500 block py-1">Water Level Meter</Link></li>
                      </ul>
                    )}
                  </li>
                  {/* Hardware */}
                  <li>
                    <button
                      onClick={() => toggleMobileDropdown('hardware')}
                      className="flex py-2 justify-between items-center w-full text-left"
                    >
                      Hardware
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`ml-2 transition-transform ${
                          mobileDropdownOpen['hardware'] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileDropdownOpen['hardware'] && (
                      <ul className="pl-4 mt-2">
                        <li><Link to="/desktop" className="hover:text-blue-500 block py-1">Desktop Computer</Link></li>
                        <li><Link to="/laptop" className="hover:text-blue-500 block py-1">Laptop</Link></li>
                        <li><Link to="/rackServer" className="hover:text-blue-500 block py-1">Rack Server</Link></li>
                        <li><Link to="/bladeServer" className="hover:text-blue-500 block py-1">Blade Server</Link></li>
                        <li><Link to="/ups" className="hover:text-blue-500 block py-1">UPS</Link></li>
                        <li><Link to="/vehicleTrack" className="hover:text-blue-500 block py-1">Vehicle Tracking System</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>






            <li>
              <button
              onClick={() => toggleMobileDropdown("industries")}
              className="flex py-2 justify-between items-center w-full text-left"
              >
              Industries
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transition-transform ${
                  mobileDropdownOpen["industries"] ? "rotate-180" : ""
                }`}
              />
              </button>
              {mobileDropdownOpen["industries"] && (
              <ul className="pl-4 text-gray-600">
                {/* Local Government */}
                <li>
                  <button
                    onClick={() => toggleMobileDropdown("local-government")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    Local Government
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["local-government"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["local-government"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/landRecords" className="hover:text-blue-500 block">
                        Land Records
                        </Link>
                      </li>
                      <li>
                        <Link to="/waterUtilities" className="hover:text-blue-500 block">
                        Water Utilities
                        </Link>
                      </li>
                      <li>
                        <Link to="/publicWorks" className="hover:text-blue-500 block">
                        Public Works
                        </Link>
                      </li>
                      <li>
                        <Link to="/fireService" className="hover:text-blue-500 block">
                        Fire Service
                        </Link>
                      </li>
                      <li>
                        <Link to="/emergencyManagement" className="hover:text-blue-500 block">
                        Emergency Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/lawEnforcemen" className="hover:text-blue-500 block">
                        Law Enforcement
                        </Link>
                      </li>
                      <li>
                        <Link to="/planningAndDevelopment" className="hover:text-blue-500 block">
                        Planning and Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/elections" className="hover:text-blue-500 block">
                        Elections
                        </Link>
                      </li>
                      <li>
                        <Link to="/entireOrganization" className="hover:text-blue-500 block">
                        Your Entire Organization
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* State Government */}
                <li>
                  <button
                    onClick={() => toggleMobileDropdown("state-government")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    State Government
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["state-government"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["state-government"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/fishAndWildlife" className="hover:text-blue-500 block">
                        Fish and Wildlife
                        </Link>
                      </li>
                      <li>
                        <Link to="/environmentAndNaturalResources" className="hover:text-blue-500 block">
                        Environment and Natural Resources
                        </Link>
                      </li>
                      <li>
                        <Link to="/transportation" className="hover:text-blue-500 block">
                        Transportation
                        </Link>
                      </li>
                      <li>
                        <Link to="/economicDevelopment" className="hover:text-blue-500 block">
                        Economic Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/emergencyManagement" className="hover:text-blue-500 block">
                        Emergency Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/health" className="hover:text-blue-500 block">
                        Health
                        </Link>
                      </li>
                      <li>
                        <Link to="/secretaryOfState" className="hover:text-blue-500 block">
                        Secretary of State
                        </Link>
                      </li>
                      <li>
                        <Link to="/yourCollectiveOrganization" className="hover:text-blue-500 block">
                        Your Collective Organization
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Emergency Management */}
                <li>
                  <button
                    onClick={() => toggleMobileDropdown("emergency")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    Emergency Management
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["emergency"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["emergency"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/preparedness" className="hover:text-blue-500 block">
                        Preparedness
                        </Link>
                      </li>
                      <li>
                        <Link to="/response" className="hover:text-blue-500 block">
                        Response
                        </Link>
                      </li>
                      <li>
                        <Link to="/recovery" className="hover:text-blue-500 block">
                        Recovery
                        </Link>
                      </li>
                      <li>
                        <Link to="/mitigation" className="hover:text-blue-500 block">
                        Mitigation
                        </Link>
                      </li>
                      <li>
                        <Link to="/yourEmergencyManagementOrganization" className="hover:text-blue-500 block">
                        Your Emergency Management Organization
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>


                <li>
                  <button
                    onClick={() => toggleMobileDropdown("water")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    Water
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["water"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["water"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/waterDelivery" className="hover:text-blue-500 block">
                        Water Delivery
                        </Link>
                      </li>
                      <li>
                        <Link to="/sewerCollection" className="hover:text-blue-500 block">
                        Sewer Collection
                        </Link>
                      </li>
                      <li>
                        <Link to="/stormwaterConveyance" className="hover:text-blue-500 block">
                        Stormwater Conveyance
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    onClick={() => toggleMobileDropdown("electric")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    Electric
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["electric"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["electric"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/distribution" className="hover:text-blue-500 block">
                        Distribution
                        </Link>
                      </li>
                      <li>
                        <Link to="/electricTransmission" className="hover:text-blue-500 block">
                        Transmission
                        </Link>
                      </li>
                      <li>
                        <Link to="/generation" className="hover:text-blue-500 block">
                        Generation
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    onClick={() => toggleMobileDropdown("gas")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    Gas
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["gas"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["gas"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/distribution" className="hover:text-blue-500 block">
                        Distribution
                        </Link>
                      </li>
                      <li>
                        <Link to="/gasTransmissiongasTransmissionAndGathering" className="hover:text-blue-500 block">
                        Transmission And Gathering
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/gasTransmissionAndGathering" className="hover:text-blue-500 block">
                        Gathering
                        </Link>
                      </li> */}
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    onClick={() => toggleMobileDropdown("defence")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    Defence
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["defence"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["defence"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/commandAndControl" className="hover:text-blue-500 block">
                        Command and Control
                        </Link>
                      </li>
                      <li>
                        <Link to="/intelligence" className="hover:text-blue-500 block">
                        Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link to="/operationalReadiness" className="hover:text-blue-500 block">
                        Operational Readiness
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    onClick={() => toggleMobileDropdown("telecommunications")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    Telecommunications
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["telecommunications"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["telecommunications"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/wireless" className="hover:text-blue-500 block">
                        Wireless
                        </Link>
                      </li>
                      <li>
                        <Link to="/wirelineAndCable" className="hover:text-blue-500 block">
                        Wireline And Cable
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/cable" className="hover:text-blue-500 block">
                        Cable
                        </Link>
                      </li> */}
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    onClick={() => toggleMobileDropdown("parks & gardens")}
                    className="flex py-2 justify-between items-center w-full text-left"
                  >
                    Parks & Gardens
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${
                        mobileDropdownOpen["parks & gardens"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen["parks & gardens"] && (
                    <ul className="pl-4 mt-2 text-gray-600">
                      <li>
                        <Link to="/collections" className="hover:text-blue-500 block">
                        Collections
                        </Link>
                      </li>
                      <li>
                        <Link to="/educationAndInterpretation" className="hover:text-blue-500 block">
                        Education and Interpretation
                        </Link>
                      </li>
                      <li>
                        <Link to="/facilities" className="hover:text-blue-500 block">
                        Facilities
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
              )}
            </li>



            <li>
              <button
                onClick={() => toggleMobileDropdown('services')}
                className="flex py-2 justify-between items-center w-full text-left"
              >
                Our Services
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-2 transition-transform ${
                    mobileDropdownOpen['services'] ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileDropdownOpen['services'] && (
                <ul className="pl-4 mt-2 text-gray-600">
                  <li>
                    <Link to="/geoSpatial" className="hover:text-blue-500 block">
                      Geospatial Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/itConsult" className="hover:text-blue-500 block">
                      IT Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link to="/gps" className="hover:text-blue-500 block">
                      GPS & DGPS
                    </Link>
                  </li>
                  <li>
                    <Link to="/appDev" className="hover:text-blue-500 block">
                      Mobile App Developement
                    </Link>
                  </li>
                  <li>
                    <Link to="/webDev" className="hover:text-blue-500 block">
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/vehicleTrack" className="hover:text-blue-500 block">
                      Vehicle Tracking Solutions
                    </Link>
                  </li>
                </ul>
              )}
            </li>


            <li className="mb-3">
              <Link to="/client" className="block hover:text-blue-500 transition-colors">Clients</Link>
            </li>
            <li className="mb-3">
              <Link to="/portfolio" className="block hover:text-blue-500 transition-colors">Portfolio</Link>
            </li>
            <li className="mb-3">
              <Link to="/career" className="block hover:text-blue-500 transition-colors">Career</Link>
            </li>
            <li className="mb-3">
              <Link to="/portfolio" className="block hover:text-blue-500 transition-colors">Events</Link>
            </li>
            <li className="mb-3">
              <Link to="/contact" className="block hover:text-blue-500 transition-colors">Contact</Link>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
