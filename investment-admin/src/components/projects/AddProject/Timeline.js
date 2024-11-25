import { useRef } from "react";

const Timeline = ({
  timeLines,
  setTimelines,
  handleTimeLine,
  handleRemoveTimeLine,
  setInvestmentStartDate,
  setInvestmentEndDate,
  setFirstReturnDate,
  handleNextClick,
  investmentStartDate,
  firstReturnDate,
  investmentEndDate,
}) => {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const returnDateRef = useRef(null);

  return (
    <div className="p-4 shadow-12">
      <h4 className="mb-8 text-xl font-semibold">Investment Duration</h4>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Investment Start Date */}
        <div>
          <label className="text-gray-700 mb-2 block font-semibold">
            Investment Start Date
          </label>
          <input
            type="date"
            ref={startDateRef}
            className="border-gray-300 w-full rounded-md border p-2"
            onChange={(e) => setInvestmentStartDate(e.target.value)}
            onClick={() => startDateRef.current?.showPicker()}
            value={investmentStartDate}
            style={{
              borderColor: "#dddddd",
              outlineColor: "#00c196",
              outlineWidth: "2px",
            }}
          />
        </div>

        {/* Investment End Date */}
        <div>
          <label className="text-gray-700 mb-2 block font-semibold">
            Investment End Date
          </label>
          <input
            type="date"
            ref={endDateRef}
            className="border-gray-300 w-full rounded-md border p-2"
            onChange={(e) => setInvestmentEndDate(e.target.value)}
            onClick={() => endDateRef.current?.showPicker()}
            value={investmentEndDate}
            style={{
              borderColor: "#dddddd",
              outlineColor: "#00c196",
              outlineWidth: "2px",
            }}
          />
        </div>

        {/* First Return Date */}
        <div>
          <label className="text-gray-700 mb-2 block font-semibold">
            First Return Date
          </label>
          <input
            type="date"
            ref={returnDateRef}
            className="border-gray-300 w-full rounded-md border p-2"
            onChange={(e) => setFirstReturnDate(e.target.value)}
            onClick={() => returnDateRef.current?.showPicker()}
            value={firstReturnDate}
            style={{
              borderColor: "#dddddd",
              outlineColor: "#00c196",
              outlineWidth: "2px",
            }}
          />
        </div>
      </div>

      {/* Timelines Section */}
      <h4 className="mt-8 text-lg font-semibold">Timelines</h4>
      <hr className="my-4 border-black" />

      {/* Timeline Items */}
      {timeLines.map((option, index) => (
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2" key={index}>
          {/* Date Input */}
          <div>
            <label className="text-gray-700 mb-2 block font-semibold">
              Date
            </label>
            <input
              type="date"
              // ref={timeLineDate}
              className="border-gray-300 w-full rounded-md border p-2"
              placeholder="Select Date"
              value={option.date}
              onChange={(e) => {
                const updatedOptions = [...timeLines];
                updatedOptions[index].date = e.target.value;
                setTimelines(updatedOptions);
              }}
              // onClick={() => timeLineDate.current?.showPicker()}
              style={{
                borderColor: "#dddddd",
                outlineColor: "#00c196",
                outlineWidth: "2px",
              }}
            />
          </div>

          {/* Title Input */}
          <div>
            <label className="text-gray-700 mb-2 block font-semibold">
              Title
            </label>
            <input
              type="text"
              className="border-gray-300 w-full rounded-md border p-2"
              placeholder="Timeline Title"
              value={option.title}
              onChange={(e) => {
                const updatedOptions = [...timeLines];
                updatedOptions[index].title = e.target.value;
                setTimelines(updatedOptions);
              }}
              style={{
                borderColor: "#dddddd",
                outlineColor: "#00c196",
                outlineWidth: "2px",
              }}
            />
          </div>

          {/* Details Input (Spanning Both Columns on Larger Screens) */}
          <div className="col-span-1 md:col-span-2">
            <label className="text-gray-700 mb-2 block font-semibold">
              Details
            </label>
            <input
              type="text"
              className="border-gray-300 w-full rounded-md border p-2"
              placeholder="Timeline Details"
              value={option.details}
              onChange={(e) => {
                const updatedOptions = [...timeLines];
                updatedOptions[index].details = e.target.value;
                setTimelines(updatedOptions);
              }}
              style={{
                borderColor: "#dddddd",
                outlineColor: "#00c196",
                outlineWidth: "2px",
              }}
            />
          </div>
        </div>
      ))}

      {/* Action Buttons */}
      <div className="mt-4 flex gap-3">
        <p
          onClick={handleTimeLine}
          className="cursor-pointer rounded-md bg-teal-700 px-4 py-2 text-base text-white"
        >
          Add New Date
        </p>

        <p
          onClick={handleRemoveTimeLine}
          className="cursor-pointer rounded-md bg-rose-600 px-4 py-2 text-base text-white"
        >
          Delete
        </p>
      </div>
      <div className="flex justify-end" onClick={handleNextClick}>
        <p
          style={{
            backgroundColor: "#006666",
            color: "white",
            padding: "10px 20px",
            marginRight: "30px",
            borderRadius: "5px",
            zIndex: 10,
            cursor: "pointer",
          }}
        >
          Next
        </p>
      </div>
    </div>
  );
};

export default Timeline;
