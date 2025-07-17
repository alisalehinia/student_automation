import React from "react";

export default function Spinner({ size = 20, color = "border-blue-500 " }) {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-2 ${color} border-t-transparent`}
      style={{ width: size, height: size }}
    />
  );
}
