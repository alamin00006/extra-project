import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

import { months } from "@/utilis/months";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { USER_ROLE } from "@/constants/role";

const ProfitSubmitModal = ({
  showReturnModal,
  setShowReturnModal,
  project,
  profitShareType,
  userData,
}) => {
  const handleCloseModal = () => setShowReturnModal(false);
  const date = new Date();
  // const year = date.getFullYear();

  const [returnType, setReturnType] = useState(profitShareType);
  const [percentageOfProfit, setPercentageOfProfit] = useState(0);
  const [totalProfitCount, setTotalProfitCount] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [payAmount, setPayAmount] = useState(0);
  const [dueProfitAmount, setDueProfitAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    const profitAmount =
      (project?.totalInvestAmount * Number(percentageOfProfit)) / 100;
    setTotalProfitCount(profitAmount);
  }, [project?.totalInvestAmount, percentageOfProfit]);

  useEffect(() => {
    setDueProfitAmount(totalProfitCount - payAmount);
  }, [totalProfitCount, payAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const noteForReturn = e.target.noteForReturn?.value;
    const fromReturnCountDate = e.target.fromReturnCountDate?.value;
    const toReturnCountDate = e.target.toReturnCountDate?.value;

    const returnsData = {
      project: project?._id,
      manageUserId:
        userData?.role === USER_ROLE.COMPANY ? null : userData?.PRManager?._id,
      company: userData?.company?._id ? userData?.company?._id : "",
      percentageOfProfit,
      totalProfitCount,
      returnType: profitShareType,
      returnDate: new Date(),
      returnMonths: selectedMonth,
      fromReturnCountDate: fromReturnCountDate,
      toReturnCountDate: toReturnCountDate,
      returnYear: year,
      noteForReturn,
    };

    try {
      const { data } = await axios.post(`${getBaseUrl()}/return`, returnsData);
      toast.success(data?.message);
      setTimeout(() => {
        handleCloseModal();
      }, 500);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showReturnModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Income Submit</h3>
              <button
                onClick={handleCloseModal}
                className="btn btn-circle btn-sm"
              >
                <AiOutlineClose />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="form-control">
                <label htmlFor="returnType" className="block font-medium mb-2">
                  Return Type
                </label>
                <select
                  id="returnType"
                  value={returnType}
                  onChange={(e) => setReturnType(e.target.value)}
                  className="select select-bordered mt-1 w-full"
                  required
                >
                  <option>{profitShareType}</option>
                </select>
              </div>

              {profitShareType === "Monthly" && (
                <div className="form-control">
                  <label
                    htmlFor="selectedMonth"
                    className="block font-medium mb-2"
                  >
                    Month
                  </label>
                  <select
                    id="selectedMonth"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="select select-bordered mt-1 w-full"
                    required
                  >
                    <option value="" disabled>
                      Select a month
                    </option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {profitShareType !== "Monthly" && (
                <>
                  <div className="form-control">
                    <label
                      htmlFor="fromDate"
                      className="block font-medium mb-2"
                    >
                      From Date
                    </label>
                    <input
                      id="fromDate"
                      type="date"
                      name="fromReturnCountDate"
                      placeholder="Profit Percentage"
                      className="input input-bordered mt-1 w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="toDate" className="block font-medium mb-2">
                      To Date
                    </label>
                    <input
                      id="toDate"
                      type="date"
                      name="toReturnCountDate"
                      className="input input-bordered mt-1 w-full"
                      required
                    />
                  </div>
                </>
              )}

              <div className="form-control">
                <label
                  htmlFor="selectedYear"
                  className="block font-medium mb-2"
                >
                  Year
                </label>
                <select
                  id="selectedYear"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="select select-bordered mt-1 w-full"
                  required
                >
                  <option value="" disabled>
                    Select a Year
                  </option>

                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                </select>
              </div>

              <div className="form-control">
                <label
                  htmlFor="percentageOfProfit"
                  className="block font-medium mb-2"
                >
                  Profit Ratio
                  {/* {project?.monthlyReturnValue}% */}
                </label>
                <input
                  id="percentageOfProfit"
                  type="number"
                  value={percentageOfProfit}
                  onChange={(e) => setPercentageOfProfit(e.target.value)}
                  placeholder="Profit Percentage"
                  className="input input-bordered mt-1 w-full"
                  onWheel={(e) => e.target.blur()}
                  required
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="noteForReturn"
                  className="block font-medium mb-2"
                >
                  Note (Optional)
                </label>
                <input
                  id="noteForReturn"
                  type="text"
                  placeholder="Note"
                  className="input input-bordered mt-1 h-16 w-full"
                  name="noteForReturn"
                />
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfitSubmitModal;
