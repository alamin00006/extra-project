import Statement from "@/components/Statement/Statement";

export const metadata = {
  title: "Sharikana | Statement",
};

const StatementPage = ({ params }) => {
  return (
    <>
      <Statement params={params} />
    </>
  );
};

export default StatementPage;
