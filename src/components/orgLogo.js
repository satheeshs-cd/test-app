import React from "react";
import { Image, View } from "react-native";
import { orgLogo } from "../../assets/image";

const OrgLogo = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={orgLogo}
        style={{ width: 40, height: 40, backgroundColor: "#3DB1F2" }}
      />
    </View>
  );
};

export default OrgLogo;
