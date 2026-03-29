// frontend/components/TransactionHistory.tsx
import React from "react";
import TradeItem from "./TradeItem"; // adjust path if needed

interface TradeHistoryProps {
  trades: any[];
  loading: boolean;
}

export default function TransactionHistory({ trades, loading }: TradeHistoryProps) {
  if (loading) {
    return <div className="loading-state">Loading trades...</div>;
  }

  if (!trades || trades.length === 0) {
    return (
      <div className="empty-state" style={{ textAlign: "center", padding: "2rem" }}>
        <img
          src="/empty-history.svg"
          alt="No trades yet"
          style={{ width: "150px", marginBottom: "1rem" }}
        />
        <p style={{ fontSize: "1rem", color: "#555" }}>
          You haven’t made any trades yet. Start by selecting a pair to swap!
        </p>
      </div>
    );
  }

  return (
    <div className="trade-list">
      {trades.map((trade) => (
        <TradeItem key={trade.id} trade={trade} />
      ))}
    </div>
  );
}