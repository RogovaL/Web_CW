import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)]">
      <div className="relative w-16 h-16">
        {/* Outer circle */}
        <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-gray-100 rounded-full"></div>
        {/* Spinning circle */}
        <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-orange-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Spinner;
