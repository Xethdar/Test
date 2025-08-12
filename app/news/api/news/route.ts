import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY; // No NEXT_PUBLIC_ here, keeps it server-only
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing NEWS_API_KEY environment variable" },
      { status: 500 }
    );
  }

  try {
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
    return NextResponse.json({ articles: data.articles || [] });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching news" }, { status: 500 });
  }
}
