import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActionCard = (props) => {
  const navigation = useNavigation();
  const navPage = props.navPage;
  const actionText = props.text;
  const actionIcon = props.image;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navPage);
        }}
      >
        <View style={styles.card}>
          <View>
            <Image source={actionIcon} style={styles.icon} />
            <Text style={styles.text}>{actionText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },

  icon: {
    width: 120,
    height: 120,
  },
  card: {
    width: 280,
    height: 210,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    border: " 1px solid #CFCFCF",
    backgroundColor: "#F6F6F6",
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
});
