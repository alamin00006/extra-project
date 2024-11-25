import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

import { getBaseUrl } from "@/helpers/config/envConfig";

const ServiceApplicationModal = ({
  showApplicationForm,
  setShowApplicationForm,
}) => {
  const handleCloseModal = () => setShowApplicationForm(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const noteForReturn = e.target.noteForReturn?.value;
    const fromReturnCountDate = e.target.fromReturnCountDate?.value;
    const toReturnCountDate = e.target.toReturnCountDate?.value;

    const returnsData = {};

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
      {showApplicationForm && (
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
                <label
                  htmlFor="percentageOfProfit"
                  className="block font-medium mb-2"
                >
                  {/* {project?.monthlyReturnValue}% */}
                </label>
                <input
                  id="percentageOfProfit"
                  type="number"
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

export default ServiceApplicationModal;
