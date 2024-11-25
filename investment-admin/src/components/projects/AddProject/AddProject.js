"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import ProjectInfo from "./ProjectInfo";
import Financials from "./Financials";
import UploadMedia from "./UploadMedia";
import Timeline from "./Timeline";

import { authKey } from "@/constants/storageKey";
import { useGetProjectTypeQuery } from "@/redux/api/projectTypeApi";
import { useGetUserQuery } from "@/redux/api/authApi";
import { getFromLocalStorage } from "@/utilis/local-storage";

import { handleNewProject } from "@/utilis/handleNewProject";
import LoadingState from "@/components/LoadingState/LoadingState";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const AddProject = () => {
  const tabs = [
    "1. Basic Info",
    "2. Financials",
    "3. Timeline",
    "4. Documents",
  ];

  const authToken = getFromLocalStorage(authKey);
  const [isUploadLoading, setIsUploading] = useState(false);
  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery({ token: authToken });

  const [projectType, setProjectType] = useState("");

  // Get Project Type
  const { data, error: projectGetError, isLoading } = useGetProjectTypeQuery();

  // Documents
  const [files, setFiles] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [timeLines, setTimelines] = useState([]);
  const [driveLinks, setDriveLinks] = useState([]);
  const [investmentStartDate, setInvestmentStartDate] = useState("");
  const [investmentEndDate, setInvestmentEndDate] = useState("");
  const [firstReturnDate, setFirstReturnDate] = useState("");

  // Financials
  const [projectValue, setProjectValue] = useState(null);

  // Notary Fee
  const [notaryFee, setNotaryFee] = useState(0);
  const [displayNotaryFee, setDisplayNotaryFee] = useState("");

  // Sharikana Fee
  const [sharikanaFee, setSharikanaFee] = useState(0);
  const [displaySharikanaFee, setDisplaySharikanaFee] = useState("");

  // Per Share Value
  const [perShareValue, setPerShareValue] = useState(0);
  const [perShareValueDisplay, setPerShareValueDisplay] = useState("");
  const [totalShared, setTotalShared] = useState(0);
  // Asset Value
  const [assetValue, setAssetValue] = useState(0);
  const [displayAssetValue, setDisplayAssetValue] = useState("");

  const checkFileSize = (file) => {
    if (file.size > MAX_FILE_SIZE) {
      toast.error(`File size exceeds 5 MB. Please upload a smaller file.`);
      return false;
    }
    return true;
  };

  const handleFileChange = (setter) => (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(checkFileSize);

    if (validFiles.length > 0) {
      setter(validFiles);
    } else {
      e.target.value = "";
    }
  };

  // Handle Asset Value show Display
  const handleAssetValue = (e) => {
    let inputValue = e.target.value.replace(/,/g, "");
    if (inputValue === "" || isNaN(Number(inputValue))) {
      setAssetValue(0);
      setDisplayAssetValue("");
    } else {
      const numericValue = Number(inputValue);
      setAssetValue(numericValue);
      setDisplayAssetValue(numericValue.toLocaleString());
    }
  };

  // Handle Notary Fee Value show Display
  const handleNotaryFeeValue = (e) => {
    let inputValue = e.target.value;

    if (inputValue === "" || isNaN(Number(inputValue))) {
      setNotaryFee("");
      setDisplayNotaryFee("");
    } else {
      let numericValue = Number(inputValue);
      setNotaryFee(numericValue);
      setDisplayNotaryFee(`${numericValue}`);
    }
  };

  // Handle Sharikana Fee Value show Display
  const handleSharikanaFee = (e) => {
    let inputValue = e.target.value;
    if (inputValue === "" || isNaN(Number(inputValue))) {
      setSharikanaFee("");
      setDisplaySharikanaFee("");
    } else {
      let numericValue = Number(inputValue);
      setSharikanaFee(numericValue);
      setDisplaySharikanaFee(`${numericValue}`);
    }
  };
  // Handle Asset Value show Display
  const handlePerSharedValue = (e) => {
    let inputValue = e.target.value.replace(/,/g, "");
    if (inputValue === "" || isNaN(Number(inputValue))) {
      setPerShareValue(0);
      setPerShareValueDisplay("");
    } else {
      const numericValue = Number(inputValue);
      setPerShareValue(numericValue);
      setPerShareValueDisplay(numericValue.toLocaleString());
    }
  };

  // Collect Project Value
  useEffect(() => {
    const calculatedNotaryFee = parseFloat(assetValue * notaryFee) / 100;
    const calculatedSharikanaFee = parseFloat(assetValue * sharikanaFee) / 100;

    const newProjectValue =
      Number(assetValue) + calculatedNotaryFee + calculatedSharikanaFee;

    setProjectValue(newProjectValue);
  }, [assetValue, notaryFee, sharikanaFee]);

  // Collect Total Shared Value
  useEffect(() => {
    const totalSharedCount = projectValue / perShareValue;

    setTotalShared(totalSharedCount);
  }, [perShareValue, projectValue]);

  // Handle Time Line & Google Drive Link
  useEffect(() => {
    setTimelines([
      {
        date: "",
        title: "",
        details: "",
      },
    ]);
    setDriveLinks([
      {
        googleDriveLink: "",
      },
    ]);
  }, []);

  const handleTimeLine = () => {
    setTimelines([
      ...timeLines,
      {
        date: "",
        title: "",
        details: "",
      },
    ]);
  };

  const handleDriveLink = () => {
    setDriveLinks([
      ...driveLinks,
      {
        googleDriveLink: "",
      },
    ]);
  };

  // handle Remove Time line
  const handleRemoveTimeLine = () => {
    if (timeLines.length === 1) {
      toast.error("You must select at least one Timeline");
      return;
    }
    const updatedOptions = timeLines.slice(0, -1);
    setTimelines(updatedOptions);
  };

  // Handle Remove Drive links
  const handleRemoveDriveLink = () => {
    if (driveLinks.length === 1) {
      toast.error("You must select at least one Drive Link");
      return;
    }
    const updatedOptions = driveLinks.slice(0, -1);
    setDriveLinks(updatedOptions);
  };

  // Handle Tab Content
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleNextClick = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
  };

  const [formData, setFormData] = useState({
    projectTitle: "",
    investmentDurationYear: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    aboutProject: "",
    // managementInfo: "",
    exitStrategy: "",
    youtubeVideoLink: "",
    googleMapLink: "",
    minimumShareValue: "",
    maximumShareValue: "",
    yearlyReturnValue: "",
    halfYearlyReturnValue: "",
    monthlyReturnValue: "",

    projectAnnualCapitalAppreciation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectedTimeLines = timeLines?.filter(
    (option) => option.date && option.title && option.details
  );
  const selectedDriveLinks = driveLinks?.filter(
    (option) => option.googleDriveLink
  );

  const handleSubmit = (e) => {
    handleNewProject(
      e,
      formData,
      projectType,
      userData,
      projectValue,
      assetValue,
      notaryFee,
      sharikanaFee,
      perShareValue,
      totalShared,
      investmentStartDate,
      investmentEndDate,
      firstReturnDate,
      selectedTimeLines,
      selectedDriveLinks,
      files,
      setIsUploading
    );
  };

  return (
    <>
      <LoadingState isLoadingState={isUploadLoading} />
      <div className="mx-auto rounded-lg bg-white p-4 shadow-lg">
        <div className="tabs tabs-lifted flex flex-wrap pt-3 font-bold">
          {tabs.map((tab, index) => (
            <a
              key={index}
              role="tab"
              className={`tab cursor-pointer px-4 py-2 text-lg ${
                activeTab === index
                  ? "tab-active text-[#00c196]"
                  : "text-gray-600"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}> */}

          <div className="mt-4">
            {activeTab === 0 && (
              <div className=" p-4 ">
                {/* <hr className="opacity-50" /> */}
                <ProjectInfo
                  handleNextClick={handleNextClick}
                  data={data}
                  setProjectType={setProjectType}
                  projectType={projectType}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>
            )}

            {activeTab === 1 && (
              <div className="p-4">
                <Financials
                  projectValue={projectValue}
                  setAssetValue={setAssetValue}
                  setNotaryFee={setNotaryFee}
                  handleSharikanaFee={handleSharikanaFee}
                  displaySharikanaFee={displaySharikanaFee}
                  setPerShareValue={setPerShareValue}
                  totalShared={totalShared}
                  handleAssetValue={handleAssetValue}
                  displayAssetValue={displayAssetValue}
                  handleNotaryFeeValue={handleNotaryFeeValue}
                  displayNotaryFee={displayNotaryFee}
                  handlePerSharedValue={handlePerSharedValue}
                  perShareValueDisplay={perShareValueDisplay}
                  handleNextClick={handleNextClick}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>
            )}

            {activeTab === 2 && (
              <div className=" p-4">
                <Timeline
                  timeLines={timeLines}
                  setTimelines={setTimelines}
                  handleTimeLine={handleTimeLine}
                  handleRemoveTimeLine={handleRemoveTimeLine}
                  setInvestmentStartDate={setInvestmentStartDate}
                  investmentStartDate={investmentStartDate}
                  investmentEndDate={investmentEndDate}
                  setInvestmentEndDate={setInvestmentEndDate}
                  setFirstReturnDate={setFirstReturnDate}
                  firstReturnDate={firstReturnDate}
                  handleNextClick={handleNextClick}
                />
              </div>
            )}
            {activeTab === 3 && (
              <div className=" p-4">
                <UploadMedia
                  driveLinks={driveLinks}
                  setDriveLinks={setDriveLinks}
                  handleDriveLink={handleDriveLink}
                  handleRemoveDriveLink={handleRemoveDriveLink}
                  setFiles={setFiles}
                  handleFileChange={handleFileChange}
                />

                <div className="flex justify-end p-5">
                  <button
                    type="submit"
                    className="rounded"
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#00C194",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Add Project
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <Toaster
        position="top-center"
        containerStyle={{ marginTop: "100px" }}
        reverseOrder={false}
      />
    </>
  );
};

export default AddProject;
