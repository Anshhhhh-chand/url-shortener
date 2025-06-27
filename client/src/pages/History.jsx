// client/src/pages/History.jsx
import { useEffect, useState } from "react";

export default function History() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("shortenedUrls")) || [];
    setUrls(stored);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Shortened URL History</h2>
      {urls.length === 0 ? (
        <p>No shortened URLs found.</p>
      ) : (
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 mt-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
               style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
            {urls.map((url, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md w-full break-words transform transition-transform duration-300 hover:scale-105 aspect-[3/2] min-h-[160px] min-w-[200px] flex flex-col justify-between"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-2">
                  #{index + 1}
                </p>
                <p className="text-base font-medium text-gray-700 dark:text-gray-200">
                  Original:
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 break-all mb-2">
                  {url.original}
                </p>
                <p className="text-base font-medium text-gray-700 dark:text-gray-200">
                  Shortened:
                </p>
                <a
                  href={url.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline break-all"
                >
                  {url.short}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
