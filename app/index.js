import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, Animated } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from '../styles/Home'; // Import styles
import Button from '../components/Button'; // Import the new Button component

export default function Home() {
  const [data, setData] = useState(null);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const result = await new Promise((resolve) =>
        setTimeout(() => resolve("Welcome to My App! 🚀"), 1000)
      );
      setData(result);

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[
          styles.headerContainer,
          { opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] }
        ]}>
          <Text style={styles.headerText}>{data ? data : "Loading..."}</Text>
          <Text style={styles.subHeaderText}>
            Explore the best features and elevate your experience!
          </Text>
        </Animated.View>

        <Animated.View style={[styles.featureCard, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>🔥 Top Features</Text>
          <Text style={styles.cardText}>
            ✅ Fast & Smooth Performance {"\n"}
            ✅ Beautiful Dark Mode {"\n"}
            ✅ Interactive & Responsive Design {"\n"}
            ✅ Secure & Reliable Experience
          </Text>
        </Animated.View>

        <Animated.View style={[styles.aboutCard, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>📖 About Us</Text>
          <Text style={styles.cardText}>
            We are dedicated to providing the best experience for our users. With cutting-edge technology and user-friendly design, our app is built for you!
          </Text>
        </Animated.View>

        {/* Using the new Button component */}
        <Button title="Live Video" onPress={() => router.push('/LiveVideo')} />

      </ScrollView>
    </SafeAreaView>
  );
}
