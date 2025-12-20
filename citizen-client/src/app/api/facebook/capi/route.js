import { NextResponse } from "next/server";

const FB_PIXEL_ID = "1568445817501030";
const FB_ACCESS_TOKEN =
  "EAAXBFf3smIYBQITAfWwefvPLWk1qG4gvMmcZCLV4ls9Qp2zAKJfIgeu9W5iV5wWgXhlt0bOjhctz0PZACK6e9sVIPC0JyPY5yZAnQWdDfstVM8J6Op8oTPuoiRlwERGGQnZBwuhyxy93gqlwOC2JuTgT6F1bZA96WVp5PTE3ua70wpdNEoRciUGeT4BgnCgZDZD";

export async function POST(req) {
  const body = await req.json();

  const payload = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.event_id, // 🔥 Deduplication
        event_source_url: body.url,
        action_source: "website",
        user_data: {
          client_user_agent: body.user_agent,
          client_ip_address:
            req.headers.get("x-forwarded-for")?.split(",")[0] || "",
          fbp: req.cookies.get("_fbp")?.value,
          fbc: req.cookies.get("_fbc")?.value,
        },
      },
    ],
  };

  await fetch(
    `https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return NextResponse.json({ success: true });
}
