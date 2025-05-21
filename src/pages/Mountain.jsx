import React from "react";

function Mountain() {
  return (
    <div className="bg-[url(https://images.pexels.com/photos/9031183/pexels-photo-9031183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] h-screen relative bg-cover flex lg:items-center justify-center">
      <div className="text-black  flex flex-col items-center justify-center   w-5/6 h-2/4  lg:w-1/2 bg-white/40 backdrop-blur-sm border rounded-2xl mt-10 sm:mt-5 lg:mt-0">
        <h1 className="font-bold">Mountains</h1>
        <p className="w-8/10 py-3">
          A mountain is an elevated portion of the Earth's crust, generally with
          steep sides that show significant exposed bedrock. Although
          definitions vary, a mountain may differ from a plateau in having a
          limited summit area, and is usually higher than a hill, typically
          rising at least 300 metres (980 ft) above the surrounding land. A few
          mountains are isolated summits, but most occur in mountain ranges.
        </p>
      </div>
    </div>
  );
}

export default Mountain;
