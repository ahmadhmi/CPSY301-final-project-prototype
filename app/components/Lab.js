import React from "react";

const Lab = () => {
  const gradingArea = [
    "Drug Selected",
    "Patient Profile",
    "Prescriber",
    "Sig",
    "Dispense quantity",
    "Repeats",
    "Days supply",
  ];
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter the student name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="Rx#"
          >
            Rx#
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Rx#"
            type="text"
            placeholder="Enter the Rx#"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="DrugName"
          >
            Drug Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="DrugName"
            type="text"
            placeholder="Enter the Drug Name"
          />
        </div>
        <div className="mb-6 bg-slate-800">
          {gradingArea.map((criterion, index) => (
            <div key={index} className="mb-4 flex-row">
              <label className=" text-gray-700 text-sm font-bold mb-2">
                {criterion}
              </label>
              <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </select>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Lab;
