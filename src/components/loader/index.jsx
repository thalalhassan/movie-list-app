import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-12"
        role="status"
      >
      </div>
    </div>
  );
}
