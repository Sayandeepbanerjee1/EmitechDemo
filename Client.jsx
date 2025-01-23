import React, { useEffect, useState } from "react";
import Partners from "./Partner";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {

    const clientLogos = [
      { id: 1, name: "AU", logo: "/clients/AU.png" },
      { id: 2, name: "BCKV", logo: "/clients/BCKV.png" },
      { id: 3, name: "BSNL", logo: "/clients/BSNL.png" },
      { id: 4, name: "HC", logo: "/clients/HC.jpeg" },
      { id: 5, name: "ICAR", logo: "/clients/ICAR.png" },
      { id: 6, name: "IIM", logo: "/clients/IIM.png" },
      { id: 7, name: "IPHA", logo: "/clients/IPHA.png" },
      { id: 8, name: "ISI", logo: "/clients/ISI.png" },
      { id: 9, name: "JU", logo: "/clients/JU.png" },
      { id: 10, name: "Madrasa", logo: "/clients/Madrasa.png" },
      { id: 11, name: "NERIST", logo: "/clients/NERIST.png" },
      { id: 12, name: "PIMERC", logo: "/clients/PIMERC.png" },
      { id: 13, name: "c1", logo: "/clients/c1.png" },
      { id: 14, name: "c2", logo: "/clients/c2.png" },
      { id: 15, name: "c3", logo: "/clients/c3.png" },
      { id: 16, name: "VB", logo: "/clients/VB.png" },
      { id: 17, name: "vu", logo: "/clients/vu.jpg" },
      { id: 18, name: "WAC", logo: "/clients/WAC.jpeg" },
      { id: 19, name: "WBAF", logo: "/clients/WBAF.png" },
      { id: 20, name: "WBBSE", logo: "/clients/WBBSE.jpg" },
      { id: 21, name: "WBUT", logo: "/clients/WBUT.png" },
      { id: 22, name: "MTGS", logo: "/clients/MTGS.jpg" },
    ];

    setClients(clientLogos);
  }, []);

  return (
    <>
    <div className="bg-green-50 py-12 mt-5 pt-20">
      <h2 className="text-2xl font-bold text-center mb-8">Our Clients</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16"
            />
          </div>
        ))}
      </div>
    </div>
    <Partners />
    </>
  );
};

export default Clients;
