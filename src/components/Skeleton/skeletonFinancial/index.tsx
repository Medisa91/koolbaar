import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonFinancial = ({ ...rest }) => (
  <ContentLoader height="400" width="450" viewBox="0 0 450 400" {...rest}>
    <rect x="15" y="15" rx="4" ry="4" width="300" height="25" />
    <rect x="15" y="50" rx="2" ry="2" width="40" height="15" />
    <rect x="75" y="45" rx="16" ry="16" width="55" height="22" />
    <rect x="15" y="75" rx="3" ry="3" width="400" height="15" />
    <rect x="15" y="140" rx="3" ry="3" width="50" height="15" />
    <rect x="75" y="140" rx="3" ry="3" width="50" height="15" />
    <rect x="135" y="140" rx="3" ry="3" width="50" height="15" />
    <rect x="15" y="135" rx="16" ry="16" width="55" height="22" />
    <rect x="15" y="210" rx="2" ry="2" width="210" height="50" />
    <rect x="400" y="180" rx="2" ry="2" width="40" height="20" />
  </ContentLoader>
);
