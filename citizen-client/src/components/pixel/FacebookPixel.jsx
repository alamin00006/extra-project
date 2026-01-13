"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FB_PIXEL_IDS = ["1568445817501030", "1397716988740500"];

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.fbq) return;

    const eventId = uuidv4();

    // Browser event (sent to ALL initialized pixels)
    window.fbq("track", "PageView", {}, { eventID: eventId });

    // Conversions API (deduplication)
    fetch("/api/facebook/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: "PageView",
        event_id: eventId,
        url: window.location.href,
        user_agent: navigator.userAgent,
      }),
    });
  }, [pathname]);

  return (
    <>
      {/* Load FB Pixel once */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            ${FB_PIXEL_IDS.map((id) => `fbq('init', '${id}');`).join("")}
          `,
        }}
      />

      {/* NoScript fallback */}
      {FB_PIXEL_IDS.map((id) => (
        <noscript key={id}>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      ))}
    </>
  );
}
