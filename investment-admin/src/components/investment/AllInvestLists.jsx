"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useGetProjectsByCompanyOrPRQuery } from "@/redux/api/projectsApi";
import { useGetInvestmentsQuery } from "@/redux/api/investmentApi";
import { useGetUserQuery } from "@/redux/api/authApi";
import { USER_ROLE } from "@/constants/role";
import AllInvestmentTable from "./AllInvestmentTable";
import StatusCard from "./status-card/StatusCard";
import InvestmentFilter from "./InvestmentFilter";
import { getBaseUrl } from "@/helpers/config/envConfig";
import axios from "axios";
import ExportInvestorData from "./ExportInvestorData";

const AllInvestLists = () => {
  const [page, setPage] = useState(1);
  const [projectId, setProjectId] = useState("");
  const [profitShareType, setProfitShareType] = useState("");
  const [status, setStatus] = useState("");
  const [verifying, setVerifying] = useState("");

  // Get User Data
  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery();

  // Project Params
  const projectParams = {
    companyId: userData?.company?._id ? userData?.company?._id : "",
    id: userData?.role === USER_ROLE.PR_MANAGER ? userData?.PRManager?._id : "",
  };

  const {
    data: projects,
    error: projectGetError,
    isLoading,
  } = useGetProjectsByCompanyOrPRQuery({ ...projectParams });

  // Investment Params
  const params = {
    prManagerId:
      userData?.role === USER_ROLE.PR_MANAGER ? userData?.PRManager?._id : "",
    companyId: userData?.company?._id ? userData?.company?._id : "",
    project: projectId,
    returnType: profitShareType,
    status: status,
    page: page,
    pageSize: 10,
  };
  const {
    data: allInvestment,
    error: investmentError,
    isLoading: investmentIsLoading,
    refetch,
  } = useGetInvestmentsQuery({ ...params });

  const totalInvestmentAmount = allInvestment?.totalInvestmentAmount;
  const totalInvestor = allInvestment?.totalInvestor;
  const monthlyInvestors = allInvestment?.monthlyInvestor;
  const halfYearlyInvestors = allInvestment?.halfYearlyInvestor;
  const yearlyInvestors = allInvestment?.yearlyInvestor;

  const perPageData = 10;
  const indexOfLastInvestments = page * perPageData;
  const indexOfFirstInvestments = indexOfLastInvestments - perPageData;
  const currentInvestments = allInvestment?.investments.slice(
    indexOfFirstInvestments,
    indexOfLastInvestments
  );
  const totalPages = Math.ceil(allInvestment?.totalCount / perPageData);

  const handlePageChange = (pageNumber) => {
    setPage(Number(pageNumber));
  };

  const handleVerifyUser = async (id, newIsVerifyValue) => {
    const updateVerify = {
      isVerified: newIsVerifyValue,
    };

    try {
      // Submit the form data
      const { data } = await axios.patch(
        `${getBaseUrl()}/users/${id}`,
        updateVerify
      );

      if (data.status === 400) {
        return toast.error(data.data.error);
      }
      // toast.success(newIsVerifyValue ? "Verified" : "Rejected");
      setVerifying(newIsVerifyValue ? "Verifying" : "Rejecting");
      refetch();
    } catch (error) {
      return toast.error("Some error occurred");
    }
  };

  const handleRefresh = () => {
    setProjectId("");
    setProfitShareType("");
    setStatus("");
  };

  return (
    <>
      <div className="pb-10">
        <StatusCard
          totalInvestors={totalInvestor}
          totalInvestmentAmount={totalInvestmentAmount}
          monthlyInvestors={monthlyInvestors}
          halfYearlyInvestors={halfYearlyInvestors}
          yearlyInvestors={yearlyInvestors}
        />
      </div>
      <div className="mx-4">
        <InvestmentFilter
          setProfitShareType={setProfitShareType}
          profitShareType={profitShareType}
          setStatus={setStatus}
          status={status}
          projectId={projectId}
          setProjectId={setProjectId}
          projects={projects?.projects}
          handleRefresh={handleRefresh}
        />

        <div className="flex justify-end mb-5">
          <ExportInvestorData investors={currentInvestments} />
        </div>

        <AllInvestmentTable
          currentInvestments={currentInvestments}
          refetch={refetch}
          handleVerifyUser={handleVerifyUser}
          verifying={verifying}
          setVerifying={setVerifying}
        />

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <nav aria-label="Page navigation">
            <ul className="flex list-none space-x-2">
              <li>
                <button
                  className={`rounded border px-4 py-2 ${
                    page === 1
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => handlePageChange(1)}
                  disabled={page === 1}
                >
                  First
                </button>
              </li>
              <li>
                <button
                  className={`rounded border px-4 py-2 ${
                    page === 1
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <button
                    className={`rounded border px-4 py-2 ${
                      index + 1 === page
                        ? "bg-[#00c194] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`rounded border px-4 py-2 ${
                    page === totalPages
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </li>
              <li>
                <button
                  className={`rounded border px-4 py-2 ${
                    page === totalPages
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => handlePageChange(totalPages)}
                  disabled={page === totalPages}
                >
                  Last
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <Toaster
          position="top-center"
          containerStyle={{ marginTop: "100px" }}
          reverseOrder={false}
        />
      </div>
    </>
  );
};

export default AllInvestLists;
