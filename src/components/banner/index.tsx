import React from "react";
import { Header } from "components";

export const Banner: React.FC = () => {
  return (
    <div className="img-banner-Wrapper">
      <Header />
      <div className="banner-text">
        <h1 className="banner-title">
          Platform to help and earn when you travel
        </h1>
        <span className="banner-subtitle">
          Make your travel the most comfortable and affordable
        </span>
      </div>
    </div>
  );
};
