import React from 'react'
import CertificateGrayIcon from "assets/images/svg/verified-gray.svg";
import CertificateYellowIcon from "assets/images/svg/verified-yellow.svg";
import CertificateGreenIcon from "assets/images/svg/verified-green.svg";

export enum LevelMarkerColor{
    Green = 1,
    Yellow = 2,
    Gray = 3
}

interface IProp{
    color: LevelMarkerColor
}

function getSrcFromColor(color: LevelMarkerColor){
    if(color === LevelMarkerColor.Green)
        return CertificateGreenIcon;

    if(color === LevelMarkerColor.Gray)
        return CertificateGrayIcon;

    if(color === LevelMarkerColor.Yellow)
        return CertificateYellowIcon;
}

export const LevelMarker : React.FC<IProp> = ({color}) => {
  return (
    <img
    className="card-cover-certificate"
    src={getSrcFromColor(color)}
    alt="profile-img"
    />
  )
}