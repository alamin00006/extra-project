import * as yup from "yup";

export const projectSchema = yup.object().shape({
  projectTitle: yup.string().required("Project Title is required"),
});
