import React, { useEffect, useState } from "react";
import ComponentTracker from "./ComponentTracker.jsx";

export default function TrackerPanel() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  // periodically pull latest registry data
  useEffect(() => {
    const interval = setInterval(() => {
      setData(ComponentTracker.getAll());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (name) => {
    setSelected(name);
  };

  const selectedItem = data.find((item) => item.name === selected);

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "350px",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.9)",
        color: "white",
        fontFamily: "monospace",
        fontSize: "12px",
        display: "flex",
        flexDirection: "column",
        zIndex: 9999,
        borderLeft: "1px solid #444",
      }}
    >
      <div
        style={{
          padding: "8px 10px",
          fontWeight: "bold",
          borderBottom: "1px solid #444",
        }}
      >
        🔬 Component Tracker
      </div>

      {/* list area */}
      <div
        style={{
          flex: "1 1 auto",
          overflowY: "auto",
          borderBottom: "1px solid #444",
        }}
      >
        {data.length === 0 && (
          <div style={{ padding: "10px", opacity: 0.6 }}>
            Waiting for render…
          </div>
        )}
        {data.map(({ name }) => (
          <div
            key={name}
            onClick={() => handleSelect(name)}
            style={{
              padding: "6px 10px",
              cursor: "pointer",
              backgroundColor:
                name === selected ? "rgba(255,255,255,0.15)" : "transparent",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {name}
          </div>
        ))}
      </div>

      {/* props display area */}
      <div style={{ flex: "0 0 auto", maxHeight: "50%", overflowY: "auto" }}>
        {selectedItem ? (
          <div style={{ padding: "8px" }}>
            <div
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid #555",
                marginBottom: "6px",
              }}
            >
              Props for {selectedItem.name}
            </div>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {JSON.stringify(selectedItem.props, null, 2)}
            </pre>
          </div>
        ) : (
          <div style={{ padding: "8px", opacity: 0.6 }}>
            Click a component to view props
          </div>
        )}
      </div>
    </div>
  );
}
