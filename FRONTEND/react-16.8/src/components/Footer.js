import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <span style={{ color: "#1C5CC4" }}>Privacy Policy</span>
      <span style={{ marginLeft: "12px", color: "black" }}>
        | © 2023 Highradius Corporation.All Rights Reserved.
      </span>
    </div>
  );
}
