import React from 'react';

//React Navigation
import RootStack from "./navigators/RootStack";


//custom fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Cinzel-Bold": require("./assets/fonts/Bold.ttf"),
    "Cinzel-Regular": require("./assets/fonts/Cinzel-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RootStack />
  );
}