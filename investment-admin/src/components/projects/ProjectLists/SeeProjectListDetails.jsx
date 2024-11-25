import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMoneyBillWave,
  faFile,
  faInfoCircle,
  faCalendar,
  faChartLine,
  faTimes, // Import the close icon
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

const formatDate = (date) => {
  if (!date) return "";
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

const SeeProjectListDetails = ({
  showDetailsModal,
  setShowDetailsModal,
  project,
}) => {
  const handleClose = () => {
    setShowDetailsModal(false);
  };

  return (
    <div className={`modal z-9999 ${showDetailsModal ? "modal-open" : ""}`}>
      <div className="modal-box max-w-6xl mx-4 md:mx-auto relative">
        <div className="absolute top-2 right-2">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <div className="modal-header">
          <h3 className="rounded-t-lg bg-success p-4 text-lg font-bold text-white">
            {project?.projectTitle || "Project Details"}
          </h3>
        </div>
        <div className="modal-body bg-base-200 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              {/* Project Details */}
              <div className="card mb-4 bg-base-100 shadow-md">
                <div className="card-body">
                  <h4 className="card-title text-success">
                    General Information
                  </h4>
                  <strong> About The Project:</strong>{" "}
                  <p>{project?.aboutProject || "No information available."}</p>
                  <ul className="list-none space-y-2">
                    <li>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-blue-500"
                      />
                      <strong> Project Address:</strong>{" "}
                      {project?.projectAddress}
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="card mb-4 bg-base-100 shadow-md">
                <div className="card-body">
                  <h4 className="card-title text-success">About the Project</h4>
                  <p>{project?.aboutProject || "No information available."}</p>
                </div>
              </div> */}

              <div className="card mb-4 bg-base-100 shadow-md">
                <div className="card-body">
                  <h4 className="card-title text-success">Investment Dates</h4>
                  <ul className="list-none space-y-2">
                    <li>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-blue-500"
                      />
                      <strong> Start Date:</strong>{" "}
                      {formatDate(project?.investmentStartDate)}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-blue-500"
                      />
                      <strong> End Date:</strong>{" "}
                      {formatDate(project?.investmentEndDate)}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-blue-500"
                      />
                      <strong> First Return Date:</strong>{" "}
                      {formatDate(project?.firstReturnDate)}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 bg-base-100 shadow-md">
                <div className="card-body">
                  <h4 className="text-lg font-bold text-start text-success mb-4">
                    Project Images
                  </h4>
                  <Splide
                    options={{
                      type: "loop",
                      perPage: 1,
                      autoplay: true,
                      pauseOnHover: false,
                      resetProgress: false,
                      arrows: true,
                      pagination: false,
                    }}
                  >
                    {project?.projectPicture?.map((picture, index) => (
                      <SplideSlide
                        key={index}
                        className="flex items-start justify-start h-[400px] rounded-lg overflow-hidden bg-gray-200 shadow-md"
                      >
                        <Image
                          src={picture}
                          height={400}
                          width={400}
                          alt={`Project Image ${index + 1}`}
                          className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
              </div>
            </div>

            <div>
              {/* Company Details */}
              <div className="card mb-4 bg-base-100 shadow-md">
                <div className="card-body">
                  <h4 className="card-title text-success text-xl font-bold">
                    Company Information
                  </h4>
                  <ul className="list-none space-y-2">
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>Company Name:</strong>{" "}
                      {project?.company?.name || "N/A"}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>Owner Name:</strong>{" "}
                      {project?.company?.accountHolderName || "N/A"}
                    </li>
                    {/* <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>Phone Number:</strong>{" "}
                      {project?.company?.phoneNumber || "N/A"}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>TIN Number:</strong>{" "}
                      {project?.company?.tinNumber || "N/A"}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>Trade Licence Number:</strong>{" "}
                      {project?.company?.tradeLicenceNumber || "N/A"}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>BIN Number:</strong>{" "}
                      {project?.company?.binNumber || "N/A"}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>Bank Name:</strong>{" "}
                      {project?.company?.bankName || "N/A"}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>Account Holder Name:</strong>{" "}
                      {project?.company?.accountHolderName || "N/A"}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-blue-500 mr-2"
                      />
                      <strong>Account Number:</strong>{" "}
                      {project?.company?.accountNumber || "N/A"}
                    </li> */}
                  </ul>
                </div>
              </div>

              {/* Google Drive Links */}
              <div className="card mb-4 bg-base-100 shadow-md">
                <div className="card-body">
                  <h4 className="card-title text-success">
                    Google Drive Links
                  </h4>
                  <ul className="list-none space-y-2">
                    {project?.googleDriveLinks?.map((link, index) => (
                      <li key={index}>
                        <FontAwesomeIcon
                          icon={faFile}
                          className="text-green-500"
                        />{" "}
                        <Link
                          href={link.googleDriveLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          Project Documents {index + 1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/*Timeline Links */}
              <div className="card mb-4 bg-base-100 shadow-md">
                <div className="card-body">
                  <h4 className="card-title text-success">Timelines</h4>
                  <ul className="list-none space-y-2">
                    {project?.timelines?.length > 0 ? (
                      <ul className="list-none space-y-2">
                        {project.timelines.map((timeline, index) => (
                          <li key={index} className=" pb-2">
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="text-blue-500"
                            />{" "}
                            <span>{formatDate(timeline.date)}</span>
                            <li>
                              <FontAwesomeIcon
                                icon={faInfoCircle}
                                className="text-red-500"
                              />{" "}
                              <span>{timeline.details}</span>
                            </li>
                            <li>
                              <FontAwesomeIcon
                                icon={faChartLine}
                                className="text-yellow-500"
                              />{" "}
                              <span>{timeline.title}</span>
                            </li>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No timelines available.</p>
                    )}
                  </ul>
                </div>
              </div>

              {/* Financial Details */}
              <div className="card mb-4 bg-base-100 shadow-md">
                <div className="card-body">
                  <h4 className="card-title text-success">Financial Details</h4>
                  <ul className="list-none space-y-2">
                    <li>
                      <FontAwesomeIcon
                        icon={faMoneyBillWave}
                        className="text-green-500"
                      />
                      <strong> Total Investment:</strong>{" "}
                      {project?.totalProjectValue?.toLocaleString()} Tk
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faMoneyBillWave}
                        className="text-green-500"
                      />
                      <strong> Per Share:</strong>{" "}
                      {project?.perShareValue?.toLocaleString()} Tk
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="text-yellow-500"
                      />
                      <strong> Minimum Share:</strong>{" "}
                      {project?.minimumShareValue?.toLocaleString()}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="text-yellow-500"
                      />
                      <strong> Available Total Purchase:</strong>{" "}
                      {project?.availableTotalShare?.toLocaleString()} shares
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-red-500"
                      />
                      <strong> Status:</strong> {project?.status}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeProjectListDetails;
