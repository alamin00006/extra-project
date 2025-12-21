"use client";

import AddForm from "@/components/form/AddForm";
import { fieldConfigs } from "./practiceField";

const AddPractice = () => {
  return (
    <AddForm<any>
      apiEndpoint="/hospital/create-hospital"
      method="POST"
      imageFields={["logo", "banners"]}
      fieldConfigs={fieldConfigs}
      submitButtonText="Add Hospital"
    />
  );
};

export default AddPractice;
