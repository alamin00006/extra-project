import React, { useRef } from "react";
import { FaUser, FaFileInvoice, FaFile } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BlobProvider, View } from "@react-pdf/renderer";
import { formatDate } from "@/utilis/dateConvert";
import { useGetProfitsByUserIdQuery } from "@/redux/api/profitApi";
import Image from "next/image";
import { saveAs } from "file-saver";
import InvestorProfitHistory from "./InvestorProfitHistory";
import Link from "next/link";

const SeeInvestDetails = ({
  investment,
  show,
  setShow,
  handleVerifyUser,
  verifying,
}) => {
  const ref = useRef(null);

  const {
    data: profits,
    error,
    isLoading,
  } = useGetProfitsByUserIdQuery(investment?._id);

  const handleClose = () => setShow(false);

  const handleDownload = (imageUrl, fileName) => {
    saveAs(imageUrl, `${fileName}.jpg`);
  };

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading profit data.</p>;

  return (
    <div
      className={`${
        show
          ? "fixed inset-0 z-9999 flex items-center justify-center"
          : "hidden"
      }`}
    >
      {" "}
      <div
        className="fixed inset-0 backdrop-blur-[2px]"
        onClick={handleClose}
      ></div>
      <div className="modal-box max-w-7xl ">
        <div ref={ref}>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h4 className="flex items-center gap-2 text-lg font-bold text-green-600">
                <FaFileInvoice />
                Investment Info{" "}
                <span className="text-black">
                  {" "}
                  ( PR Name :{" "}
                  {investment?.project?.PRManagersDetails?.[0]?.name})
                </span>
              </h4>
              <button
                className="btn btn-circle btn-sm text-black"
                onClick={handleClose}
              >
                x
              </button>
            </div>

            {/* Personal and Nominee Details */}
            <div className="grid grid-cols-1 gap-4 border border-[#d1d5db] p-4 md:grid-cols-2">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-green-600">
                  <FaUser />
                  Personal Details
                </h4>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div>
                    <label className="font-medium">Investor Name</label>
                    <p className="font-bold">
                      {investment?.userId?.name || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">
                      NID or Passport Number
                    </label>
                    <p className="font-bold">
                      {investment?.userId?.personalDetails?.nidOrPassportNo ||
                        "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <p className="font-bold">
                      {investment?.userId?.email || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Mobile Number</label>
                    <p className="font-bold">
                      {investment?.userId?.phoneNumber || "N/A"}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <label className="font-medium">Present Address</label>
                    <p className="font-bold ">
                      {investment?.userId?.address?.addressLine1 || "N/A"}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <label className="font-medium">Permanent Address</label>
                    <p className="font-bold">
                      {investment?.userId?.address?.addressLine1 || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Zip Code</label>
                    <p className="font-bold">
                      {investment?.userId?.address?.zipCode || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-green-600">
                  <FaUser />
                  Nominee Details
                </h4>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <label className="font-medium">Nominee Name</label>
                    <p className="font-bold">
                      {investment?.userId?.nomineeDetails?.nomineeFullName ||
                        "N/A"}
                    </p>
                  </div>

                  <div>
                    <label className="font-medium">Nominee Relation</label>
                    <p className="font-bold">
                      {investment?.userId?.nomineeDetails?.nomineeRelation ||
                        "N/A"}
                    </p>
                  </div>

                  <div>
                    <label className="font-medium">
                      Nominee NID or Passport Number
                    </label>
                    <p className="font-bold">
                      {investment?.userId?.nomineeDetails
                        ?.nomineeNidOrPassportNo || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Nominee Mobile Number</label>
                    <p className="font-bold">
                      {investment?.nomineePhone || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Nominee Relation</label>
                    <p className="font-bold">
                      {investment?.userId?.nomineeDetails?.nomineeRelation ||
                        "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Nominee Birthday</label>
                    <p className="font-bold">
                      {formatDate(
                        investment?.userId?.nomineeDetails?.nomineeBirthDate
                      ) || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Attachment */}
            <div className="border border-[#d1d5db] p-4 mt-4">
              <h4 className="flex items-center gap-2 text-lg font-bold text-green-500 mb-3">
                <FaFile />
                Attachment
              </h4>{" "}
              <div className=" grid grid-cols-1 gap-4  md:grid-cols-4 ">
                <div>
                  <label className="font-medium">Investor Photo</label>
                  {investment?.userId?.personalDetails?.userPhoto ? (
                    <div className="relative w-[100px] h-[100px] mt-2 group">
                      <Image
                        width={100}
                        height={100}
                        src={investment.userId.personalDetails.userPhoto}
                        alt="User Photo"
                        className="w-full h-full object-contain rounded cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm"
                      />
                      {/* Overlay with Download text */}
                      <div
                        onClick={() =>
                          handleDownload(
                            investment.userId.personalDetails.userPhoto,
                            "investor-photo"
                          )
                        }
                        className="absolute inset-0 cursor-pointer bg-black bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        <span className="text-white text-sm font-bold">
                          Download
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="font-bold">N/A</p>
                  )}
                </div>
                <div>
                  <label className="font-medium"> Inv. NID Front Side</label>
                  {investment?.userId?.personalDetails?.nidOrPassportPhoto ? (
                    <div className="relative w-[100px] h-[100px] mt-2 group">
                      <Image
                        width={100}
                        height={100}
                        src={
                          investment.userId.personalDetails.nidOrPassportPhoto
                        }
                        alt="User NID Front Photo"
                        className="w-full h-full object-contain rounded cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm"
                      />
                      {/* Overlay with Download text */}
                      <div
                        onClick={() =>
                          handleDownload(
                            investment.userId.personalDetails
                              .nidOrPassportPhoto,
                            "investor-nid-front"
                          )
                        }
                        className="absolute inset-0  cursor-pointer bg-black bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        <span className="text-white text-sm font-bold">
                          Download
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="font-bold">N/A</p>
                  )}
                </div>
                <div>
                  <label className="font-medium">Inv. NID Back Side</label>
                  {investment?.userId?.personalDetails
                    ?.nidOrPassportBackSidePhoto ? (
                    <div className="relative w-[100px] h-[100px] mt-2 group">
                      <Image
                        width={100}
                        height={100}
                        src={
                          investment.userId.personalDetails
                            .nidOrPassportBackSidePhoto
                        }
                        alt="User NID Back Photo"
                        className="w-full h-full object-contain rounded cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm"
                      />
                      {/* Overlay with Download text */}
                      <div
                        onClick={() =>
                          handleDownload(
                            investment.userId.personalDetails
                              .nidOrPassportBackSidePhoto,
                            "investor-nid-back"
                          )
                        }
                        className="absolute inset-0 bg-black bg-opacity-10 cursor-pointer flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        <span className="text-white text-sm font-bold">
                          Download
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="font-bold">N/A</p>
                  )}
                </div>
                <div>
                  <label className="font-medium">Nominee NID Front Side</label>
                  {investment?.userId?.nomineeDetails
                    ?.nomineeNidOrPassportPhoto ? (
                    <div className="relative w-[100px] h-[100px] mt-2 group">
                      <Image
                        width={100}
                        height={100}
                        src={
                          investment.userId.nomineeDetails
                            .nomineeNidOrPassportPhoto
                        }
                        alt="Nominee Photo"
                        className="w-full h-full object-contain rounded cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm"
                      />
                      {/* Overlay with Download text */}
                      <div
                        onClick={() =>
                          handleDownload(
                            investment.userId.nomineeDetails
                              .nomineeNidOrPassportPhoto,
                            "nominee-nid-front"
                          )
                        }
                        className="absolute inset-0 cursor-pointer bg-black bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        <span className="text-white text-sm font-bold">
                          Download
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="font-bold">N/A</p>
                  )}
                </div>
                <div>
                  <label className="font-medium">Nominee NID Back Side</label>
                  {investment?.userId?.nomineeDetails
                    ?.nomineeNidOrPassportBackSidePhoto ? (
                    <div className="relative w-[100px] h-[100px] mt-2 group">
                      <Image
                        width={100}
                        height={100}
                        src={
                          investment.userId.nomineeDetails
                            .nomineeNidOrPassportBackSidePhoto
                        }
                        alt="Nominee Photo"
                        className="w-full h-full object-contain rounded transition duration-300 ease-in-out group-hover:blur-sm"
                        onClick={() =>
                          handleDownload(
                            investment.userId.nomineeDetails
                              .nomineeNidOrPassportBackSidePhoto,
                            "nominee-nid-back"
                          )
                        }
                      />
                      {/* Overlay with Download text */}
                      <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <span className="text-white text-sm font-bold">
                          Download
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="font-bold">N/A</p>
                  )}
                </div>
                <div>
                  <label className="font-medium">Nominee Photo</label>
                  {investment?.userId?.nomineeDetails?.nomineePhoto ? (
                    <div className="relative w-[100px] h-[100px] mt-2 group">
                      <Image
                        width={100}
                        height={100}
                        src={investment.userId.nomineeDetails.nomineePhoto}
                        alt="Nominee Photo"
                        className="w-full h-full object-contain rounded cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm"
                      />
                      {/* Overlay with Download text */}
                      <div
                        onClick={() =>
                          handleDownload(
                            investment.userId.nomineeDetails.nomineePhoto,
                            "nominee-photo"
                          )
                        }
                        className="absolute inset-0 bg-black cursor-pointer bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        <span className="text-white text-sm font-bold">
                          Download
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="font-bold">N/A</p>
                  )}
                </div>
                {/* Proof of Investment */}

                <div>
                  <label className="font-medium">Proof of Invest Photos</label>
                  {investment?.proofOfPaymentPhoto &&
                  investment.proofOfPaymentPhoto.length > 0 ? (
                    <div className="flex flex-wrap mt-2">
                      {investment.proofOfPaymentPhoto.map((photo, index) => (
                        <div
                          key={index}
                          className="relative w-[100px] h-[100px] m-2 group"
                        >
                          <Image
                            src={photo}
                            alt={`Proof of Invest Photo ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg border cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm"
                            width={100}
                            height={100}
                          />
                          {/* Overlay with Download text */}
                          <div
                            onClick={() =>
                              handleDownload(photo, "payment-proof")
                            }
                            className="absolute inset-0 bg-black cursor-pointer bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                          >
                            <span className="text-white text-sm font-bold">
                              Download
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-gray-500">
                      No proof of investment photos available.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <p className="mb-2">Verify Document</p>
                {verifying ? (
                  <p className="mb-2 font-bold text-rose-500">{verifying}</p>
                ) : (
                  ""
                )}
                <input
                  type="checkbox"
                  className="toggle toggle-success"
                  checked={investment?.userId.isVerified}
                  onChange={async (e) => {
                    const newValue = e.target.checked ? true : false;
                    await handleVerifyUser(investment?.userId._id, newValue);
                  }}
                />
              </div>
            </div>
            {/* Investment and Return Details */}
            <div className="mt-4 grid grid-cols-1 gap-4 border border-[#d1d5db] p-4 md:grid-cols-2">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-green-500">
                  <MdAccountBalance />
                  Investment Details
                </h4>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <label className="font-medium">Investment ID</label>
                    <p className="font-bold uppercase">
                      #{investment?.id || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Investment Date</label>
                    <p className="font-bold">
                      {formatDate(investment?.createdAt) || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Project Name</label>
                    <p className="font-bold">
                      {investment?.projectInfo?.projectTitle || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Investment Amount</label>
                    <p className="font-bold">
                      Tk{" "}
                      {investment?.investmentAmount?.toLocaleString() || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Total Buy Shares</label>
                    <p className="font-bold">
                      {investment?.totalBuyShare || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Payment Method</label>
                    <p className="font-bold">
                      {investment?.paymentMethod || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Return Type</label>
                    <p className="font-bold">
                      {investment?.returnType || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Profit Ratio</label>
                    <p className="font-bold">
                      {`${investment?.percentOfReturn} %` || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">
                      Duration of Investment
                    </label>
                    <p className="font-bold">
                      {`${investment?.durationOfInvest} Year` || "-"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">First Return Date</label>
                    <p className="font-bold">
                      {formatDate(investment?.firstReturnDate) || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Status</label>
                    <p
                      className={`font-bold ${
                        investment?.status !== "Received"
                          ? "text-rose-600"
                          : "text-green-600"
                      }`}
                    >
                      {investment?.status || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-green-600">
                  <GiReceiveMoney />
                  Return Details
                </h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <label className="font-medium">Total Profit Amount</label>
                    <p className="font-bold">
                      Tk{" "}
                      {investment?.totalProfitAmount?.toLocaleString() || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">
                      Total Paid Profit Amount
                    </label>
                    <p className="font-bold">
                      Tk{" "}
                      {investment?.totalPaidProfitAmount?.toLocaleString() ||
                        "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">
                      Total Due Profit Amount
                    </label>
                    <p className="font-bold">
                      Tk{" "}
                      {investment?.totalDueProfitAmount?.toLocaleString() ||
                        "N/A"}
                    </p>
                  </div>
                  {/* <div>
                    <label className="font-medium">
                      Total Profit of Percentage
                    </label>
                    <p className="font-bold">
                      {`${investment?.totalProfitOfPercentage}%` || "N/A"}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Profit Disbursement Summary */}
          <InvestorProfitHistory profits={profits} />
        </div>
        <div className="flex justify-end gap-3 items-center mt-2">
          <Link
            href={`/statement/${investment?._id}`}
            style={{
              backgroundColor: "#399",
            }}
            className="px-3 py-3 mt-5 rounded text-white font-medium "
          >
            Statement
          </Link>

          <button className="btn btn-outline mt-5" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeeInvestDetails;
