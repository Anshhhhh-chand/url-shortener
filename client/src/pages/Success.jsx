// client/src/pages/Success.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const shortUrl = location.state?.shortUrl;
  const originalUrl = location.state?.originalUrl;

  useEffect(() => {
    if (!shortUrl || !originalUrl) {
      navigate("/");
      return;
    }
    // Save to localStorage
    const stored = JSON.parse(localStorage.getItem("shortenedUrls")) || [];
    stored.unshift({ original: originalUrl, short: shortUrl });
    localStorage.setItem("shortenedUrls", JSON.stringify(stored));
  }, [shortUrl, originalUrl, navigate]);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold text-green-600">✅ Success!</h2>
      <p className="mt-4 text-lg">Your shortened URL is:</p>
      <div className="mt-2">
        <a
          href={shortUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline text-xl"
        >
          {shortUrl}
        </a>
      </div>
      <button
        onClick={handleCopy}
        className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}
