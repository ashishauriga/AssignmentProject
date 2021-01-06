import React, { FC } from "react";
import { ActivityIndicator } from "react-native";

export type SpinnerProps = ActivityIndicator & {
  size?: "small" | "large" | number;
  color?: string;
  style?: any;
};
export const Spinner: FC<SpinnerProps> = ({ size, ...props }) => {
  const internalColor = "primary.100";
  return <ActivityIndicator animating size={size} color={internalColor} {...props} />;
};
Spinner.defaultProps = {
  color: "primary.100",
  size: "small",
};
