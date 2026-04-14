import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu4() {
  const techniques = [
    { label: "SHUTO GEDAN BARAI", url: "https://youtu.be/i2OPcVAAziI" },
    { label: "SHUTO JODAN UKE", url: "https://youtu.be/wq038NJ79w8" },
    { label: "SHUTO CHUDAN SOTO UKE", url: "https://youtu.be/mSWKknZcAic" },
    { label: "SHUTO JODAN UCHI UKE", url: "https://youtu.be/Xa9ZRq87m7Q" },
    { label: "SHUTO HIZO UCHI", url: "https://youtu.be/obeAsq1w84I" },
    { label: "SHUTO SAKOTSU UCHI", url: "https://youtu.be/5mOmOXZ-FNU" },
    { label: "SHUTO SAKOTSU", url: "https://youtu.be/qEBiuKW2RPY" },
    { label: "SHUTO JODAN UKE", url: "https://youtu.be/wq038NJ79w8" },
    { label: "SOKUTO YOKO GERI JODAN", url: "https://youtu.be/cHZ1P3h8Xg4" },
    { label: "MAWASHI GERI JODAN", url: "https://youtu.be/hYChPGOfzHU" },
    { label: "USHIRO KAKATO GERI JODAN", url: "https://youtu.be/6GY92tKRTK0" },
    { label: "USHIRO HAISOKU MAWASHI UCHI KEAGE", url: "https://youtu.be/OP7TWTxIFho" },
  ];

  const katas = [
    { label: "PINAN SONO YON", url: "https://youtu.be/eV6mxptP0UA" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 4</Text>

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
    backgroundColor: "green",
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
