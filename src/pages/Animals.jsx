import React from "react";
import Navbar from "../compoents/Navbar";

function Animals() {
  return (
    <div className="bg-[url(https://wallpapercat.com/w/full/5/1/9/20157-3840x2160-desktop-4k-great-barrier-reef-wallpaper-image.jpg)] h-screen relative bg-cover flex lg:items-center justify-center">
      <div className="text-black  flex flex-col items-center justify-center   w-5/6 h-2/4  lg:w-1/2 bg-white/40 backdrop-blur-sm border rounded-2xl mt-10 sm:mt-5 lg:mt-0">
        <h1 className="font-bold">Place name</h1>
        <p className="w-8/10 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim
          quisquam repellat eius, aperiam voluptatibus. Incidunt veritatis ipsam
          labore. Nam aut numquam molestias nostrum esse incidunt illo
          reiciendis! Ratione, perspiciatis!
        </p>
      </div>
    </div>
  );
}



export default Animals;
