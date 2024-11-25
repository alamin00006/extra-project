import EditProject from "@/components/projects/EditProject/EditProject";

export const metadata = {
  title: "Projects Update",
};

const ProjectUpdatePage = ({ params }) => {
  return (
    <>
      <EditProject params={params} />
    </>
  );
};

export default ProjectUpdatePage;
