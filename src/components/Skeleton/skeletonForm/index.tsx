import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonForm = ({ ...rest }) => (
  <>
    <ContentLoader
      height={200}
      width={400}
      viewBox="0 0 400 200"
      backgroundColor="#d9d9d9"
      foregroundColor="#ecebeb"
      {...rest}
    >
      <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
      <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
      <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
      <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
      <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
      <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
      <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
      <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
      <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
    </ContentLoader>

    <ContentLoader viewBox="0 0 400 160" height={160} width={400} {...rest}>
      <rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
      <rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
      <rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
      <rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
      <rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
      <rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
    </ContentLoader>
  </>
);
