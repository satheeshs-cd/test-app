import React from "react";
import { View, Image} from "react-native";


const CdLogo = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../../assets/headerLogo.png")}
        style={{width: 40, 
                height: 40,
                backgroundColor:"#3DB1F2"
              }}
      />
    </View>
  );
};

export default CdLogo;