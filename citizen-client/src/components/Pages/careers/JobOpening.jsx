export default function JobOpenings() {
    const jobs = [
      {
        title: "Medical Information Officer",
        experience: "Minimum 1 year",
        education: "Graduation in any discipline",
        salary: "30k, incentive, 3 festival bonus",
        age: "Up to 35",
        responsibilities: [
          "To share product information effectively & efficiently to healthcare professionals for creating demand.",
          "To collect sales orders from chemists to achieve business objectives.",
        ],
        location: "Inside Dhaka",
        office: "32/A, Road-02, Dhanmondi, Dhaka-1205",
        email: "citizencarebd@gmail.com",
      },
      {
        title: "Nutritionist and Diet Consultant",
        experience: "At least 2 years",
        education: "Master of Science (MSc) in Food and Nutrition",
        salary: "Negotiable",
        location: "Inside Dhaka",
        office: "32/A, Road-02, Dhanmondi, Dhaka-1205",
        email: "citizencarebd@gmail.com",
      },
    ];
  
    return (
      <div className="custom-container mt-12 px-4 sm:px-0 lg:px-8 mb-5">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 uppercase mb-8 text-center">
          Current Job Openings
        </h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-300 p-6 sm:p-6 rounded-lg shadow-md bg-white flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{job.title}</h3>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Experience:</span> {job.experience}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Education:</span> {job.education}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Salary:</span> {job.salary}
                </p>
                {job.age && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Age:</span> {job.age}
                  </p>
                )}
                {job.responsibilities && (
                  <ul className="mt-3 list-disc list-inside text-gray-700">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
                <p className="mt-4 text-sm text-gray-600">
                  <span className="font-semibold">Location:</span> {job.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Office:</span> {job.office}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href={`mailto:${job.email}`} className="text-blue-600 hover:underline">
                    {job.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  