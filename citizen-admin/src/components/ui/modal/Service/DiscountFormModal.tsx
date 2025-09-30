/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "@/helpers/utils/DateFormat";
import { FaClosedCaptioning, FaEye, FaTimes } from "react-icons/fa";
import DTModal from "../DTModal";
import axios from "axios";
import toast from "react-hot-toast";

interface ModalProps {
  modalData?: any;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

interface FormData {
  discountTitle: string;
  discount: number;
  startDate: Date;
  endDate: Date;
}

const DiscountFormModal = ({
  modalData,
  modalOpen,
  setModalOpen,
}: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<FormData>();

  const watchDiscount = watch("discount");
  const originalPrice = modalData?.priceDetails?.finalAmount || 0;
  const discountPercentage = Number(watchDiscount) || 0;
  const discountedAmount = (originalPrice * discountPercentage) / 100;
  const newPrice: number = originalPrice - discountedAmount || 0;

  console.log(modalData);

  const onSubmit = async (data: FormData) => {
    const finalData = {
      serviceId: modalData?._id,
      discountTitle: data?.discountTitle,
      startDate: formatDate(data?.startDate),
      endDate: formatDate(data?.endDate),
      priceDetails: {
        discount: Number(data?.discount),
        // regularPrice:modalData?.priceDetails?.regularPrice ,
        // discountAmount: Number((modalData?.priceDetails?.regularPrice - newPrice).toFixed(2)),
        // finalAmount: newPrice
      },
    };
    console.log(finalData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/discount-service/create-service-discount",
        finalData,
      );

      if (response.status === 200) {
        console.log("Data successfully submitted:", response.data);

        reset();
        setModalOpen(false);

        toast("Discount added successfully!!!");
      } else {
        console.error("Error submitting form:", response.data);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div>
      {modalOpen && (
        <DTModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          title="Add Discount"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Discount Title */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Discount Title
              </label>
              <input
                {...register("discountTitle", {
                  required: "Title is required",
                })}
                className="input input-bordered w-full"
                placeholder="Enter discount title"
              />
              {errors.discountTitle && (
                <p className="text-sm text-red-500">
                  {errors.discountTitle.message}
                </p>
              )}
            </div>

            {/* Discount Percentage */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Discount (%)
              </label>
              <input
                type="number"
                {...register("discount", { required: "Discount is required" })}
                className="input input-bordered w-full"
                placeholder="Enter discount percentage"
              />
              {errors.discount && (
                <p className="text-sm text-red-500">
                  {errors.discount.message}
                </p>
              )}
            </div>

            {/* Start and End Dates */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Start Date
                </label>
                <Controller
                  control={control}
                  name="startDate"
                  rules={{ required: "Start date is required" }}
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="Start date"
                      selected={field.value ? new Date(field.value) : null}
                      onChange={(date) => field.onChange(date)}
                      className="input input-bordered w-full"
                    />
                  )}
                />
                {errors.startDate && (
                  <p className="text-sm text-red-500">
                    {errors.startDate.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  End Date
                </label>
                <Controller
                  control={control}
                  name="endDate"
                  rules={{ required: "End date is required" }}
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="End date"
                      selected={field.value ? new Date(field.value) : null}
                      onChange={(date) => field.onChange(date)}
                      className="input input-bordered w-full"
                    />
                  )}
                />
                {errors.endDate && (
                  <p className="text-sm text-red-500">
                    {errors.endDate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Price Display */}
            {/* <div className="  ">
              <p>   Regular Price: {modalData?.priceDetails?.regularPrice}</p>
                <p> Final Price: {newPrice.toFixed(2)} TK</p>
                <p>Save Amount : {(modalData?.priceDetails?.regularPrice) - (newPrice.toFixed(2))  }</p>
              </div> */}

            <div className="mt-8 ml-auto flex w-1/2 flex-col border-t-2 border-gray-500 pt-2 text-[14px] text-gray-100">
              <div className="flex justify-between gap-2">
                <p>Regular Price</p>
                <p>{modalData?.priceDetails?.regularPrice}.00 Tk</p>
              </div>
              <div className="flex justify-between gap-2">
                <p>After Discount</p>
                <p>{newPrice.toFixed(2)} TK</p>
              </div>
              <div className="flex justify-between gap-2">
                <p>Saving Amount</p>
                <p>
                  {(modalData?.priceDetails?.regularPrice - newPrice).toFixed(
                    2,
                  )}{" "}
                  TK
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="text-right">
              <button type="submit" className="btn btn-primary">
                Submit Discount
              </button>
            </div>
          </form>
        </DTModal>
      )}
    </div>
  );
};

export default DiscountFormModal;
