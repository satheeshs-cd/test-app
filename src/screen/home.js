import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { actionCardInfo } from "./../common/index";
import ActionCard from "./../components/actionCard";

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderText}>
      <View style={styles.actionPanel}>
        <View style={styles.actionButtonContainer}>
          <ActionCard
            image={actionCardInfo.appointment?.image}
            text={actionCardInfo.appointment?.text}
            navPage={actionCardInfo.appointment?.navPage}
          />
          <ActionCard
            image={actionCardInfo.visitor?.image}
            text={actionCardInfo.visitor?.text}
            navPage={actionCardInfo.visitor?.navPage}
          />
          <ActionCard
            image={actionCardInfo.delivery?.image}
            text={actionCardInfo.delivery?.text}
            navPage={actionCardInfo.delivery?.navPage}
          />
        </View>
        <View style={styles.actionButtonContainer}>
          <ActionCard
            image={actionCardInfo.checkout?.image}
            text={actionCardInfo.checkout?.text}
            navPage={actionCardInfo.checkout?.navPage}
          />
        </View>
        <View style={styles.smallActionButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("emergency")}>
            <Text style={styles.emergencyButton}>Emergency</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  actionPanel: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignContent: "space-around",
    justifyContent: "space-around",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  smallActionButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  HeaderText: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3DB1F2",
  },
  text: {
    fontSize: 20,
    alignItems: "center",
  },
  emergencyButton: {
    padding: 20,
    color: "#FF2E2E",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#FF2E2E",
    fontSize: 26,
    borderRadius: 40,
  },
});

export default Home;
