import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Shodan() {
  const techniques = [
    { label: "MOROTE HAITO UCHI UKE", url: "https://youtu.be/lPYVCKmr13U" },
    { label: "MOROTE KAKE UKE", url: "https://youtu.be/SEHWSRjIbM0" },
    { label: "HAITO UCHI JODAN/CHUDAN/GEDAN", url: "https://youtu.be/Th-P1cXcaYw" },
    { label: "MOROTE HAITO UCHI JODAN/CHUDAN", url: "https://youtu.be/CfEl23jQj24" },
    { label: "MAWASHI TOBI GERI", url: "https://youtu.be/KtNgjg7uANg" },
    { label: "USHIRO TOBI GERI", url: "https://youtu.be/svgh_lG09Jo" },
    { label: "USHIRO MAWASHI TOBI GERI", url: "https://www.youtube.com/shorts/vatrMQ6f6gI?feature=share" },
  ];

  const katas = [
    { label: "TAIKYOKU SONO ICHI URA", url: "https://youtu.be/PnqHqXP7GOI" },
    { label: "TAIKYOKU SONO NI URA", url: "https://youtu.be/FSB0-Xwm-PM" },
    { label: "TAIKYOKU SONO SAN URA", url: "https://youtu.be/fZ7mz9wEUr4" },
    { label: "TENSHO", url: "https://youtu.be/zD8_qf0zFFE" },
    { label: "KATA SAIHA", url: "https://youtu.be/0Ejvv8QckA8" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>SHODAN 1er DAN</Text>

      <Text style={styles.subtitle}>Techniques</Text>
      {techniques.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.link}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.subtitle}>Katas</Text>
      {katas.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.link}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      <Image
        source={require("./assets/kyokushin-karate-japan-logo.png")}
        style={styles.logo}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "yellow",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    color: "yellow",
    marginTop: 20,
    marginBottom: 10,
  },
  link: {
    textAlign: "center",
    color: "yellow",
    fontSize: 16,
    marginVertical: 6,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 200,
  },
});
