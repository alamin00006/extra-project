"use client";

import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../helpers/utils/schemaValidation";
import { HTMLInputTypeAttribute } from "react";
import Label from "./Label";
import { Eye, EyeOff } from "lucide-react";

interface IInput {
  name: string;
  type?: HTMLInputTypeAttribute;
  size?: "large" | "small";
  value?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  validationOptions?: object;
  error?: string;
  accept?: string;
}

const DynamicInputField = ({
  name,
  type = "text",
  size = "large",
  value,
  id,
  placeholder,
  label,
  validationOptions = {},
  error,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      <Label htmlFor={label}>{label}</Label>
      <Controller
        control={control}
        name={name}
        rules={validationOptions}
        render={({ field }) => (
          <input
            id={id}
            type={inputType}
            placeholder={placeholder}
            {...field}
            value={field.value ?? ""}
            className={`input focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 w-full placeholder:text-gray-400 focus:ring-3 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${
              size === "small" ? "h-8 text-sm" : "h-10 text-base"
            } pr-10`} // space for eye icon
          />
        )}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-9 right-2 -translate-y-1/7 transform text-sm text-gray-500 dark:text-white/50"
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      )}
      {errorMessage && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default DynamicInputField;
