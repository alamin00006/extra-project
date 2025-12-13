"use client";

import { getBaseUrl } from "@/helpers/config/envConfig";
import useUserData from "@/hooks/useUserData";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "@/app/loading";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Building,
  Shield,
  CreditCard,
  CheckCircle,
  Home,
  Landmark,
  Users,
  Award,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaCity } from "react-icons/fa";

const ServiceApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memberFee, setMemberFee] = useState(5000);
  const [selectedPlan, setSelectedPlan] = useState("single");
  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!memberFee) {
      toast.error("Please select a membership type");
      return;
    }
    setIsLoading(true);

    const { name, mobileNumber, email, streetAddress, city, state } = e.target;

    const registrationData = {
      amount: Number(memberFee),
      name: name.value,
      phoneNumber: mobileNumber.value,
      email: email?.value,
      streetAddress: streetAddress.value,
      city: city.value,
      state: state.value,
    };

    try {
      const { data } = await axios.post(
        `${getBaseUrl()}/payment/create`,
        registrationData,
        { withCredentials: true }
      );
      setIsLoading(false);
      window.location.href = data?.checkout_url;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Payment processing failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const membershipPlans = [
    {
      id: "single",
      name: "Single Membership",
      price: 5000,
      description: "Individual member annual fee",
      features: [
        "Individual benefits",
        "Yearly renewal",
        "Standard support",
        "Member access",
      ],
      icon: <User className="w-6 h-6" />,
      value: 5000,
      color: "from-cyan-400 to-teal-500",
    },
    {
      id: "family",
      name: "Family Membership",
      price: 9999,
      description: "Family member annual fee",
      features: [
        "Family benefits",
        "Multiple members",
        "Priority support",
        "Family events",
        "VIP access",
      ],
      icon: <Users className="w-6 h-6" />,
      value: 9999,
      color: "from-teal-500 to-emerald-600",
    },
  ];

  // Color palette based on #39bcbc
  const colorPalette = {
    primary: "#39bcbc",
    primaryLight: "#5dc9c9",
    primaryDark: "#2a8f8f",
    secondary: "#f0f9f9",
    accent: "#f97316",
    text: "#1f2937",
    textLight: "#6b7280",
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        .primary-gradient {
          background: linear-gradient(
            135deg,
            ${colorPalette.primary},
            ${colorPalette.primaryDark}
          );
        }
        .primary-light-bg {
          background-color: ${colorPalette.secondary};
        }
        .primary-text {
          color: ${colorPalette.primary};
        }
        .primary-border {
          border-color: ${colorPalette.primary};
        }
        .primary-ring {
          ring-color: ${colorPalette.primary};
        }
      `}</style>

      <div className="custom-container">
        {/* Header with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mb-8 shadow-xl">
            <Award className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Your{" "}
            <span style={{ color: colorPalette.primary }}>Membership</span>{" "}
            Registration
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our exclusive community with secure payment processing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Membership Plans */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center mr-3">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Choose Your Plan
                </h2>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center text-xl">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  লয়্যাল মেম্বার রেজিস্ট্রেশন ফি
                </h3>
                <p className="text-sm text-gray-600">
                  Choose the perfect plan for your needs
                </p>
              </div>

              <div className="space-y-4">
                {membershipPlans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      setSelectedPlan(plan.id);
                      setMemberFee(plan.value);
                    }}
                    className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedPlan === plan.id
                        ? "border-teal-500 bg-gradient-to-r from-cyan-50 to-teal-50 shadow-lg"
                        : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div>
                          <h3 className="font-bold text-xl text-gray-900">
                            {plan.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {plan.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: colorPalette.primary }}
                        >
                          ৳{plan.price.toLocaleString()}
                        </span>
                        <div className="text-xs text-gray-500">per year</div>
                      </div>
                    </div>

                    {/* <div
                      className={`w-full h-1 rounded-full mb-4 ${
                        selectedPlan === plan.id
                          ? "bg-gradient-to-r from-cyan-400 to-teal-500"
                          : "bg-gray-200"
                      }`}
                    ></div> */}

                    {/* <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle
                            className={`w-4 h-4 mr-2 ${
                              selectedPlan === plan.id
                                ? "text-teal-500"
                                : "text-gray-400"
                            }`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul> */}

                    <div
                      className={`mt-4 text-center py-2 rounded-lg text-sm font-medium ${
                        selectedPlan === plan.id
                          ? "bg-gradient-to-r from-cyan-400 to-teal-500 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {selectedPlan === plan.id
                        ? "Selected Plan ✓"
                        : "Select Plan"}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Payment Method */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <Shield className="w-5 h-5 text-teal-500 mr-2" />
                  <h3 className="font-semibold text-gray-900">
                    Secure Payment
                  </h3>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">
                        Processed by
                      </p>
                      <p className="text-sm text-gray-500">
                        Industry-leading security
                      </p>
                    </div>
                    <Image
                      src="/images/shurjopay.jpg"
                      alt="Shurjopay"
                      width={100}
                      height={50}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Form Header with gradient */}
              <div className="bg-gradient-to-r from-cyan-400 to-teal-500 px-8 py-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white">
                    Personal Information
                  </h2>
                  <p className="text-cyan-100 mt-2">
                    Provide your details to complete registration
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 flex items-center justify-center mr-2">
                        <User
                          className="w-4 h-4"
                          style={{ color: colorPalette.primary }}
                        />
                      </div>
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400"
                        required
                        placeholder="Enter your full name"
                        name="name"
                        defaultValue={userData?.fullName || ""}
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 flex items-center justify-center mr-2">
                        <Phone
                          className="w-4 h-4"
                          style={{ color: colorPalette.primary }}
                        />
                      </div>
                      Contact Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400"
                        required
                        placeholder="Enter your phone number"
                        name="mobileNumber"
                        defaultValue={userData?.phoneNumber || ""}
                        onWheel={(e) => e.target.blur()}
                      />
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 flex items-center justify-center mr-2">
                        <Mail
                          className="w-4 h-4"
                          style={{ color: colorPalette.primary }}
                        />
                      </div>
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400"
                        placeholder="name@example.com"
                        name="email"
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Street Address */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 flex items-center justify-center mr-2">
                        <Home
                          className="w-4 h-4"
                          style={{ color: colorPalette.primary }}
                        />
                      </div>
                      Street Address *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="streetAddress"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400"
                        required
                        placeholder="House/Road no, Area"
                      />
                      <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 flex items-center justify-center mr-2">
                        <FaCity
                          className="w-4 h-4"
                          style={{ color: colorPalette.primary }}
                        />
                      </div>
                      City *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="city"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400"
                        required
                        placeholder="Enter city name"
                      />
                      <FaCity className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* State */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 flex items-center justify-center mr-2">
                        <Landmark
                          className="w-4 h-4"
                          style={{ color: colorPalette.primary }}
                        />
                      </div>
                      State *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="state"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400"
                        required
                        placeholder="Enter state name"
                      />
                      <Landmark className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-100 mb-8">
                    <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center mr-3">
                        <CreditCard className="w-4 h-4 text-white" />
                      </div>
                      Payment Summary
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">
                            {selectedPlan === "single"
                              ? "Single Membership"
                              : "Family Membership"}
                          </span>
                          <p className="text-sm text-gray-500">
                            Annual subscription
                          </p>
                        </div>
                        <span
                          className="text-xl font-bold"
                          style={{ color: colorPalette.primary }}
                        >
                          ৳{memberFee.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-cyan-200">
                        <div>
                          <span className="text-lg font-bold text-gray-900">
                            Total Amount
                          </span>
                          <p className="text-sm text-gray-500">
                            Inclusive of all charges
                          </p>
                        </div>
                        <div className="text-right">
                          <span
                            className="text-3xl font-bold"
                            style={{ color: colorPalette.primary }}
                          >
                            ৳{memberFee.toLocaleString()}
                          </span>
                          <div className="text-sm text-gray-500">
                            Pay securely now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-1 mr-3 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the Terms & Conditions and Privacy Policy.
                      </label>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-14 bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 mr-3" />
                          Proceed to Secure Payment
                        </>
                      )}
                    </motion.button>

                    <div className="text-center">
                      <p className="text-sm text-gray-500 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-500 mr-2" />
                        100% Secure Payment • SSL Encrypted
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          className: "rounded-xl",
          duration: 4000,
          style: {
            background: colorPalette.primaryDark,
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default ServiceApplicationForm;
