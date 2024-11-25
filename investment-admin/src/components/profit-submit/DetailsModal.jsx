import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import InvestorTable from "./InvestorTable";

const DetailsModal = ({
  selectedProject,
  setShowDetailsModal,
  showDetailsModal,
  profitShareType,
  projectInvestor,
  totalInvestAmount,
}) => {
  const handleClose = () => {
    setShowDetailsModal(false);
  };

  return (
    <>
      {showDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-5xl rounded-lg bg-white shadow-lg pb-10">
            <div className="border-gray-200 flex items-center justify-between border-b p-4">
              <h3 className="text-base font-semibold">
                Project Wise Investment History{" "}
                <span className="text-green-500">({profitShareType})</span>
              </h3>
              <button
                onClick={handleClose}
                className="btn btn-circle btn-ghost btn-sm"
              >
                <AiOutlineClose className="text-gray-600 h-6 w-6" />
              </button>
            </div>
            <div className="bg-gray-50 p-4">
              <div className=" mx-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="text-base  text-black">Project Name</h4>
                    <span>{selectedProject?.projectTitle}</span>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-base  text-black">
                      {profitShareType} Investor
                    </h4>
                    <span className="font-bold">
                      {projectInvestor?.length} Person
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-base text-black">
                      Total Investment Amount
                    </h4>
                    <span className="font-bold">
                      Tk {totalInvestAmount?.toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-base text-black">
                      {profitShareType} Profit Ratio
                    </h4>
                    <span>
                      {profitShareType === "Monthly"
                        ? `${selectedProject?.monthlyReturnValue} %`
                        : profitShareType === "Half-yearly"
                        ? `${selectedProject?.halfYearlyReturnValue} %`
                        : `${selectedProject?.yearlyReturnValue} %`}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-base text-black">Total Share</h4>
                    <span>
                      {selectedProject?.totalShareValue?.toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-base text-black">Sold Share</h4>
                    <span>
                      {selectedProject?.buyTotalShare?.toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-base text-black">Available Share</h4>
                    <span>
                      {(
                        selectedProject?.totalShareValue -
                        selectedProject?.buyTotalShare
                      )?.toLocaleString()}
                    </span>
                  </div>
                </div>
                {projectInvestor?.length > 0 && (
                  <div className="mt-5">
                    <h3 className="text-xl font-bold mb-5">Investors</h3>

                    <InvestorTable projectInvestor={projectInvestor} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsModal;
