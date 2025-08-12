"use client";

import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("/news/api/news");
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setArticles(Array.isArray(data.articles) ? data.articles : []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Pagination = () => (
    <div className="flex justify-center gap-2 mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1 bg-green-400 text-black rounded disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => handlePageChange(num)}
          className={`px-3 py-1 rounded ${
            currentPage === num
              ? "bg-green-500 text-black"
              : "bg-gray-800 text-white hover:bg-green-400 hover:text-black"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-1 bg-green-400 text-black rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-green-400" />
            <span className="text-xl font-bold">SlickTunnel</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { label: "Features", id: "features" },
              { label: "How It Works", id: "how-it-works" },
              { label: "FAQ", id: "faq" },
              { label: "About Us", id: "about-us" },
              { label: "Contact Us", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm font-medium hover:text-green-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div>
            <button
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              className="text-sm font-medium bg-green-400 text-black px-4 py-2 rounded hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Latest Bond News
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading news...</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-400">No news articles available.</p>
        ) : (
          <>
            {totalPages > 1 && <Pagination />}

            <ul className="space-y-4 mt-6">
              {currentArticles.map((article, index) => (
                <li key={index} className="border-b border-gray-700 pb-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400 transition-colors"
                  >
                    <h3 className="text-lg font-bold">{article.title}</h3>
                    <p className="text-gray-400 text-sm">{article.description}</p>
                  </a>
                </li>
              ))}
            </ul>

            {totalPages > 1 && <Pagination />}
          </>
        )}
      </main>
    </div>
  );
}
