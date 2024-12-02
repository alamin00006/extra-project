"use client";
import "./DashboardData.css";
import DashboardStatusCard from "./DashboardStatusCard";

import Return from "./LatestReturn";
import WithdrawTable from "./LatestWithdraw";

const DashboardData = () => {
  // const userId = getUserInfo(authKey);
  // console.log(userId);

  // const [isUser, setIsUser] = useState(false);
  // const userLoggedIn = isLoggedIn(); // Check if the user is logged in

  // useEffect(() => {
  //   if (userLoggedIn) {
  //     setIsUser(true);
  //   } else {
  //     setIsUser(false);
  //   }
  //   // Ensure client-side rendering
  // }, [userLoggedIn]);

  return (
    <>
      <div className=" ms-3">
        <h3>
          {/* {user?.data
            ? user?.data?.name
            : companyUser?.data
            ? `${companyUser?.data?.companyOwnerName} (${companyUser?.data?.companyName}) `
            : ""} */}
        </h3>
      </div>

      <div className="dashboard-data">
        <div>
          <DashboardStatusCard />
        </div>
      </div>
      <div className="dashboard-data">
        <div>
          <Return />
        </div>
      </div>
      <div className="dashboard-data">
        <div>
          <WithdrawTable />
        </div>
      </div>
    </>
  );
};

export default DashboardData;
