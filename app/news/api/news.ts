// pages/api/news.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Missing NEWS_API_KEY environment variable." });
    }

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=bonds&sortBy=publishedAt&apiKey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`News API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Ensure articles is always an array
    const articles = Array.isArray(data.articles) ? data.articles : [];

    res.status(200).json({ articles });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
