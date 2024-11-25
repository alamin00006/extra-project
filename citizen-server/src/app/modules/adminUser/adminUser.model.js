import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import config from "../../../config/index.js";
const { ObjectId } = mongoose.Schema.Types;

// Schema Design
const adminUserSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["SuperAdmin", "admin", "pr-manager", "company"],
      default: "pr-manager",
      required: true,
    },
    company: {
      type: ObjectId,
      ref: "Company",
      // default: null,
    },
    PRManager: {
      type: ObjectId,
      ref: "PRManager",
    },
    SuperAdmin: {
      type: ObjectId,
      ref: "SuperAdmin",
    },
    status: {
      type: String,
      enum: ["Active", "DeActive", "Blocked"],
      default: "Active",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// Middleware to hash password before saving
adminUserSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      // const salt = await bcrypt.genSalt(9);
      this.password = await bcrypt.hash(
        this.password,
        Number(config.bcrypt_salt_rounds)
      );
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

// adminUserSchema.pre("save", async function (next) {
//   if (this.isModified("password") || this.isNew) {
//     try {
//       const saltRounds = Number(config.bcrypt_salt_rounds);
//       this.password = await bcrypt.hash(this.password, saltRounds);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     next();
//   }
// });

// Method to compare passwords
adminUserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

adminUserSchema.statics.isUserExist = async function (id) {
  return await AdminUser.findOne(
    { _id: id },
    { _id: 1, role: 1, company: 1, email: 1 }
  );
};

// Model
const AdminUser = mongoose.model("AdminUser", adminUserSchema);

export default AdminUser;
