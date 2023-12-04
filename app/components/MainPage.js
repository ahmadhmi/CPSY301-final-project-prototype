import React from "react";
import Week from "./Week";

const MainPage = ({ onGradeLab }) => {
  return (
    <div className="bg-green-600 w-full h-screen">
      <Week onGradeLab={onGradeLab} />
    </div>
  );
};

export default MainPage;
