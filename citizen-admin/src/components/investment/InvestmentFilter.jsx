import { returnTypes } from "@/constants/returnType";
import React from "react";
import { FiRefreshCw } from "react-icons/fi"; // Import the refresh icon

const InvestmentFilter = ({
  projectId,
  setProjectId,
  projects,
  setProfitShareType,
  profitShareType,
  setStatus,
  status,
  handleRefresh,
}) => {
  return (
    <div className="mb-3 flex flex-col items-start gap-4 lg:flex-row lg:items-center">
      <div className="flex flex-col">
        <label htmlFor="project" className="mb-2 text-lg font-bold">
          Select a project
        </label>
        <select
          value={projectId}
          id="project"
          className="border-gray-300 w-full rounded border p-2 lg:w-72"
          onChange={(e) => setProjectId(e.target.value)}
        >
          <option value="" disabled>
            Select a project
          </option>
          {projects?.map((project) => (
            <option key={project?._id} value={project?._id}>
              {project?.projectTitle}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="status" className="mb-2 text-lg font-bold">
          Select a Status
        </label>
        <select
          value={status}
          id="status"
          className="border-gray-300 w-full rounded border p-2 lg:w-72"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="" disabled>
            Select a Status
          </option>

          <option>Received</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Canceled</option>
        </select>
      </div>

      {/* Return Type */}
      <div className="flex flex-col">
        <label htmlFor="return-type" className="mb-2 text-lg font-bold">
          Select return type
        </label>
        <div className="mt-1 flex flex-col gap-3 lg:flex-row lg:gap-6">
          {returnTypes.map((type, index) => (
            <div className="flex items-center gap-3" key={index}>
              <input
                id={type}
                type="radio"
                value={type}
                name="return-type"
                className="form-radio text-blue-500"
                onChange={() => setProfitShareType(type)}
                checked={profitShareType === type} // Handle checked state
              />
              <label htmlFor={type} className="ml-1">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Refresh Button */}
      <div className="mt-6 lg:mt-0 lg:self-end">
        <button
          className="flex items-center text-base flex-end gap-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleRefresh}
        >
          <FiRefreshCw className="text-base" />
          Refresh
        </button>
      </div>
    </div>
  );
};

export default InvestmentFilter;
