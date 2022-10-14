/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  Item } from 'react-photoswipe-gallery'

interface IProp {
  original: string;
  thumbnail: string;
  width: string;
  height: string;
}

export const LightBoxItem: React.FC<IProp> = ({original, thumbnail, width, height}) => {

  return (
    <Item
      original={original}
      thumbnail={thumbnail}
      width={width}
      height={height}
    >
      {({ ref, open }) => (
        <img
          ref={ref as React.MutableRefObject<HTMLImageElement>}
          onClick={open}
          src={thumbnail}
          alt="package-img"
        />
      )}
    </Item>
  );
};
