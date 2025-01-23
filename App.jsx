import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ServicesSection from './components/Services.jsx';
import About from './components/About/About.jsx';
// import Portfolio from './components/Portfolio.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Client from './components/Client.jsx';
import AssociatedMember from './components/Nav/AboutUs/AssociatedMember.jsx';
import MissionAndVision from './components/Nav/AboutUs/MissionAndVision.jsx';
import PartnerDropDown from './components/Nav/AboutUs/PartnerDropDown.jsx';
import OurCapabilities from './components/Nav/AboutUs/OurCapabilities.jsx';
import WhyArc from './components/Nav/AboutUs/WhyArc.jsx';
import Awards from './components/Nav/AboutUs/Awards.jsx';
import GeoSpatial from './components/Nav/OurServices/GeoSpatial.jsx';
import Gps from './components/Nav/OurServices/Gps.jsx';
import AppDev from './components/Nav/OurServices/AppDev.jsx';
import WebDev from './components/Nav/OurServices/WebDev.jsx';
import VehicleTrack from './components/Nav/OurServices/VehicleTrack.jsx';
import ItConsult from './components/Nav/OurServices/ItConsult.jsx';
import Career from './components/Nav/Career.jsx';
import ArcGisDesk from './components/Nav/Products/Software/ArcGisDesk.jsx';
import ArcGisOnline from './components/Nav/Products/Software/ArcGisOnline.jsx';
import ArcGisServer from './components/Nav/Products/Software/ArcGisServer.jsx';
import ArcGisArcFm from './components/Nav/Products/Software/ArcGisArcFm.jsx';
import RemoteSensing from './components/Nav/Products/Software/RemoteSensing.jsx';
import Microsoft from './components/Nav/Products/Software/Microsoft.jsx';
import Imajing from './components/Nav/Products/Software/Imajing.jsx';
import AutoCAD from './components/Nav/Products/Software/AutoCAD.jsx';
import RockWorks from './components/Nav/Products/Software/RockWorks.jsx';
import HandheldGps from './components/Nav/Products/Survey/HandheldGps.jsx';
import DifferentialGps from './components/Nav/Products/Survey/DifferentialGps.jsx';
import TotalStation from './components/Nav/Products/Survey/TotalStation.jsx';
import AutoLevel from './components/Nav/Products/Survey/AutoLevel.jsx';
import AutoWeatherStation from './components/Nav/Products/Survey/AutoWeatherStation.jsx';
import LaserInstrument from './components/Nav/Products/Survey/LaserInstrument.jsx';
import CurrentWaterMeter from './components/Nav/Products/Survey/CurrentWaterMeter.jsx';
import WaterLevelMeter from './components/Nav/Products/Survey/WaterLevelMeter.jsx';
import Desktop from './components/Nav/Products/Hardware/Desktop.jsx';
import Laptop from './components/Nav/Products/Hardware/Laptop.jsx';
import RackServer from './components/Nav/Products/Hardware/RackServer.jsx';
import BladeServer from './components/Nav/Products/Hardware/BladeServer.jsx';
import Ups from './components/Nav/Products/Hardware/Ups.jsx';

import LandRecords from './components/Nav/Industries/LocalGovt/LandRecords.jsx';
import WaterUtilities from './components/Nav/Industries/LocalGovt/WaterUtilities.jsx';
import PublicWorks from './components/Nav/Industries/LocalGovt/PublicWorks.jsx';
import FireService from './components/Nav/Industries/LocalGovt/FireService.jsx';
import EmergencyManagement from './components/Nav/Industries/LocalGovt/EmergencyManagement.jsx';
import LawEnforcement from './components/Nav/Industries/LocalGovt/LawEnforcement.jsx';
import PlanningAndDevelopment from './components/Nav/Industries/LocalGovt/PlanningAndDevelopment.jsx';
import Elections from './components/Nav/Industries/LocalGovt/Elections.jsx';
import EntireOrganization from './components/Nav/Industries/LocalGovt/EntireOrganization.jsx';
import FishAndWildlife from './components/Nav/Industries/StateGovt/FishAndWildlife.jsx';
import EnvironmentAndNaturalResources from './components/Nav/Industries/StateGovt/EnvironmentAndNaturalResources.jsx';
import Transportation from './components/Nav/Industries/StateGovt/Transportation.jsx';
import EconomicDevelopment from './components/Nav/Industries/StateGovt/EconomicDevelopment.jsx';
import Health from './components/Nav/Industries/StateGovt/Health.jsx';
import SecretaryOfState from './components/Nav/Industries/StateGovt/SecretaryOfState'




import YourCollectiveOrganization from './components/Nav/Industries/StateGovt/YourCollectiveOrganization.jsx';





import Preparedness from './components/Nav/Industries/EmergencyManagement/Preparedness.jsx';
import Response from './components/Nav/Industries/EmergencyManagement/Response.jsx';
import Recovery from './components/Nav/Industries/EmergencyManagement/Recovery.jsx';
import Mitigation from './components/Nav/Industries/EmergencyManagement/Mitigation.jsx';
import YourEmergencyManagementOrganization from './components/Nav/Industries/EmergencyManagement/YourEmergencyManagementOrganization.jsx';
import WaterDelivery from './components/Nav/Industries/Water/WaterDelivery.jsx';
import SewerCollection from './components/Nav/Industries/Water/SewerCollection.jsx';
import StormwaterConveyance from './components/Nav/Industries/Water/StormwaterConveyance.jsx';
import Distribution from './components/Nav/Industries/Electric/Distribution.jsx';
import Transmission from './components/Nav/Industries/Electric/ElectricTransmission.jsx';
import Generation from './components/Nav/Industries/Electric/Generation.jsx';
import GasTransmissionAndGathering from './components/Nav/Industries/Gas/GasTransmissionAndGathering.jsx';
import CommandAndControl from './components/Nav/Industries/Defence/CommandAndControl.jsx';
import Intelligence from './components/Nav/Industries/Defence/Intelligence.jsx';
import OperationalReadiness from './components/Nav/Industries/Defence/OperationalReadiness.jsx';
import Wireless from './components/Nav/Industries/Telecommunications/Wireless.jsx';
import WirelineAndCable from './components/Nav/Industries/Telecommunications/WirelineAndCable.jsx';
import Collections from './components/Nav/Industries/Parks&Gardens/Collections.jsx';
import EducationAndInterpretation from './components/Nav/Industries/Parks&Gardens/EducationAndInterpretation.jsx';
import Facilities from './components/Nav/Industries/Parks&Gardens/Facilities.jsx';






function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route exact path ="/" element = {<Home />} />
          <Route path ="/about" element = {<About />} />
          <Route path ="/services" element = {<ServicesSection />} />

          {/* <Route path ="/portfolio" element = {<Portfolio />} /> */}

          <Route path ="/client" element = {<Client />} />
          <Route path ="/contact" element = {<Contact />} />
          <Route path = "/AssociatedMember" element = {<AssociatedMember />} />
          <Route path='/MissionAndVision' element={<MissionAndVision />} />
          <Route path='/PartnerDropDown' element={<PartnerDropDown />} />
          <Route path='/OurCapabilities' element={<OurCapabilities />} />
          <Route path='/WhyArc' element={<WhyArc />} />
          <Route path='/Awards' element={<Awards />} />
          <Route path ="/GeoSpatial" element = {<GeoSpatial />} />
          <Route path ="/Gps" element = {<Gps />} />
          <Route path ="/AppDev" element = {<AppDev />} />
          <Route path ="/WebDev" element = {<WebDev />} />
          <Route path ="/VehicleTrack" element = {<VehicleTrack />} />
          <Route path ="/ItConsult" element = {<ItConsult />} />
          <Route path ="/Career" element = {<Career />} />
          <Route path ="/ArcGisDesk" element = {<ArcGisDesk />} />
          <Route path ="/ArcGisOnline" element = {<ArcGisOnline />} />
          <Route path ="/ArcGisServer" element = {<ArcGisServer />} />
          <Route path ="/ArcGisArcFm" element = {<ArcGisArcFm />} />
          <Route path ="/RemoteSensing" element = {<RemoteSensing />} />
          <Route path ="/Microsoft" element = {<Microsoft />} />
          <Route path ="/Imajing" element = {<Imajing />} />
          <Route path ="/AutoCAD" element = {<AutoCAD />} />
          <Route path ="/RockWorks" element = {<RockWorks />} />
          <Route path ="/HandheldGps" element = {<HandheldGps />} />
          <Route path ="/DifferentialGps" element = {<DifferentialGps />} />
          <Route path ="/TotalStation" element = {<TotalStation />} />
          <Route path ="/AutoLevel" element = {<AutoLevel />} />
          <Route path ="/AutoWeatherStation" element = {<AutoWeatherStation />} />
          <Route path ="/LaserInstrument" element = {<LaserInstrument />} />
          <Route path ="/CurrentWaterMeter" element = {<CurrentWaterMeter />} />
          <Route path ="/WaterLevelMeter" element = {<WaterLevelMeter />} />
          <Route path ="/Desktop" element = {<Desktop />} />
          <Route path ="/Laptop" element = {<Laptop />} />
          <Route path ="/RackServer" element = {<RackServer />} />
          <Route path ="/BladeServer" element = {<BladeServer />} />
          <Route path ="/Ups" element = {<Ups />} />
          <Route path ="/VehicleTrack" element = {<VehicleTrack />} />
          <Route path ="/LandRecords" element = {<LandRecords />} />
          <Route path ="/WaterUtilities" element = {<WaterUtilities />} />
          <Route path ="/PublicWorks" element = {<PublicWorks />} />
          <Route path ="/FireService" element = {<FireService />} />
          <Route path ="/EmergencyManagement" element = {<EmergencyManagement />} />
          <Route path ="/LawEnforcement" element = {<LawEnforcement />} />
          <Route path ="/PlanningAndDevelopment" element = {<PlanningAndDevelopment />} />
          <Route path ="/Elections" element = {<Elections />} />
          <Route path ="/EntireOrganization" element = {<EntireOrganization />} />
          <Route path ="/FishAndWildlife" element = {<FishAndWildlife />} />
          <Route path ="/EnvironmentAndNaturalResources" element = {<EnvironmentAndNaturalResources />} />
          <Route path ="/Transportation" element = {<Transportation />} />
          <Route path ="/EconomicDevelopment" element = {<EconomicDevelopment />} />
          <Route path ="/Health" element = {<Health />} />
          <Route path ="/SecretaryOfState" element = {<SecretaryOfState />} />
          <Route path ="/YourCollectiveOrganization" element = {<YourCollectiveOrganization />} />
          <Route path='/Preparedness' element = {<Preparedness />} />
          <Route path='/Response' element = {<Response />} />
          <Route path='/Recovery' element = {<Recovery />} />
          <Route path='/Mitigation' element = {<Mitigation />} />
          <Route path='/YourEmergencyManagementOrganization' element = {<YourEmergencyManagementOrganization />} />
          <Route path='/WaterDelivery' element = {<WaterDelivery />} />
          <Route path='/SewerCollection' element = {<SewerCollection />} />
          <Route path='/StormwaterConveyance' element = {<StormwaterConveyance />} />

          <Route path='/Distribution' element = {<Distribution />} />
          <Route path='/ElectricTransmission' element = {<Transmission />} />
          <Route path='/Generation' element = {<Generation />} />
          <Route path='/GasTransmissionAndGathering' element = {<GasTransmissionAndGathering />} />
          <Route path='/CommandAndControl' element = {<CommandAndControl />} />
          <Route path='/Intelligence' element = {<Intelligence />} />
          <Route path='/OperationalReadiness' element = {<OperationalReadiness />} />
          <Route path='/Wireless' element = {<Wireless />} />
          <Route path='/WirelineAndCable' element = {<WirelineAndCable />} />
          <Route path='/Collections' element = {<Collections />} />
          <Route path='/EducationAndInterpretation' element = {<EducationAndInterpretation />} />
          <Route path='/Facilities' element = {<Facilities />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;