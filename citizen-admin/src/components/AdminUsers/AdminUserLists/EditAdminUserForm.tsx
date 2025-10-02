import { USER_ROLE } from "@/constants/role";
import { getBaseUrl } from "@/helpers/config/envConfig";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const EditAdminUserForm = ({
  user,
  loginUser,
  showEditAdminUser,
  setShowEditAdminUser,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseModal = () => setShowEditAdminUser(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const password = e.target.password.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phone.value;
    const address = e.target.address.value;
    const incentive = e.target.incentive ? e.target.incentive.value : null;
    const gender = e.target.gender.value;
    const role = e.target.role.value;
    const company = user?.company?._id;

    const userData = {
      name,
      email,
      password: password ? password : user?.password,
      phoneNumber,
      address,
      role,
      incentive,
      gender,
      company,
    };

    try {
      await axios.patch(
        `${getBaseUrl()}/admin-users/${user?._id}/update-admin-user`,
        userData,
      );

      toast.success("Account Updated");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      {showEditAdminUser && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold">User Update</h3>
              <button
                onClick={handleCloseModal}
                className="btn btn-circle btn-sm"
              >
                <AiOutlineClose />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex-1">
                    <label className="mb-2 block text-lg font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      placeholder="Add User Name"
                      name="name"
                      required
                      defaultValue={user?.name}
                    />
                  </div>

                  <div className="flex-1">
                    <label className="mb-2 block text-lg font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      placeholder="Enter Email"
                      name="email"
                      required
                      defaultValue={user?.email}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-lg font-semibold">
                    Password
                  </label>
                  <div className="flex items-center rounded-md border border-gray-300">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-md border-none px-4 py-2 focus:outline-none"
                      placeholder="Enter New Password"
                      name="password"
                    />
                    <button
                      type="button"
                      className="border-l border-gray-300 p-2"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex-1">
                    <label className="mb-2 block text-lg font-semibold">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      placeholder="Mobile Number"
                      name="phone"
                      required
                      defaultValue={user?.phoneNumber}
                    />
                  </div>

                  <div className="flex-1">
                    <label className="mb-2 block text-lg font-semibold">
                      Role
                    </label>
                    <select
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      name="role"
                      defaultValue={user?.role}
                      required
                    >
                      <option disabled value="">
                        Select a Role
                      </option>

                      {loginUser?.role === USER_ROLE.SUPER_ADMIN ? (
                        <option value={USER_ROLE.SUPER_ADMIN}>
                          Super Admin
                        </option>
                      ) : (
                        ""
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-lg font-semibold">
                    Gender
                  </label>
                  <select
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    name="gender"
                    defaultValue={user?.gender}
                    required
                  >
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-lg font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    placeholder="User Address"
                    name="address"
                    required
                    defaultValue={
                      user?.PRManager?.address
                        ? user?.PRManager?.address
                        : user?.SuperAdmin?.address
                    }
                  />
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-teal-600 px-6 py-2 text-white hover:bg-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    Update User
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAdminUserForm;
