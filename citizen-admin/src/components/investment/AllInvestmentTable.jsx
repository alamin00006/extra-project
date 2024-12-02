import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEdit, FaWhatsapp } from "react-icons/fa";

import { afterOneYear } from "@/utilis/afterOneYear";
import { afterSixMonth } from "@/utilis/afterSixMonth";
import { formatDate } from "@/utilis/dateConvert";
import SeeInvestDetails from "./SeeInvestDetails";
import UpdateStatus from "./UpdateStatus";
import Link from "next/link";

const AllInvestmentTable = ({
  currentInvestments,
  refetch,
  handleVerifyUser,
  verifying,
  setVerifying,
}) => {
  // Status Modal
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const handleShowStatusModal = (investment) => {
    setSelectedInvestment(investment);
    setShowStatusModal(true);
  };

  // Details Modal
  const [selectDetailsInvestment, setSelectDetailsInvestment] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const handleShowDetailsModal = (investment) => {
    setSelectDetailsInvestment(investment);
    setShowDetailsModal(true);
    setVerifying("");
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-bordered table w-full">
          <thead>
            <tr className="text-sm">
              <th>Inv.Id</th>
              <th>Investor</th>
              <th>Contact No.</th>
              <th>Project Title</th>
              <th>Project Type</th>
              <th>PR Manager</th>
              <th>Pay Method</th>
              <th>Inv. Amount</th>
              <th>Share</th>
              <th>Return Type</th>
              <th>Profit Share Date</th>
              <th>Duration of Invest</th>
              <th>Profit Ratio</th>
              <th>Profit Details</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currentInvestments?.map((investment, index) => (
              <tr key={investment._id} className="text-sm">
                <td className="uppercase">#{investment?.id}</td>
                <td>{investment?.userId?.name}</td>
                <td>
                  {investment?.userId?.phoneNumber}
                  <Link
                    href={`https://api.whatsapp.com/send?phone=88${investment?.userId?.phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="relative flex items-center justify-center px-3 py-1 text-[#0ec043] text-sm rounded-md shadow-lg animate-pulse">
                      <FaWhatsapp className="w-6 h-6" />

                      {/* Animated pulse effect */}
                      <span className="absolute flex h-3 w-3 top-0 right-0">
                        <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    </button>
                  </Link>
                </td>
                <td>{investment.projectInfo?.projectTitle}</td>
                <td className="font-bold">
                  {investment.projectInfo?.projectType}
                </td>
                <td className="font-bold">
                  {investment?.project?.PRManagersDetails?.[0]?.name}
                </td>
                <td>{investment.paymentMethod}</td>
                <td className="w-40 font-bold">
                  Tk {investment?.investmentAmount?.toLocaleString()}
                </td>
                <td className="w-30 font-bold">
                  {investment?.totalBuyShare?.toLocaleString()} Share
                </td>
                <td>{investment.returnType}</td>
                <td className="text-red-600 w-32 font-bold">
                  {investment?.returnType === "Yearly"
                    ? formatDate(afterOneYear(investment?.firstReturnDate))
                    : investment?.returnType === "Monthly"
                    ? formatDate(investment?.firstReturnDate)
                    : formatDate(afterSixMonth(investment?.firstReturnDate))}
                </td>
                <td>
                  {investment.projectInfo?.projectType === "Co-ownership" ? (
                    <div className="text-center font-bold">
                      <span>-</span>
                    </div>
                  ) : (
                    <p className="text-center">
                      {investment.durationOfInvest} Year
                    </p>
                  )}
                </td>
                <td>Upto {investment?.percentOfReturn}%</td>
                <td className="w-48 font-bold">
                  P.Count: Tk{" "}
                  {investment.totalProfitAmount
                    ? investment.totalProfitAmount?.toLocaleString()
                    : 0}
                  <br />
                  <span className="text-green-600">
                    Paid : Tk{" "}
                    {investment.totalPaidProfitAmount
                      ? investment.totalPaidProfitAmount?.toLocaleString()
                      : 0}
                  </span>
                  <br />
                  <span className="text-red-600">
                    Due : Tk{" "}
                    {investment.totalDueProfitAmount
                      ? investment.totalDueProfitAmount?.toLocaleString()
                      : 0}
                  </span>
                </td>
                <td className="flex items-center gap-2">
                  <p
                    className={`font-bold ${
                      investment.status !== "Received"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {investment.status}
                  </p>
                  <button
                    className={`btn btn-sm ${
                      investment.status !== "Received"
                        ? "bg-green-500 text-white"
                        : "btn-disabled"
                    }`}
                    onClick={() => handleShowStatusModal(investment)}
                    disabled={investment.status === "Received"}
                  >
                    <FaRegEdit />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn-light btn btn-sm"
                    onClick={() => handleShowDetailsModal(investment)}
                  >
                    <AiOutlineEye className="h-6 w-6" />
                  </button>
                  {selectDetailsInvestment && (
                    <SeeInvestDetails
                      show={showDetailsModal}
                      setShow={setShowDetailsModal}
                      investment={selectDetailsInvestment}
                      handleVerifyUser={handleVerifyUser}
                      verifying={verifying}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {selectedInvestment && (
        <UpdateStatus
          show={showStatusModal}
          setShow={setShowStatusModal}
          investment={selectedInvestment}
          refetch={refetch}
        />
      )}
      {/* {selectInvestForPayment && (
        <ReceivePayment
          showModal={showModal}
          setShowModal={setShowModal}
          investment={selectInvestForPayment}
          mutate={mutate}
        />
      )} */}
    </>
  );
};

export default AllInvestmentTable;
