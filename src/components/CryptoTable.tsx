import React from "react";
import { CryptoData } from "../types";

interface CryptoTableProps {
  data: CryptoData[];
}

export const CryptoTable: React.FC<CryptoTableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-t-lg overflow-hidden">
      {/* Desktop View */}
      <table className="hidden md:table min-w-full">
        <thead>
          <tr className="bg-white border-b">
            <th className="px-6 py-3 text-left">
              <div className="flex items-center space-x-1">
                <span role="img" aria-label="coin">
                  💰
                </span>
                <span>Coin</span>
              </div>
            </th>
            <th className="px-6 py-3 text-left">
              <div className="flex items-center space-x-1">
                <span role="img" aria-label="code">
                  📝
                </span>
                <span>Code</span>
              </div>
            </th>
            <th className="px-6 py-3 text-left">
              <div className="flex items-center space-x-1">
                <span role="img" aria-label="price">
                  🤑
                </span>
                <span>Price</span>
              </div>
            </th>
            <th className="px-6 py-3 text-left">
              <div className="flex items-center space-x-1">
                <span role="img" aria-label="supply">
                  📊
                </span>
                <span>Total Supply</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <tr
              key={coin.id}
              className={index % 2 === 1 ? "bg-white" : "bg-zinc-300"}
            >
              <td className="px-6 py-2">{coin.name}</td>
              <td className="px-6 py-2">{coin.symbol}</td>
              <td className="px-6 py-2">
                $
                {Number(coin.price_usd).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 6,
                })}
              </td>
              <td className="px-6 py-2">
                {Number(coin.tsupply).toLocaleString()} {coin.symbol}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="md:hidden">
        {data.map((coin, index) => (
          <div
            key={coin.id}
            className={`p-4 ${index % 2 === 1 ? "bg-white" : "bg-zinc-300"}`}
          >
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="flex items-center gap-1">
                  <span role="img" aria-label="coin">
                    💰
                  </span>
                  <span className="font-bold">Coin</span>
                </div>
                <span>{coin.name}</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span role="img" aria-label="code">
                    📝
                  </span>
                  <span className="font-bold">Code</span>
                </div>
                <span>{coin.symbol}</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span role="img" aria-label="price">
                    🤑
                  </span>
                  <span className="font-bold">Price</span>
                </div>
                <span>
                  $
                  {Number(coin.price_usd).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 6,
                  })}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span role="img" aria-label="supply">
                    📊
                  </span>
                  <span className="font-bold">Total Supply</span>
                </div>
                <span>
                  {Number(coin.tsupply).toLocaleString()} {coin.symbol}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
