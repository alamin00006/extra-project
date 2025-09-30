// @/components/form/MultiSelect.tsx
"use client";

import React, { useState } from "react";
import {
  Controller,
  useFormContext,
  Path,
  PathValue,
  FieldValues,
} from "react-hook-form";
import { X, ChevronDown } from "lucide-react"; // Import X and ChevronDown icons
import Label from "./Label";

type SelectOptions = {
  label: string;
  value: string;
};

type MultiSelectProps<T extends FieldValues> = {
  name: Path<T>;
  options: SelectOptions[];
  placeholder?: string;
  label?: string;
  handleChange?: (selected: string[]) => void;
  className?: string;
  validationOptions?: object;
};

const MultiSelect = <T extends FieldValues>({
  name,
  placeholder = "Select options",
  options,
  label,
  handleChange,
  className = "",
  validationOptions = {},
}: MultiSelectProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();
  const error = errors[name]?.message as string | undefined;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={validationOptions}
      defaultValue={[] as PathValue<T, Path<T>>}
      render={({ field: { value, onChange } }) => {
        const selectedOptions = (value || []) as string[];

        const handleSelect = (optionValue: string) => {
          const newSelectedOptions = selectedOptions.includes(optionValue)
            ? selectedOptions.filter((val) => val !== optionValue)
            : [...selectedOptions, optionValue];
          onChange(newSelectedOptions);
          handleChange?.(newSelectedOptions);
        };

        const removeOption = (value: string) => {
          const newSelectedOptions = selectedOptions.filter(
            (val) => val !== value,
          );
          onChange(newSelectedOptions);
          handleChange?.(newSelectedOptions);
        };

        const selectedValuesText = selectedOptions.map(
          (val) => options.find((option) => option.value === val)?.label || "",
        );

        return (
          <div className="w-full">
            {label && <Label htmlFor={name}>{label}</Label>}
            <div className="relative z-20 inline-block w-full">
              <div className="relative flex flex-col items-center">
                <div onClick={toggleDropdown} className="w-full">
                  <div
                    className={`shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-white py-1.5 pr-10 pl-3 outline-hidden transition dark:border-gray-700 dark:bg-gray-900 ${
                      selectedOptions.length > 0
                        ? "text-gray-800 dark:text-white/90"
                        : "text-gray-400 dark:text-gray-400"
                    } ${error ? "border-red-500" : ""} ${className}`}
                  >
                    <div className="flex flex-auto flex-wrap gap-2">
                      {selectedValuesText.length > 0 ? (
                        selectedValuesText.map((text, index) => (
                          <div
                            key={index}
                            className="group flex items-center justify-center rounded-full border-[0.7px] border-transparent bg-white py-1 pr-2 pl-2.5 text-sm text-gray-800 capitalize hover:border-gray-200 dark:bg-gray-800 dark:text-white/90 dark:hover:border-gray-800"
                          >
                            <span className="max-w-full flex-initial capitalize">
                              {text}
                            </span>
                            <div className="flex flex-auto flex-row-reverse">
                              <div
                                onClick={() =>
                                  removeOption(selectedOptions[index])
                                }
                                className="cursor-pointer pl-2 text-gray-500 group-hover:text-gray-400 dark:text-gray-400"
                              >
                                <X className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <input
                          placeholder={placeholder}
                          className="h-full w-full cursor-pointer appearance-none border-0 p-1 pr-2 text-sm capitalize outline-hidden placeholder:text-gray-400 focus:border-0 focus:ring-0 focus:outline-hidden dark:placeholder:text-white/30"
                          readOnly
                          value={placeholder}
                        />
                      )}
                    </div>
                    {/* Dropdown Icon */}
                    <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="max-h-select absolute top-full left-0 z-40 w-full overflow-y-auto rounded-lg bg-white shadow-sm dark:bg-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-col">
                      {options.map((option, index) => (
                        <div key={index}>
                          <div
                            className={`hover:bg-primary/5 w-full cursor-pointer rounded-t border-b border-gray-200 dark:border-gray-800`}
                            onClick={() => handleSelect(option.value)}
                          >
                            <div
                              className={`relative flex w-full items-center p-2 pl-2 ${
                                selectedOptions.includes(option.value)
                                  ? "bg-primary/10"
                                  : ""
                              }`}
                            >
                              <div className="mx-2 leading-6 text-gray-800 capitalize dark:text-white/90">
                                {option.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {error && (
              <p className="mt-1 text-sm text-red-500">
                {error === "Please keep Correct Password"
                  ? "Please enter the correct password"
                  : error}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default MultiSelect;
