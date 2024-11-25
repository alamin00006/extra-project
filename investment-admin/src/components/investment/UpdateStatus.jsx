import { authKey } from "@/constants/storageKey";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { getFromLocalStorage } from "@/utilis/local-storage";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const UpdateStatus = ({ show, setShow, investment, refetch }) => {
  const handleClose = () => setShow(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === investment?.status) {
      return toast.error(`Sorry, Already ${investment?.status}`);
    }

    const updatedStatus = {
      status: status,
      buyTotalShare: investment?.totalBuyShare,
      projectId: investment?.project?._id,
      userId: investment?.userId?._id,
    };

    try {
      // Get the access token
      const accessToken = getFromLocalStorage(authKey);
      // Set the headers
      const headers = {
        Authorization: `${accessToken}`,
        "Content-Type": "application/json",
      };
      await axios.patch(
        `${getBaseUrl()}/investment/${investment?._id}`,
        updatedStatus,
        { headers }
      );
      toast.success("Status updated successfully!");
      refetch();
      setTimeout(() => {
        handleClose();
      }, 500);
    } catch (err) {
      // console.error(err);
      toast.error("An error occurred while updating the status.");
    }
  };

  return (
    <>
      {show && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Update Investment Status</h3>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="form-control">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Received</option>
                  <option>Canceled</option>
                </select>
              </div>

              {/* Conditionally render input fields if needed */}
              {/* {status === "Received" && (
                <div className="mt-4">
                  <label className="label">
                    <span className="label-text">Investment Start Date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered w-full"
                    onChange={(e) => setInvestmentStartDate(e.target.value)}
                  />
                </div>
              )} */}

              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateStatus;
