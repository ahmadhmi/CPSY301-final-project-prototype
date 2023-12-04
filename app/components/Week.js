"use client";
import React from "react";
import { useState } from "react";
import LabItem from "./LabItem";

const Week = ({onGradeLab, listOfWeeks, onDelete}) => {
  const [selectedWeek, setSelectedWeek] = useState("");
  
  
  return (
    <div className="w-full p-10">
      <ul>
        {listOfWeeks.map((weekObject, index) => (
          <li
            key={index}
            className="text-white text-lg font-bold mb-2"
            onClick={() => setSelectedWeek(weekObject.weekName)}
          >
            {weekObject.weekName}
            {selectedWeek === weekObject.weekName && (
              <ul>
                {weekObject.labs.map((lab) => (
                  <LabItem
                    labName={lab}
                    onDelete={() => onDelete(weekObject.weekName, lab)}
                    onGradeLab={() => onGradeLab(weekObject.weekName, lab)}
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Week;
