import React, { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import ContactInput from "../components/contactInput";
import VisitorDropdown from "../components/visitorDropdown";

const VisitorPage = ({ navigation }) => {
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorNameError, setVisitorNameError] = useState("");
  const [visitorEmailError, setVisitorEmailError] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [dropdownError, setDropDownError] = useState("");

  const validation = () => {
    var visitorValid = false;

    if (visitorName === "") {
      setVisitorNameError("*please Enter the Visitor Name");
    } else {
      setVisitorNameError("");
      visitorValid = true;
    }

    var contactValid = false;

    if (contactNumber.length === 0) {
      setContactNumberError(" *please Enter the Contact Number");
    } else {
      setContactNumberError("");
      contactValid = true;
    }

    var dropdownValid = false;

    if (dropDown == "") {
      setDropDownError(" *please select purpose of visit");
    } else {
      setDropDownError("");
      dropdownValid = true;
    }

    if (visitorValid && contactValid && dropdownValid) {
      setVisitorNameError("");
      setContactNumberError("");
      setDropDownError("");

      navigation.navigate("interview");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#3DB1F2" }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ padding: 100 }}>
            <View style={styles.textinput}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => setVisitorName(text)}
                value={visitorName}
              />

              {visitorNameError.length > 0 && (
                <Text style={styles.errorStyle}> {visitorNameError}</Text>
              )}
            </View>

            <View style={styles.textinput}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setVisitorEmail(text)}
                value={visitorEmail}
              />

              {visitorEmailError.length > 0 && (
                <Text style={styles.errorStyle}>{visitorEmailError}</Text>
              )}
            </View>

            <View style={styles.textinput}>
              <ContactInput
                setContactNumber={setContactNumber}
                contactNumberError={contactNumberError}
              />
            </View>

            <View style={styles.textinput}>
              <VisitorDropdown
                setDropDown={setDropDown}
                dropdownError={dropdownError}
              />
            </View>

            <View style={styles.button}>
              <TouchableOpacity>
                <Button
                  style={styles.buttonstyle}
                  buttonColor="#3DB1F2"
                  textColor="white"
                  onPress={() => {
                    validation();
                  }}
                >
                  Next
                </Button>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    align: "center",
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textinput: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  input: {
    borderColor: "grey",
    textAlign: "left",
    padding: 10,
    borderWidth: 1,
    width: 300,
    height: 50,
    fontWeight: "bold",
    borderRadius: 50,
  },
  phoneinput: {
    borderColor: "grey",
    textAlign: "left",
    padding: 10,
    borderWidth: 1,
    width: 300,
    height: 50,
    fontWeight: "bold",
    borderRadius: 50,
  },
  dropdown: {
    borderColor: "grey",
    textAlign: "left",
    padding: 10,
    borderWidth: 1,
    width: 300,
    height: 50,
    fontWeight: "bold",
    borderRadius: 50,
  },
  dropdownstyles: {
    height: 40,
    borderColor: "grey",
    borderRadius: 8,
    paddingHorizontal: 18,
  },
  button: {
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  buttonstyle: {
    marginTop: 20,
    width: 100,
    height: 50,
    justifyContent: "center",
    borderRadius: 50,
  },
  errorStyle: {
    color: "red",
    textAlign: "left",
    width: 300,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});

export default VisitorPage;
