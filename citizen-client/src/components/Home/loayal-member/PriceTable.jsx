const PriceTable = () => {
  return (
    <div className="">
      <h3 className="text-lg font-bengali font-bold mb-3">
        সদস্য ফি ও সার্ভিস চার্জ:
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-center font-bengali">
          <thead>
            <tr className="bg-gray-100 text-sm">
              <th className="border border-gray-300 px-3 py-2">সদস্য সংখ্যা</th>
              <th className="border border-gray-300 px-3 py-2">
                রেজিস্ট্রেশন ফি (বাৎসরিক)
              </th>
              <th className="border border-gray-300 px-3 py-2">
                মাসিক সেবা চার্জ
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            <tr>
              <td className="border border-gray-300 px-3 py-2">একক সদস্য</td>
              <td className="border border-gray-300 px-3 py-2">৫০০০ টাকা</td>
              <td className="border border-gray-300 px-3 py-2">৪৪৪৪ টাকা</td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-3 py-2">
                পরিবার (২ জন)
              </td>
              <td className="border border-gray-300 px-3 py-2">৯৯৯৯ টাকা</td>
              <td className="border border-gray-300 px-3 py-2">৮৮৮৮ টাকা</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
