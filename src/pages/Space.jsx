import React from "react";

function Space() {
  return (
    <div className="bg-[url(https://images.pexels.com/photos/2706654/pexels-photo-2706654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] h-screen relative bg-cover flex lg:items-center justify-center">
      <div className="text-black  flex flex-col items-center justify-center   w-5/6 h-2/4  lg:w-1/2 bg-white/40 backdrop-blur-sm border rounded-2xl mt-10 sm:mt-5 lg:mt-0">
        <h1 className="font-bold">Space</h1>
        <p className="w-8/10 py-3">
          Outer space, or simply space, is the expanse that exists beyond
          Earth's atmosphere and between celestial bodies. It contains
          ultra-low levels of particle densities, constituting a near-perfect
          vacuum of predominantly hydrogen and helium plasma, permeated by
          electromagnetic radiation, cosmic rays, neutrinos, magnetic fields and
          dust.
        </p>
      </div>
    </div>
  );
}

export default Space;
