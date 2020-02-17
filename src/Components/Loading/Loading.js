import React from "react";

import "./Loading.scss";
export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__content">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
}
