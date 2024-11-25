"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

import { Toaster } from "react-hot-toast";
import Filter from "./Filter";
import DetailsModal from "./DetailsModal";
import ProfitSubmitModal from "./ProfitSubmitModal";

import { useGetProjectsByCompanyOrPRQuery } from "@/redux/api/projectsApi";

import { authKey } from "@/constants/storageKey";
import { useGetInvestmentsQuery } from "@/redux/api/investmentApi";
import { useGetUserQuery } from "@/redux/api/authApi";
import { getFromLocalStorage } from "@/utilis/local-storage";
import { USER_ROLE } from "@/constants/role";

const ProfitShare = () => {
  const [projectId, setProjectId] = useState("");

  // Get User Data
  const authToken = getFromLocalStorage(authKey);
  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery({ token: authToken });

  // Project Params
  const projectParams = {
    companyId: userData?.company?._id ? userData?.company?._id : "",
    id: userData?.role === USER_ROLE.PR_MANAGER ? userData?.PRManager?._id : "",
  };

  const {
    data: allProjects,
    error: projectGetError,
    isLoading,
  } = useGetProjectsByCompanyOrPRQuery({ ...projectParams });
  const projects = allProjects?.projects;
  // Investment Params
  const params = {
    project: projectId ? projectId : projects?.[0]?._id,
    status: "Received",
  };

  const {
    data: allInvestment,
    error: investmentError,
    isLoading: investmentIsLoading,
  } = useGetInvestmentsQuery({ ...params });

  const [profitShareType, setProfitShareType] = useState("Monthly");

  const [selectedProject, setSelectedProject] = useState({});
  const [projectInvestor, setProjectInvestor] = useState([]);

  const [totalInvestAmount, setTotalInvestAmount] = useState(0);

  // Find Project Investor
  useEffect(() => {
    const findInvestor = allInvestment?.investments.filter(
      (investor) =>
        investor.project?._id === selectedProject?._id &&
        investor.returnType === profitShareType
    );
    setProjectInvestor(findInvestor);
    setTotalInvestAmount(
      findInvestor?.reduce(
        (total, investor) => total + investor.investmentAmount,
        0
      )
    );
  }, [selectedProject, allInvestment, profitShareType]);

  useEffect(() => {
    if (projects?.length > 0) {
      const project =
        projects?.find((project) => project._id === projectId) || projects?.[0];
      setSelectedProject(project);
    }
  }, [projectId, projects]);

  // Details Modal
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleDetailsModal = () => {
    setShowDetailsModal(true);
  };

  // Return Submit Modal
  const [showReturnModal, setShowReturnModal] = useState(false);
  const handleReturnShowModal = () => {
    setShowReturnModal(true);
  };

  return (
    <div className="mx-4">
      <Filter
        setProfitShareType={setProfitShareType}
        projectId={projectId}
        setProjectId={setProjectId}
        projects={projects}
        profitShareType={profitShareType}
      />
      <div className="overflow-x-auto">
        <table className="table-bordered table w-full">
          <thead className=" text-sm">
            <tr>
              <th>Project Name</th>
              <th>{profitShareType} Investor</th>
              <th>Investment Amount</th>
              <th>{profitShareType} Profit Ratio</th>
              {userData?.role !== USER_ROLE.SUPER_ADMIN && (
                <th>Income Submit</th>
              )}

              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            <tr>
              <td>{selectedProject?.projectTitle}</td>
              <td>{projectInvestor?.length} Person</td>
              <td>
                Tk {totalInvestAmount?.toLocaleString()} <br />
              </td>
              <td>
                {profitShareType === "Monthly"
                  ? `${selectedProject?.monthlyReturnValue} %`
                  : profitShareType === "Half-yearly"
                  ? `${selectedProject?.halfYearlyReturnValue} %`
                  : `${selectedProject?.yearlyReturnValue} %`}
              </td>
              {userData?.role !== USER_ROLE.SUPER_ADMIN && (
                <td>
                  <button
                    disabled={projectInvestor?.length > 0 ? false : true}
                    onClick={() => handleReturnShowModal(selectedProject)}
                    className={`rounded-lg px-3 py-1 font-semibold text-white ${
                      projectInvestor?.length > 0
                        ? "bg-teal-500"
                        : "bg-neutral-400	"
                    }`}
                  >
                    Income Submit
                  </button>
                </td>
              )}

              <td>
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                  onClick={handleDetailsModal}
                >
                  <AiOutlineEye className="text-gray-600 h-6 w-6" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {showDetailsModal && (
        <DetailsModal
          selectedProject={selectedProject}
          showDetailsModal={showDetailsModal}
          setShowDetailsModal={setShowDetailsModal}
          profitShareType={profitShareType}
          projectInvestor={projectInvestor}
          totalInvestAmount={totalInvestAmount}
        />
      )}

      {/* Return Submit Modal */}
      {showReturnModal && (
        <ProfitSubmitModal
          profitShareType={profitShareType}
          showReturnModal={showReturnModal}
          setShowReturnModal={setShowReturnModal}
          projectInvestor={projectInvestor}
          project={selectedProject}
          userData={userData}
        />
      )}

      <Toaster
        position="top-center"
        containerStyle={{ marginTop: "100px" }}
        reverseOrder={false}
      />
    </div>
  );
};

export default ProfitShare;
