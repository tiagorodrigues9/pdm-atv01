import { Image } from "expo-image";
import { View, Text, ScrollView, TouchableOpacity, Pressable, Alert, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";

export default function Index() {
  const [showWebView, setShowWebView] = useState(false);

  if (showWebView) {
    return <WebView source={{ uri: "https://github.com/tiagorodrigues9" }} />;
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://github.com/tiagorodrigues9.png" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Tiago de Lara Rodrigues</Text>

        <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}onPress={() => setShowWebView(true)}>
          <Text style={styles.buttonText}>GitHub</Text>
        </Pressable>

        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() =>
              Alert.alert(
                "Sobre Mim",
                "Olá! Eu sou Tiago, tenho 19 anos. Atualmente faço faculdade na FATEC no curso de Desenvolvimento de Sistemas Multiplataforma."
              )
          }>
          <Text style={styles.buttonText}>Sobre Mim</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#141414",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 20,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1d1d1d",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
