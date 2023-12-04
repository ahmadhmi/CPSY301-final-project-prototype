"use client";
import React from "react";

const Block = ({handleBlockClick, blockName}) => {
  return (
    <div className="flex justify-center items-center bg-slate-700 w-full h-20 text-white text-2xl font-bold border border-white rounded-lg"
        onClick={handleBlockClick}
    >
      {blockName}
    </div>
  );
};

export default Block;
