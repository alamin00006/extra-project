"use client";

import { getBaseUrl } from "@/helpers/config/envConfig";
import { uploadImageToImgBB } from "@/helpers/utils/UploadPhoto";
import { useGetUserQuery } from "@/redux/api/authApi";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState("") as any;
  const [isLoading, setIsLoading] = useState(false);

  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleTogglePasswordFields = () => {
    setShowPasswordFields(!showPasswordFields);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const {
    data: loginUser,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery() as any;

  // Handle Password Change
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const passwordUpdate = {
        oldPassword: passwords.oldPassword,
        password: passwords.newPassword,
      };

      await axios.patch(
        `${getBaseUrl()}/admin-users/${loginUser?._id}/update-password`,
        passwordUpdate,
      );

      toast.success("Password has been successfully updated.");
      setPasswords({ oldPassword: "", newPassword: "" });
      setShowPasswordFields(false);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "An error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Photo Profile Photo Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const profilePic = await uploadImageToImgBB(profilePhoto[0]);

      const withAttachmentUserData = {
        profilePhoto: profilePic,
        role: loginUser?.role,
      };
      const userId = loginUser?._id;

      await axios.patch(
        `${getBaseUrl()}/admin-users/${userId}/update-profile-photo`,
        withAttachmentUserData,
      );

      toast.success("Profile photo uploaded successfully");
      setProfilePhoto("");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "An error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Personal Information Section */}
          <div className="lg:col-span-3">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Update your personal details and password
                </p>
              </div>
              <div className="p-6">
                <form onSubmit={handlePasswordUpdate}>
                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Full Name"
                          disabled
                          value={loginUser?.name || ""}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        disabled
                        value={loginUser?.phoneNumber || ""}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        disabled
                        value={loginUser?.email || ""}
                      />
                    </div>
                  </div>

                  {/* Change Password Section */}
                  <div className="mb-6">
                    <button
                      type="button"
                      className="mb-4 flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      onClick={handleTogglePasswordFields}
                    >
                      <span className="mr-2">
                        {showPasswordFields ? "−" : "+"}
                      </span>
                      Change Password
                    </button>

                    {showPasswordFields && (
                      <div className="space-y-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50">
                        <div className="relative">
                          <label
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor="oldPassword"
                          >
                            Old Password
                          </label>
                          <input
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                            type={showOldPassword ? "text" : "password"}
                            name="oldPassword"
                            id="oldPassword"
                            placeholder="Enter old password"
                            value={passwords.oldPassword}
                            onChange={handlePasswordChange}
                          />
                          <button
                            type="button"
                            className="absolute top-11 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                          >
                            {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>

                        <div className="relative">
                          <label
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor="newPassword"
                          >
                            New Password
                          </label>
                          <input
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                            type={showNewPassword ? "text" : "password"}
                            name="newPassword"
                            id="newPassword"
                            placeholder="Enter new password"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange}
                          />
                          <button
                            type="button"
                            className="absolute top-11 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <div className="flex justify-end gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setShowPasswordFields(false);
                              setPasswords({
                                oldPassword: "",
                                newPassword: "",
                              });
                            }}
                            className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                          >
                            Cancel
                          </button>
                          <button
                            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
                            type="submit"
                            disabled={isLoading}
                          >
                            {isLoading ? "Updating..." : "Update Password"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Profile Photo Section */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Profile Photo
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Upload a new profile picture
                </p>
              </div>
              <div className="p-6">
                <form onSubmit={handleUpdate}>
                  <div className="mb-6 flex flex-col items-center">
                    <div className="relative mb-4">
                      {loginUser?.profilePhoto || loginUser?.userPhoto ? (
                        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-blue-200 dark:border-blue-800">
                          <Image
                            src={
                              loginUser?.profilePhoto || loginUser?.userPhoto
                            }
                            width={128}
                            height={128}
                            className="h-full w-full object-cover"
                            alt="User Profile"
                            priority
                          />
                        </div>
                      ) : (
                        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-600">
                          <Image
                            src={"/images/user/user13.png"}
                            width={128}
                            height={128}
                            className="h-full w-full object-cover"
                            alt="Default User"
                            priority
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      {loginUser?.name || "User"}
                    </p>
                  </div>

                  <div className="mb-6">
                    <label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="profilePhoto"
                    >
                      Upload New Photo
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="profilePhoto"
                        accept="image/*"
                        onChange={(e: any) => setProfilePhoto(e.target.files)}
                        className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
                      />
                      <div className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-8 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-700/50 dark:hover:border-blue-500 dark:hover:bg-blue-900/20">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium text-blue-600 dark:text-blue-400">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    {profilePhoto && profilePhoto[0] && (
                      <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                        Selected: {profilePhoto[0].name}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50 dark:focus:ring-offset-gray-900"
                      type="submit"
                      disabled={isLoading || !profilePhoto}
                    >
                      {isLoading ? "Uploading..." : "Save Photo"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        containerStyle={{ marginTop: "80px" }}
        toastOptions={{
          className: "dark:bg-gray-800 dark:text-white",
          style: {
            background: "#fff",
            color: "#333",
          },
          success: {
            className: "dark:bg-green-800 dark:text-white",
            style: {
              background: "#10B981",
              color: "#fff",
            },
          },
          error: {
            className: "dark:bg-red-800 dark:text-white",
            style: {
              background: "#EF4444",
              color: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default Profile;
