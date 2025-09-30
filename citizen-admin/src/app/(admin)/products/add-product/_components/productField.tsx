import { SectionConfig, SelectOption } from "@/components/form/RenderField";

export const hospitalTypeOptions: SelectOption[] = [
  { label: "Cardiology", value: "cardiology" },
  { label: "Neurology", value: "neurology" },
  { label: "Pediatrics", value: "pediatrics" },
];

export const fieldConfigs: Record<string, SectionConfig> = {
  hospital: {
    title: "Hospital Details",
    fields: [
      {
        name: "hospitalName",
        label: "Hospital Name",
        placeholder: "Hospital Name",
        fieldType: "input",
        validation: { required: "Hospital Name is required" },
      },
      {
        name: "hospitalRegistrationNum",
        label: "License Number",
        placeholder: "License Number",
        fieldType: "input",
        validation: { required: "Registration Number is required" },
      },
      {
        name: "yearsOfEstablishment",
        label: "Years of Establishment",
        placeholder: "Years of Establishment",
        fieldType: "input",
        type: "number",
        validation: {
          required: "Years of Establishment is required",
          min: { value: 0, message: "Years cannot be negative" },
        },
      },
      {
        name: "hospitalMail",
        label: "Email",
        placeholder: "Hospital email",
        type: "email",
        fieldType: "input",
        validation: {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: "Invalid email address",
          },
        },
      },
      {
        name: "hospitalContactNumber",
        label: "Phone",
        placeholder: "Phone Number",
        type: "tel",
        fieldType: "input",
        validation: {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{11}$/,
            message: "Phone number must be 11 digits",
          },
        },
      },
      {
        name: "hospitalServices",
        label: "Hospital Services",
        placeholder: "Select services",
        fieldType: "select",
        options: hospitalTypeOptions, // Dynamically pass options
        validation: {
          required: "At least one service is required",
          validate: (value: string[]) =>
            value.length > 0 || "At least one service is required",
        },
      },
      // Example multiSelect field (optional, can be removed if not needed)
      {
        name: "additionalServices",
        label: "Additional Services",
        placeholder: "Select additional services",
        fieldType: "multiSelect",
        options: [
          { label: "Oncology", value: "oncology" },
          { label: "Orthopedics", value: "orthopedics" },
          { label: "Radiology", value: "radiology" },
        ],
        validation: {
          required: "At least one additional service is required",
          validate: (value: string[]) =>
            value.length > 0 || "At least one additional service is required",
        },
      },
    ],
  },
  location: {
    title: "Location",
    fields: [
      {
        name: "location.state",
        label: "State",
        placeholder: "State",
        fieldType: "input",
        validation: { required: "State is required" },
      },
      {
        name: "location.city",
        label: "City",
        placeholder: "City",
        fieldType: "input",
        validation: { required: "City is required" },
      },
      {
        name: "location.postCode",
        label: "Post Code",
        placeholder: "Post Code",
        fieldType: "input",
        validation: { required: "Post Code is required" },
      },
      {
        name: "location.address",
        label: "Address",
        placeholder: "Address",
        fieldType: "textarea",
        rows: 4,
        cols: 50,
        validation: { required: "Address is required" },
      },
    ],
  },
  admin: {
    title: "Admin (who manages this application)",
    fields: [
      {
        name: "userName",
        label: "Management Name",
        placeholder: "Management Name",
        fieldType: "input",
        validation: { required: "Management Name is required" },
      },
      {
        name: "contactNumber",
        label: "Contact Number",
        placeholder: "Contact Number",
        type: "tel",
        fieldType: "input",
        validation: {
          required: "Contact Number is required",
          pattern: {
            value: /^[0-9]{11}$/,
            message: "Contact number must be 11 digits",
          },
        },
      },
      // {
      //   name: "email",
      //   label: "Email",
      //   placeholder: "Email",
      //   type: "email",
      //   fieldType: "input",
      //   validation: {
      //     required: "Email is required",
      //     pattern: {
      //       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      //       message: "Invalid email address",
      //     },
      //   },
      // },
      // {
      //   name: "password",
      //   label: "Password",
      //   placeholder: "Password",
      //   type: "password",
      //   fieldType: "input",
      //   validation: {
      //     required: "Password is required",
      //     minLength: {
      //       value: 6,
      //       message: "Password must be at least 6 characters",
      //     },
      //   },
      // },
    ],
  },
  images: {
    title: "Images",
    fields: [
      {
        name: "logo",
        label: "Upload Logo",
        fieldType: "file",
        size: "large",
        accept: "image/*",
        multiple: false,
        validation: { required: "Logo is required" },
      },
      {
        name: "banners",
        label: "Upload Banner",
        fieldType: "file",
        size: "large",
        accept: "image/*",
        multiple: true,
        validation: { required: "At least one banner is required" },
      },
    ],
  },
};
