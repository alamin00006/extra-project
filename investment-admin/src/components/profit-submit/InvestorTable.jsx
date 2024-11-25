import { afterOneYear } from "@/utilis/afterOneYear";
import { afterSixMonth } from "@/utilis/afterSixMonth";
import { formatDate } from "@/utilis/dateConvert";

const InvestorTable = ({ projectInvestor }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-bordered table w-full">
        <thead>
          <tr className="text-sm">
            <th>Inv.Id</th>
            <th>Investor</th>
            <th>Project Title</th>
            <th>Project Type</th>
            <th>Pay Method</th>
            <th>Inv. Amount</th>
            <th>Share</th>
            <th>Return Type</th>
            <th>Profit Share Date</th>
            <th>Duration of Invest</th>
            <th>Profit Ratio</th>
          </tr>
        </thead>
        <tbody>
          {projectInvestor?.map((investment, index) => (
            <tr key={investment._id} className="text-sm">
              <td>#{investment?._id?.slice(19)}</td>
              <td>{investment?.userId?.name}</td>
              <td>{investment.projectInfo?.projectTitle}</td>
              <td className="font-bold">
                {investment.projectInfo?.projectType}
              </td>
              <td>{investment.paymentMethod}</td>
              <td className="w-40 font-bold">
                Tk {investment?.investmentAmount?.toLocaleString()}
              </td>
              <td className="w-30 font-bold">
                {investment?.totalBuyShare?.toLocaleString()} Share
              </td>
              <td>{investment.returnType}</td>
              <td className="text-red-600 w-32 font-bold">
                {investment?.returnType === "Yearly"
                  ? formatDate(afterOneYear(investment?.firstReturnDate))
                  : investment?.returnType === "Monthly"
                  ? formatDate(investment?.firstReturnDate)
                  : formatDate(afterSixMonth(investment?.firstReturnDate))}
              </td>
              <td>
                {investment.projectInfo?.projectType === "Co-ownership" ? (
                  <div className="text-center font-bold">
                    <span>-</span>
                  </div>
                ) : (
                  `${investment.durationOfInvest} Year`
                )}
              </td>
              <td>Upto {investment?.percentOfReturn}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestorTable;
