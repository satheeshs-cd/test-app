import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeButton from "../components/homebutton";
import OrgLogo from "../components/orgLogo";
import Appointment from "../screen/appointment";
import CheckOut from "../screen/checkout";
import Delivery from "../screen/delivery";
import Employee from "../screen/employee";
import Home from "../screen/home";
import Interview from "../screen/interview";
import VisitorPage from "../screen/visitor";

const Main = () => {
  const Stack = createNativeStackNavigator();
  const pageTitle = "VMS";

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => <OrgLogo />,
          headerRight: () => <HomeButton />,
          headerBackVisible: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#3DB1F2" },
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: pageTitle, orientation: "all" }}
        />
        <Stack.Screen
          name="appointment"
          component={Appointment}
          options={{ title: pageTitle, orientation: "all" }}
        />
        <Stack.Screen
          name="visitor"
          component={VisitorPage}
          options={{ title: "Visitors", orientation: "all" }}
        />
        <Stack.Screen
          name="interview"
          component={Interview}
          options={{ title: "Interview", orientation: "all" }}
        />

        <Stack.Screen
          name="delivery"
          component={Delivery}
          options={{ title: pageTitle, orientation: "all" }}
        />
        <Stack.Screen
          name="checkout"
          component={CheckOut}
          options={{ title: pageTitle, orientation: "all" }}
        />
        <Stack.Screen
          name="employee"
          component={Employee}
          options={{ title: pageTitle, orientation: "all" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
