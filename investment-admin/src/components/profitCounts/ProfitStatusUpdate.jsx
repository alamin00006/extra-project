import { getBaseUrl } from "@/helpers/config/envConfig";
import { pictureCloudKey } from "@/utilis/pictureCloudKey";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ProfitStatusUpdate = ({
  showStatusModal,
  setShowStatusModal,
  profitData,
  refetch,
}) => {
  const handleClose = () => setShowStatusModal(false);
  const [status, setStatus] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [files, setFiles] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteForProfit = e.target.noteForProfit.value;
    if (status === profitData?.status) {
      return toast.error(`Sorry Already ${profitData?.status}`);
    }

    const updatedStatus = {
      paymentStatus: status,
      noteForProfit: noteForProfit,
    };

    try {
      const proofOfPhoto = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "alamin");
          const uploadRes = await axios.post(
            `https://api.cloudinary.com/v1_1/${pictureCloudKey}/image/upload`,
            data
          );
          const { secure_url } = uploadRes.data;
          return secure_url;
        })
      );

      const isStatusPaidData = {
        paymentMethod: paymentMethod,
        proofOfPaidPhoto: proofOfPhoto,
        ...updatedStatus,
      };

      const { data } = await axios.patch(
        `${getBaseUrl()}/profit-count/${profitData?._id}`,
        status === "Paid" ? isStatusPaidData : updatedStatus
      );
      toast.success(data?.message);
      refetch();
      setTimeout(() => {
        handleClose();
      }, 500);
    } catch (err) {
      return toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      {showStatusModal && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <h2 className="text-xl font-semibold">Profit Status Update</h2>
            <button
              className="btn btn-circle btn-sm absolute right-2 top-2"
              onClick={handleClose}
            >
              x
            </button>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="status" className="block font-medium mb-2">
                  Select Status
                </label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option>Unpaid</option>
                  <option>Processing</option>
                  <option>Paid</option>
                </select>
              </div>

              {status === "Paid" && (
                <>
                  <div>
                    <label
                      htmlFor="paymentMethod"
                      className="block font-medium mb-2"
                    >
                      Select Payment Method
                    </label>
                    <select
                      id="paymentMethod"
                      className="select select-bordered w-full"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      value={paymentMethod}
                      required
                    >
                      <option value="" disabled>
                        Select Payment Method
                      </option>
                      <option>Cash</option>
                      <option>Bank</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="proofOfPhoto"
                      className="block font-medium mb-2"
                    >
                      Proof Photo
                    </label>
                    <input
                      type="file"
                      id="proofOfPhoto"
                      name="img"
                      onChange={(e) => setFiles(e.target.files)}
                      multiple
                      className="file-input file-input-bordered w-full"
                    />
                  </div>
                </>
              )}

              <div>
                <label
                  htmlFor="noteForProfit"
                  className="block font-medium mb-2"
                >
                  Note (Optional)
                </label>
                <input
                  type="text"
                  id="noteForProfit"
                  name="noteForProfit"
                  placeholder="note"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white btn hover:bg-green-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="modal-backdrop"></div>
        </div>
      )}
    </>
  );
};

export default ProfitStatusUpdate;
