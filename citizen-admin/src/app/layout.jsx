"use client";

import "@/css/satoshi.css";
import "@/css/style.css";

import { Providers } from "@/redux/providers";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>
        </body>
      </html>
    </Providers>
  );
}
