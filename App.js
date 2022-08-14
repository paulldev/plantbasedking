import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import AuthContextProvider, { AuthContext } from "./store/auth-context";

import Icon from "react-native-vector-icons/MaterialIcons";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import RecipesScreen from "./screens/RecipesScreen";
import IngredientsScreen from "./screens/IngredientsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

//TODO which styles should apply to the entire app, and which apply to individual screens.
//TODO check: https://reactnavigation.org/docs/screen-options
//TODO custom component in a drawer? interesting
//TODO icons I use https://fonts.google.com/icons?selected=Material+Icons. Replace _ with -
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Drawer.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        drawerActiveBackgroundColor: "light gray",
        headerStyle: { backgroundColor: "#610440" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: "Welcome",
          drawerIcon: ({ color, size }) => (
            <Icon name="done" size={size} color={color} />
          ),
          headerRight: ({ tintColor }) => (
            <Icon
              name="logout"
              size={24}
              color={tintColor}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          drawerLabel: "Recipes",
          drawerIcon: ({ color, size }) => (
            <Icon name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ingredients"
        component={IngredientsScreen}
        options={{
          drawerLabel: "Ingredients",
          drawerIcon: ({ color, size }) => (
            <Icon name="kitchen" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerLabel: "Login",
          drawerIcon: ({ color, size }) => (
            <Icon name="login" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          drawerLabel: "Signup",
          drawerIcon: ({ color, size }) => (
            <Icon name="person-add" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
