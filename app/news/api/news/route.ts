import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ articles: [] }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=bonds&sortBy=publishedAt&apiKey=${apiKey}`
    );
    const data = await res.json();

    if (!Array.isArray(data.articles)) {
      return NextResponse.json({ articles: [] }, { status: 200 });
    }

    return NextResponse.json({ articles: data.articles });
  } catch (error) {
    return NextResponse.json({ articles: [] }, { status: 500 });
  }
}
