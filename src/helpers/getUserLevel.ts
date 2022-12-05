import { LevelMarkerColor } from "components/common/levelMarker";

export function getUserLevelColor(userLevel: string) {
  if (userLevel === "VerifiedUser") return LevelMarkerColor.Green;

  if (userLevel === "SuperUser") return LevelMarkerColor.Yellow;

  if (userLevel === "RegularUser") return LevelMarkerColor.Gray;
}
