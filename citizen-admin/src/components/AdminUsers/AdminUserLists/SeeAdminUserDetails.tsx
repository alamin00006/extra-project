import { AiOutlineClose, AiOutlineIdcard, AiOutlineMail } from "react-icons/ai";
import { BsPersonFill, BsGenderAmbiguous, BsShieldCheck } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";

const SeeAdminUserDetails = ({ waitingList, onClose }: any) => {
  if (!waitingList) {
    return (
      <div className="text-center text-gray-500">No details available</div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Adjust the width and height of the modal */}
      <div className="relative mx-auto min-h-[30vh] w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="mb-4 flex items-center text-2xl font-semibold">
          <BsShieldCheck className="mr-2" /> Admin User Details
        </h2>
        <div className="space-y-3">
          <p className="flex items-center">
            <AiOutlineIdcard className="mr-2 text-blue-500" />
            <strong className="mr-1">ID:</strong> {waitingList.id}
          </p>
          <p className="flex items-center">
            <BsPersonFill className="mr-2 text-green-500" />
            <strong className="mr-1">Name:</strong>{" "}
            {waitingList?.PRManager?.name ||
              waitingList?.SuperAdmin?.name ||
              ""}
          </p>
          <p className="flex items-center">
            <AiOutlineMail className="mr-2 text-red-500" />
            <strong className="mr-1">Email:</strong> {waitingList.email}
          </p>
          <p className="flex items-center">
            <BsGenderAmbiguous className="mr-2 text-purple-500" />
            <strong className="mr-1">Gender:</strong>{" "}
            {waitingList?.PRManager?.gender ||
              waitingList?.SuperAdmin?.gender ||
              ""}
          </p>
          <p className="flex items-center">
            <BsShieldCheck className="mr-2 text-yellow-500" />
            <strong className="mr-1">Status:</strong> {waitingList.status}
          </p>
          <p className="flex items-center">
            <FaUserTag className="mr-2 text-indigo-500" />
            <strong className="mr-1">Role:</strong> {waitingList.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeeAdminUserDetails;
