// app/news/api/news/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing NEWS_API_KEY environment variable" },
        { status: 500 }
      );
    }

    const res = await fetch(
      `https://newsapi.org/v2/everything?q=bonds&sortBy=publishedAt&apiKey=${apiKey}`
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from NewsAPI" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error fetching news" },
      { status: 500 }
    );
  }
}
