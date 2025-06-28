// client/src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!url) {
      setError("Please enter a valid URL.");
      return;
    }
    setLoading(true);
    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8001";
const res = await fetch(`${API_BASE}/api/url/shorten`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: url }),
      });
      const data = await res.json();
      if (res.ok && data.shortUrl) {
        navigate("/success", { state: { shortUrl: data.shortUrl, originalUrl: url } });
      } else {
        setError(data.error || "Failed to shorten URL.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="card transition-all duration-500 ease-out transform animate-fade-in shadow-xl hover:scale-[1.025]">
        <h1 className="text-3xl font-bold mb-2">URL Shortener</h1>
        <p className="mb-6 text-gray-500">Paste your long URL below to get a short, shareable link!</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
          <input
            type="url"
            className="bg-[#f1f5f9] text-[#22223b] dark:bg-[#232946] dark:text-[#f4f4f4] dark:border-[#393e46] border border-[#e2e8f0] rounded px-4 py-2 w-full mb-2 transition-colors duration-200"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            aria-label="Long URL"
            autoFocus
          />
          <button
            type="submit"
            className="btn"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </form>
        {error && <div className="error mt-2">{error}</div>}
      </div>
    </main>
  );
}
