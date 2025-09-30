/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { ImageUploader } from "@/helpers/utils/ImageUploader";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { useState, useCallback } from "react";
import Form from "@/components/form/Form";
import LoadingModal from "@/components/LoadingState/LoadingModal";
import ComponentCard from "../common/ComponentCard";

import SectionTitle from "../ui/sectionTitle";
import { renderField } from "./RenderField";

interface DynamicFormHandlerProps<T extends FieldValues> {
  onSubmit?: SubmitHandler<T>;
  apiEndpoint: string;
  method: "POST" | "PATCH";
  imageFields?: string[];
  children?: React.ReactNode;
  fieldConfigs: any;
  submitButtonText: string;
}

const AddForm = <T extends FieldValues>({
  onSubmit,
  apiEndpoint,
  method,
  imageFields = [],
  fieldConfigs,
  submitButtonText,
}: DynamicFormHandlerProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: SubmitHandler<T> = useCallback(
    async (data) => {
      setIsLoading(true);
      try {
        let payload: Record<string, any> = { ...data };

        if (imageFields.length > 0) {
          const uploadPromises = imageFields.map(async (field) => {
            if (data[field]) {
              const urls = await ImageUploader(data[field]);
              return { field, urls };
            }
            return { field, urls: [] };
          });

          const uploadedImages = await Promise.all(uploadPromises);

          uploadedImages.forEach(({ field, urls }) => {
            payload[field] =
              urls?.map((image) => ({
                src: image,
              })) ?? [];

            // delete payload[field];
          });
        }

        const response = await axios({
          method,
          url: `${getBaseUrl()}${apiEndpoint}`,
          data: payload,
        });

        toast.success(response?.data?.message);
        return response.data;
      } catch (err: any) {
        console.error(err);
        toast.error(err.response?.data?.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [apiEndpoint, method, imageFields],
  );

  // Helper function to render fields dynamically

  return (
    <>
      <LoadingModal
        isOpen={isLoading}
        message={`Processing ${method} request...`}
      />

      <ComponentCard title="Hospital Management">
        <LoadingModal isOpen={isLoading} message="Posting Hospital..." />
        {/* <div className="mb-4 flex justify-end">
          <button className="btn btn-primary">List of Hospitals</button>
        </div> */}
        <Form submitHandler={onSubmit || handleSubmit}>
          {Object.values(fieldConfigs).map((section: any) => (
            <div key={section.title} className="space-y-6">
              <SectionTitle>{section.title}</SectionTitle>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {section.fields.map((field: any) => renderField(field))}
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-primary rounded-md px-6 py-2 text-white transition-colors hover:bg-black"
            >
              {submitButtonText}
            </button>
          </div>
        </Form>
      </ComponentCard>
    </>
  );
};

export default AddForm;
