import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, Animated, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Home() {
  const [data, setData] = useState(null);
  const fadeAnim = useState(new Animated.Value(0))[0]; // Initial opacity: 0
  const scaleAnim = useState(new Animated.Value(1))[0]; // Button press effect
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const result = await new Promise((resolve) =>
        setTimeout(() => resolve("Welcome to My App! 🚀"), 1000)
      );
      setData(result);

      // Fade-in animation when data loads
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }

    fetchData();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', padding: 20 }}>

        {/* Header Section */}
        <Animated.View style={{
          marginBottom: 20,
          opacity: fadeAnim,
          transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }]
        }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#FFD700', textAlign: 'center' }}>
            {data ? data : "Loading..."}
          </Text>
          <Text style={{ fontSize: 18, color: '#B0B0C3', textAlign: 'center', marginTop: 5 }}>
            Explore the best features and elevate your experience!
          </Text>
        </Animated.View>

        {/* Feature Cards */}
        <Animated.View style={{
          backgroundColor: '#1F1F2E',
          padding: 20,
          borderRadius: 15,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 5,
          width: '90%',
          marginBottom: 15,
          opacity: fadeAnim,
        }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFD700' }}>🔥 Top Features</Text>
          <Text style={{ fontSize: 16, color: '#B0B0C3', marginTop: 5 }}>
            ✅ Fast & Smooth Performance {"\n"}
            ✅ Beautiful Dark Mode {"\n"}
            ✅ Interactive & Responsive Design {"\n"}
            ✅ Secure & Reliable Experience
          </Text>
        </Animated.View>

        {/* About Section */}
        <Animated.View style={{
          backgroundColor: '#2A2A40',
          padding: 20,
          borderRadius: 15,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 5,
          width: '90%',
          marginBottom: 15,
          opacity: fadeAnim,
        }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFD700' }}>📖 About Us</Text>
          <Text style={{ fontSize: 16, color: '#B0B0C3', marginTop: 5 }}>
            We are dedicated to providing the best experience for our users. With cutting-edge technology and user-friendly design, our app is built for you!
          </Text>
        </Animated.View>

        {/* Call-To-Action Button */}
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            onPress={() => router.push('/nextPage')} // Example navigation
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={{
              backgroundColor: '#FFD700',
              paddingVertical: 12,
              paddingHorizontal: 25,
              borderRadius: 8,
              shadowColor: '#FFD700',
              shadowOpacity: 0.4,
              shadowRadius: 10,
              elevation: 6,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1F1F2E' }}>Get Started 🚀</Text>
          </TouchableOpacity>
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}
