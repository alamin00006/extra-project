import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const paymentSchema = new mongoose.Schema(
  {
    sp_order_id: {
      type: String,
      unique: true,
      required: true,
    },
    customer_order_id: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
    member: {
      type: ObjectId,
      ref: "Member",
    },
    memberPhoneNumber: {
      type: String,
    },
    amount: {
      type: Number,
    },
    trxID: {
      type: String,
    },
    paymentID: {
      type: String,
    },
    paymentNumber: {
      type: String,
    },
    paymentType: {
      type: String,
    },
    paymentDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
