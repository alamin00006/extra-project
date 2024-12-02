"use client";

import ServiceSidebar from "@/components/Pages/Services/ServiceSidebar";

export default function ServiceLayout({ children }) {
  return (
    <div className="custom-container mt-[10px]  ">
      <div className="grid grid-cols-12">
        <div className="md:col-span-4 sm:col-span-12">
          <ServiceSidebar />
        </div>

        <main className="md:col-span-8 sm:col-span-12 md:mx-0 sm:mx-3">
          {children}
        </main>
      </div>
    </div>
  );
}
