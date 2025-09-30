"use client";

import { IHospital } from "@/components/types/hospital";
import AddForm from "@/components/form/AddForm";
import { fieldConfigs } from "./practiceField";

const AddPractice = () => {
  return (
    <AddForm<IHospital>
      apiEndpoint="/hospital/create-hospital"
      method="POST"
      imageFields={["logo", "banners"]}
      fieldConfigs={fieldConfigs}
      submitButtonText="Add Hospital"
    />
  );
};

export default AddPractice;
