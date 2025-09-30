"use client";
import ComponentCard from "@/components/common/ComponentCard";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { IHospital } from "@/components/types/hospital";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [data, setData] = useState<IHospital[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${getBaseUrl()}/hospital`);
        const result = await response.json();
        setData(result?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <ComponentCard title="Hospital List">
      <div className="overflow-x-auto">
        {" "}
        {/* For responsive tables */}
        <Table className="border border-gray-300">
          {/* Table Header */}
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableCell isHeader className="px-4 py-2 text-left">
                Hospital Name
              </TableCell>
              <TableCell isHeader className="px-4 py-2 text-left">
                Hospital Type
              </TableCell>
              <TableCell isHeader className="px-4 py-2 text-left">
                Hospital Reg.No.
              </TableCell>

              <TableCell isHeader className="px-4 py-2 text-left">
                Contact Number
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {data?.map((hospital) => (
              <TableRow className="border-b" key={hospital.id}>
                <TableCell className="px-4 py-2">
                  {hospital?.hospitalName}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {hospital?.hospitalType}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {hospital?.hospitalRegistrationNum}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {hospital?.contactNumber}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ComponentCard>
  );
};

export default ProductList;
