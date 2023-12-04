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
  const studentList = [
    "Ahmad Heshmati",
    "Syed Jawad Raza",
    "Qiaomu Lei",
    "John Dao",
    "Yuta Bokuchi",
  ];
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col items-center">
          <label className=" text-gray-700 text-4xl font-bold self-center ">
            Lab 1
          </label>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Student Name
          </label>
          <select id="name" className=" bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option disabled>Select the student</option>
            {studentList.map((student) => (
              <option value={student}>
                {student}
              </option>
            ))}
          </select>
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
        <div className="mb-6 grid grid-cols-3 gap-2 bg-slate-800 p-7 rounded-lg">
          {gradingArea.map((criterion, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-2  space-x-10 p-5 border rounded-md"
            >
              <label className=" text-white text-lg font-bold mb-2">
                {criterion}
              </label>
              <select
                id={criterion}
                className=" bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="pass" disabled>
                  Select the grade
                </option>
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
