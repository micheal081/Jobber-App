import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

// Constants
import { COLORS, SIZES, icons, images } from "../constants";

// Components
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>I love you okay</Text>
    </SafeAreaView>
  );
};

export default Home;
