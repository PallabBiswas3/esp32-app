import React, { useState, useEffect } from 'react';
import { View, Text,ScrollView,SafeAreaView } from 'react-native';
import { Stack,useRouter } from 'expo-router';
import{ COLORS, ImageBackgroundBase, ImageBase,SIZES } from "react-native";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Simulating an API call
      const result = await new Promise((resolve) =>
        setTimeout(() => resolve("Hello, World!"), 1000)
      );
      setData(result);
    }

    fetchData();
  }, []); // Empty dependency array means it runs once on mount

  return (
    <View>
      <Text>{data ? data : "Loading..."}</Text>
    </View>
  );
}
