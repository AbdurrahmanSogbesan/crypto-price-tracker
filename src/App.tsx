import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import { CryptoTable } from "./components/CryptoTable";
import { Pagination } from "./components/Pagination";
import { API_URL } from "./constants";
import { ApiResponse, CryptoData } from "./types";

export function App() {
  const [data, setData] = useState<CryptoData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCoins, setTotalCoins] = useState(0);
  const [isPending, startTransition] = useTransition();
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const start = (currentPage - 1) * itemsPerPage;
        const response = await axios.get<ApiResponse>(
          `${API_URL}/tickers/?start=${start}&limit=${itemsPerPage}`
        );

        startTransition(() => {
          setData(response.data.data);
        });
        setTotalCoins(response.data.info.coins_num);
        setError(null);
      } catch (error) {
        setError(
          "Failed to fetch cryptocurrency data. Please try again later."
        );
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(totalCoins / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {error ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        ) : (
          <div className="w-fit m-auto shadow-lg">
            <div className={isPending ? "opacity-50 transition-opacity" : ""}>
              <CryptoTable data={data} />
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
