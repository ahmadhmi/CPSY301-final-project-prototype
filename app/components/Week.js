"use client";
import React from "react";
import { useState } from "react";
import LabItem from "./LabItem";

const Week = ({ onGradeLab }) => {
  const weeks = ["Week-1", "Week-2", "Week-3", "Week-4", "Week-5", "Week-6"];
  const [selectedWeek, setSelectedWeek] = useState("");
  const [labs, setLabs] = useState([
    "Lab-1",
    "Lab-2",
    "Lab-3",
    "Lab-4",
    "Lab-5",
    "Lab-6",
  ]);
  const onDelete = (labName) => {
    setLabs(labs.filter((lab) => lab !== labName));
  };
  return (
    <div className="w-full bg-black p-10">
      <ul>
        {weeks.map((week, index) => (
          <li
            key={index}
            className="text-white text-lg font-bold mb-2"
            onClick={() => setSelectedWeek(week)}
          >
            {week}
            {selectedWeek === week && (
              <ul>
                {labs.map((lab) => (
                  <LabItem
                    labName={lab}
                    onDelete={onDelete}
                    onGradeLab={onGradeLab}
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
