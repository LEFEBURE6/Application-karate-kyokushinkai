import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu5() {
  const techniques = [
    { label: "SHOTEI UKE JODAN / CHUDAN / GEDAN", url: "https://youtu.be/WYVOvZ8vyOc" },
    { label: "CHUDAN HIJI UKE", url: "https://youtu.be/JXOtx6aqeg0" },
    { label: "SHOTEI UCHI JODAN / CHUDAN / GEDAN", url: "https://youtu.be/WcxV6pAVwYE" },
    { label: "USHIRO KAKATO GERI CHUDAN", url: "https://youtu.be/QAL2Z5G4C6I" },
  ];

  const katas = [
    { label: "PINAN SONO SAN", url: "https://youtu.be/YV9E9Unp1bw" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 5</Text>

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
    backgroundColor: "yellow",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    marginTop: 20,
    marginBottom: 10,
  },
  link: {
    textAlign: "center",
    color: "black",
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
