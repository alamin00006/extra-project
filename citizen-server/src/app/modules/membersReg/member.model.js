import mongoose from "mongoose";
// Schema Design
const memberSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    // gender: {
    //   type: String,
    //   enum: ["Male", "Female"],
    // },
    address: {
      type: String,
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
const SuperAdmin = mongoose.model("SuperAdmin", memberSchema);

export default SuperAdmin;
