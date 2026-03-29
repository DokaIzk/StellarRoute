import React from "react";

interface RouteProps {
  route?: any;
  loading: boolean;
}

export default function RouteDisplay({ route, loading }: RouteProps) {
  if (loading) {
    return <div className="loading-state">Calculating route...</div>;
  }

  if (!route) {
    return (
      <div className="empty-state" style={{ textAlign: "center", padding: "2rem" }}>
        <img
          src="/no-route.svg"
          alt="No route found"
          style={{ width: "150px", marginBottom: "1rem" }}
        />
        <p style={{ fontSize: "1rem", color: "#555" }}>
          Sorry, no route found. Try selecting a different pair.
        </p>
      </div>
    );
  }

  return (
    <div className="route-display">
      {/* Render the actual route here */}
    </div>
  );
}