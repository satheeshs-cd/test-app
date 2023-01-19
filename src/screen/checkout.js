import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CheckOut = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#3DB1F2" }}>
      <View style={styles.container}>
        <Text style={styles.text}>Chexkout</Text>
      </View>
    </View>
  );
};

export default CheckOut;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    alignItems: "center",
    marginTop: 20,
  },
});
