"use client";
import { useGetUserQuery } from "@/redux/api/authApi";
import { useGetCompanyBankByCompanyIdQuery } from "@/redux/api/bankApi";
import Link from "next/link";

const CompanyBankList = () => {
  // Get login user
  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery();

  // Get company bank accounts
  const params = {
    companyId: userData?.company?._id,
  };
  const {
    data: companyBankAccounts,
    error: bankError,
    isLoading: bankIsLoading,
  } = useGetCompanyBankByCompanyIdQuery(params);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="md:text-2xl sm:text-xl font-bold text-gray-800">
          Company Bank Accounts
        </h1>
        <Link href="/company-bank-add">
          <button className="bg-[#00c194] hover:bg-green-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 shadow-lg text-base sm:text-sm">
            + Add New Bank Account
          </button>
        </Link>
      </div>

      <div className="grid gap-8">
        {companyBankAccounts?.map((account, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg border border-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Bank Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Bank Name</p>
                <p className="text-lg font-semibold text-gray-900">
                  {account?.bankName}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Account Holder Name</p>
                <p className="text-lg font-semibold text-gray-900">
                  {account?.accountHolderName}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="text-lg font-semibold text-gray-900">
                  {account?.accountType}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="text-lg font-semibold text-gray-900">
                  {account?.accountNumber}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Branch Name</p>
                <p className="text-lg font-semibold text-gray-900">
                  {account?.branchName}
                </p>
              </div>
            </div>
          </div>
        ))}
        {(!companyBankAccounts || companyBankAccounts.length === 0) && (
          <div className="text-center text-gray-600 text-lg">
            No bank accounts found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyBankList;
