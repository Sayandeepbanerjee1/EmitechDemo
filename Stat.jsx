import React from 'react';

const Stat = () => {
  return (
    <section className="bg-cyan-400 py-2">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around text-white text-center">
        <div>
          <h2 className="text-4xl font-bold">300+</h2>
          <p className="text-lg mt-1.5">Happy Clients</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">3500+</h2>
          <p className="text-lg mt-1.5">Answered Tickets</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">16</h2>
          <p className="text-lg mt-1.5">Pre-made Demos</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">3000+</h2>
          <p className="text-lg mt-1.5">Development Hours</p>
        </div>
      </div>
    </section>
  );
}

export default Stat;
