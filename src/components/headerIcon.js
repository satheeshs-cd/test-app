import React from "react";
import { Image, View } from "react-native";
import { orgLogo } from "../../assets/image";

const ActionBarImage = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={orgLogo}
        style={{
          top: 6,
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 20,
        }}
      />
    </View>
  );
};

export default ActionBarImage;
