import React from "react";

export default function Highlight({ text }) {
  return (
    <div
      style={{
        padding: "8px",
        background: "#fffae5",
        borderRadius: "4px",
        border: "1px solid #facc15",
        margin: "12px 0",
      }}
    >
      <strong>{text}</strong>
    </div>
  );
}
