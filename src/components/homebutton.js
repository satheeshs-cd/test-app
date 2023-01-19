import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { homeIcon } from "../../assets/image";

const HomeButton = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <Image
          source={homeIcon}
          style={{ width: 40, height: 40, backgroundColor: "#3DB1F2" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;
