import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function LiveVideo() {
  const [isError, setIsError] = useState(false);

  return (
    <View style={styles.container}>
      {isError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>⚠️ ESP32-CAM Not Connected!</Text>
          <Text style={styles.subText}>Please check your network and device.</Text>
        </View>
      ) : (
        <WebView
          source={{ uri: 'http://YOUR_ESP32_IP:81/stream' }} // Replace with your ESP32-CAM IP
          style={styles.webView}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={() => <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />}
          onError={() => setIsError(true)} // Handle errors (ESP not connected)
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  webView: { flex: 1 },
  loader: { position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -25 }, { translateY: -25 }] },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { fontSize: 22, fontWeight: 'bold', color: '#FF4C4C' },
  subText: { fontSize: 16, color: '#B0B0C3', marginTop: 5, textAlign: 'center', paddingHorizontal: 20 },
});
