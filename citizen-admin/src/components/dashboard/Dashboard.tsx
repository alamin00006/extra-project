export default function Dashboard() {
  const stats = [
    { title: "Total Hospitals", value: "15" },
    { title: "Total Users", value: "10K" },
    { title: "Total Doctors", value: "105" },
    { title: "Total Appointments", value: "3K" },
    { title: "Cancelled Appointment", value: "19", textColor: "text-red-500" },
    { title: "Rejected Appointment", value: "05", textColor: "text-red-500" },
    { title: "Completed Appointment", value: "2.9K" },
    { title: "Visited Appointment", value: "105" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <div className="rounded-lg bg-blue-500 p-6 text-white shadow-md">
          <h2 className="text-xl font-bold">Welcome Back!</h2>
          <p className="text-sm">Popular Hospital, Dhaka</p>
          <div className="mt-4 flex items-center gap-4">
            <div>
              <p className="font-semibold">Admin</p>
              <p className="text-xs">admin@popularhospital.com</p>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p>
              Total Active Doctors: <span className="font-semibold">15</span>
            </p>
            <p>
              Total Appointments: <span className="font-semibold">105</span>
            </p>
            <p>
              Total Patients: <span className="font-semibold">65</span>
            </p>
            <p>
              Today’s Appointments: <span className="font-semibold">05</span>
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md"
            >
              <p className="text-lg font-semibold text-gray-700">
                {stat.title}
              </p>
              <p
                className={`text-xl font-bold ${stat.textColor || "text-blue-600"}`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
