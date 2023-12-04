import React from "react";

const LabItem = ({ labName, onDelete, onGradeLab }) => {
  return (
    <li className="w-full border border-white p-2" key={labName}>
      <div className="flex flex-row items-center">
        <div className="w-5/6">{labName}</div>
        <div className="w-1/6 flex flex-row space-x-4">
          <button
            className="bg-orange-800 p-2 rounded-md"
            onClick={() => onDelete(labName)}
          >
            Delete
          </button>
          <button
            className="bg-lime-700 p-2 rounded-md"
            onClick={() => onGradeLab(labName)}
          >
            Grade Lab
          </button>
        </div>
      </div>
    </li>
  );
};

export default LabItem;
