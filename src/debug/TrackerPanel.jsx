import React, { useEffect, useState } from "react";
import ComponentTracker from "./ComponentTracker.jsx";

export default function TrackerPanel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Refresh every second to grab latest data
    const interval = setInterval(() => {
      setData(ComponentTracker.getAll());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "320px",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        color: "white",
        overflowY: "auto",
        padding: "8px",
        fontFamily: "monospace",
        fontSize: "12px",
        zIndex: 9999,
      }}
    >
      <h3 style={{ marginTop: 0, fontSize: "14px" }}>🔬 Components Rendered</h3>
      {data.map(({ name, props }, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          <strong>{name}</strong>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(props, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}
