import crypto from "node:crypto";
import { show, shows } from "./data";

export async function GET() {
  return Response.json(shows);
}

export async function POST(request: Request) {
  const show = await request.json();
  const newShow: show = {
    id: crypto.randomUUID(),
    date: show.date,
    name: show.name,
    country: show.country,
    countryCode: show.countryCode,
    description: show.description,
    image: show.image,
  };

  shows.push(newShow);

  return new Response(JSON.stringify(newShow), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
