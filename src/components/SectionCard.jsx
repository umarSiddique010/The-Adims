import React from 'react';

function SectionCard({ title, imgSrc, description }) {
  return (
    <div id='products' className="transition-all duration-700 ease-in-out hover:scale-110 hover:cursor-pointer hover:bg-cyan-950 hover:text-white flex justify-center items-center flex-col gap-3 shadow-lg w-80 rounded-lg h-full text-gray-700">
      <img 
        src={imgSrc} 
        className="w-32 h-64" 
        alt={title} 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="">{description}</p>
        <a href="#root" className="btn transition-all duration-700 ease-in-out hover:scale-110 mt-4 bg-cyan-700 text-white hover:bg-gray-500 hover:text-slate-600 ">Coming Soon</a>
      </div>
    </div>
  );
}




export default SectionCard;