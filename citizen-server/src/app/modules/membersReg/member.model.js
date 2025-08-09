import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

// Schema Design
const memberSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      // required: true,
    },
    phoneNumber: {
      type: String,
      // required: true,
    },

    email: {
      type: String,
      // unique: [true, "This email already exists!"],
      // validate: [validator.isEmail, "Provide a valid email"],
      // lowercase: true,
      trim: true,
    },
    streetAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Approved", "Pending", "Processing", "Canceled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// Model
const Member = mongoose.model("Member", memberSchema);

export default Member;
