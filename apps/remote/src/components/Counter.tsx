import { useState } from "react";

interface CounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
}

export default function Counter({
  initialValue = 0,
  step = 1,
  label = "Counter",
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        padding: "24px",
        backgroundColor: "#1e293b",
        border: "1px solid #334155",
        borderRadius: "12px",
        width: "fit-content",
      }}
    >
      <span style={{ fontSize: "14px", color: "#64748b", fontWeight: 500 }}>
        {label}
      </span>
        <span style={{ fontSize: "64px", fontWeight: 700, color: "#ffffff", fontFamily: "monospace" }}>
        {count}
      </span>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => setCount((c) => Math.max(0, c - step))}
          style={{ ...btnStyle, opacity: count <= 0 ? 0.5 : 1, cursor: count <= 0 ? 'not-allowed' : 'pointer' }}
          disabled={count <= 0}
        >
          −
        </button>
        <button
          onClick={() => setCount(initialValue)}
          style={{ ...btnStyle, backgroundColor: "#f1f5f9", color: "#64748b" }}
        >
          Reset
        </button>
        <button onClick={() => setCount((c) => c + step)} style={btnStyle}>
          +
        </button>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  backgroundColor: "#6366f1",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px 16px",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "18px",
};
