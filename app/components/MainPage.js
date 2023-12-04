"use client"
import React from "react";
import Week from "./Week";


const MainPage = ({onGradeLab, listOfWeeks, onDelete}) => {
  return (
    <div className="bg-black w-full">
      <Week onGradeLab={onGradeLab} listOfWeeks={listOfWeeks} onDelete={onDelete} />
    </div>
  );
};

export default MainPage;
