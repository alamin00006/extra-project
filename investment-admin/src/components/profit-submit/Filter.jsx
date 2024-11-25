import { returnTypes } from "@/constants/returnType";

const Filter = ({ projectId, setProjectId, projects, setProfitShareType }) => {
  return (
    <div className="mb-6 flex flex-col items-center gap-4 lg:flex-row">
      <div className="">
        <label htmlFor="project" className="mb-2 block text-lg font-bold">
          Select a Project
        </label>
        <select
          value={projectId}
          id="project"
          className="border-gray-300 w-full rounded-md border p-2 lg:w-80"
          onChange={(e) => setProjectId(e.target.value)}
        >
          <option value="" disabled>
            Select a Project
          </option>
          {projects?.map((project) => (
            <option key={project?._id} value={project?._id}>
              {project?.projectTitle}
            </option>
          ))}
        </select>
      </div>

      <div className="">
        <label htmlFor="return-type" className="mb-2 block text-lg font-bold">
          Select return type
        </label>
        <div className="flex flex-wrap gap-4">
          {returnTypes.map((type, index) => (
            <div className="flex items-center gap-2" key={index}>
              <input
                id={type}
                type="radio"
                value={type}
                name="return-type"
                className="mr-2"
                onChange={() => setProfitShareType(type)}
                defaultChecked={index === 0}
              />
              <label htmlFor={type} className="text-base">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
