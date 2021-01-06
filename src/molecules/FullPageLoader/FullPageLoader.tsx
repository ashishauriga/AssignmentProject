import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { Spinner, SpinnerProps } from "@atom/Spinner";

type FullPageLoader = {} & SpinnerProps;
export const FullPageLoader: FC<FullPageLoader> = (props) => {
  return (
    <View style={styles.spinner}>
      <Spinner {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
