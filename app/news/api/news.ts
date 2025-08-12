// app/news/api/news.ts
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY; // or process.env.NEWS_API_KEY if you want it private
  const url = `https://newsapi.org/v2/everything?q=bonds&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch news" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
