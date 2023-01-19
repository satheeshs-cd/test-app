import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const VisitorDropdown = (props) => {
  const [value, setValue] = useState(null);

  const handleDropDown = (data) => {
    props.setDropDown(data);
    setValue(data);
  };

  const purpose_of_visit = [
    { label: "Business", value: "1" },
    { label: "Service", value: "2" },
    { label: "Interview", value: "3" },
  ];

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        data={purpose_of_visit}
        labelField="label"
        valueField="value"
        dropdownPosition="down"
        placeholder="purpose of visit"
        placeholderStyle={{ color: "grey", opacity: 1 }}
        selectedTextStyle={{ fontWeight: "bold", fontSize: 15 }}
        value={value}
        containerStyle={{ marginTop: -38 }}
        onChange={(item) => {
          handleDropDown(item.value);
        }}
        itemTextStyle={{ fontWeight: "bold", fontSize: 15 }}
      />
      <Text style={styles.errorStyle}>{props.dropdownError}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "grey",
    textAlign: "left",
    borderWidth: 1,
    width: 300,
    height: 10,
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
  errorStyle: {
    color: "red",
    textAlign: "left",
    width: 300,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});

export default VisitorDropdown;
