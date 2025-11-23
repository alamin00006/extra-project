import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import config from "../../../config/index.js";

// Schema Design
const userSchema = mongoose.Schema(
  {
    id: {
      type: String,
      // required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    // lastName: {
    //   type: String,
    // },
    phoneNumber: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      // required: true,
      // unique: [true, "This email already exists!"],
      // validate: [validator.isEmail, "Provide a valid email"],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,
    },
    role: {
      type: String,
      enum: ["User"],
      default: "User",
    },
    otp: {
      type: String,
      required: false,
    },
    otpExpiration: {
      type: Date,
      required: false,
    },
    lastLogin: {
      type: Date,
      required: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: { type: Boolean, default: true },

    // Personal Information
    personalDetails: {
      fathersName: {
        type: String,
      },
      mothersName: {
        type: String,
      },
      birthDate: {
        type: Date,
      },

      userPhoto: {
        type: String,
      },
    },

    // Address Information

    status: {
      type: String,
      enum: ["active", "inActive", "blocked"],
      default: "active",
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
// Middleware to hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
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

// Method to compare passwords
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.statics.isUserExist = async function (id) {
  return await User.findOne({ _id: id });
  // return await User.findOne({ _id: id }, { id: 1, password: 1, role: 1 });
};

// Model
const User = mongoose.model("User", userSchema);

export default User;
