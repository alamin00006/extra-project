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
  const [profilePhoto, setProfilePhoto] = useState("");
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
      e.target.reset();
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

      toast.success("Uploaded successfully");
      // e.target.reset();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "An error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid max-w-7xl grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="border-stroke shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white">
            <div className="border-stroke dark:border-strokedark border-b px-7 py-4">
              <h3 className="font-medium text-black dark:text-white">
                Personal Information
              </h3>
            </div>
            <div className="p-7">
              <form onSubmit={handlePasswordUpdate}>
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute top-4 left-4.5">
                        {/* Your SVG icon */}
                      </span>
                      <input
                        className="border-stroke bg-gray focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary w-full rounded border py-3 pr-4.5 pl-11.5 text-black focus-visible:outline-none dark:text-white"
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Full Name"
                        disabled
                        value={loginUser?.name}
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      className="border-stroke bg-gray focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary w-full rounded border px-4.5 py-3 text-black focus-visible:outline-none dark:text-white"
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      disabled
                      value={loginUser?.phoneNumber}
                    />
                  </div>
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute top-4 left-4.5">
                      {/* Your SVG icon */}
                    </span>
                    <input
                      className="border-stroke bg-gray focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary w-full rounded border py-3 pr-4.5 pl-11.5 text-black focus-visible:outline-none dark:text-white"
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      disabled
                      defaultValue={loginUser?.email}
                    />
                  </div>
                </div>

                {/* Change Password Section */}
                <div className="mb-5.5">
                  <button
                    type="button"
                    className="mb-3 block text-sm font-medium text-green-500 hover:underline"
                    onClick={handleTogglePasswordFields}
                  >
                    Change Password
                  </button>

                  {showPasswordFields && (
                    <div className="flex flex-col gap-5.5">
                      <div className="relative">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="oldPassword"
                        >
                          Old Password
                        </label>
                        <input
                          className="border-stroke bg-gray focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary w-full rounded border px-4.5 py-3 text-black focus-visible:outline-none dark:text-white"
                          type={showOldPassword ? "text" : "password"}
                          name="oldPassword"
                          id="oldPassword"
                          placeholder="Enter old password"
                          value={passwords.oldPassword}
                          onChange={handlePasswordChange}
                        />
                        <span
                          className="absolute top-12 right-4 cursor-pointer"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                          {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>

                      <div className="relative">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="newPassword"
                        >
                          New Password
                        </label>
                        <input
                          className="border-stroke bg-gray focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary w-full rounded border px-4.5 py-3 text-black focus-visible:outline-none dark:text-white"
                          type={showNewPassword ? "text" : "password"}
                          name="newPassword"
                          id="newPassword"
                          placeholder="Enter new password"
                          value={passwords.newPassword}
                          onChange={handlePasswordChange}
                        />
                        <span
                          className="absolute top-12 right-4 cursor-pointer"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <div className="flex justify-end gap-4">
                        <button
                          className="bg-primary flex justify-center rounded-lg px-6 py-2 font-medium text-white transition duration-200 hover:bg-green-700"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? "Saving..." : "Change Password"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-lg bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b px-2 py-1 dark:border-gray-200">
              <h3 className="my-3 text-lg font-semibold text-gray-800 dark:text-white">
                Your Photo
              </h3>
            </div>
            <div className="p-6">
              <form onSubmit={handleUpdate}>
                <div className="mb-6 flex items-center justify-center">
                  {loginUser?.userPhoto ? (
                    <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-blue-500">
                      <Image
                        src={loginUser?.userPhoto}
                        width={128}
                        height={128}
                        className="h-full w-full object-contain"
                        alt="User"
                      />
                    </div>
                  ) : (
                    <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-gray-300">
                      <Image
                        src={"/images/user/user13.png"}
                        width={128}
                        height={128}
                        className="h-full w-full object-cover"
                        alt="Default User"
                      />
                    </div>
                  )}
                </div>

                <div
                  id="FileUpload"
                  className="relative mb-6 block w-full cursor-pointer rounded-lg border border-dashed border-blue-500 bg-gray-100 px-4 py-6 dark:bg-gray-700"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e: any) => setProfilePhoto(e.target.files)}
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-2"
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    className="bg-primary flex justify-center rounded-lg px-6 py-2 font-medium text-white transition duration-200 hover:bg-green-700"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        containerStyle={{ marginTop: "100px" }}
        reverseOrder={false}
      />
    </div>
  );
};

export default Profile;
