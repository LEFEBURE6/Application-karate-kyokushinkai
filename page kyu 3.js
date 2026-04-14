import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu3() {
  const techniques = [
    { label: "SHUTO JUJI UKE JODAN / GEDAN", url: "https://www.youtube.com/shorts/xkAqHzVfUE4?feature=share" },
    { label: "HIJI ATE JODAN / CHUDAN", url: "https://youtu.be/Gt2m_3V0rxQ" },
    { label: "AGE HIJI ATE JODAN / CHUDAN", url: "https://youtu.be/hTKDPl4cfiM" },
    { label: "MAE AGE HIJI ATE JODAN / CHUDAN", url: "https://youtu.be/hTKDPl4cfiM" },
    { label: "USHIRO HIJI ATE", url: "https://youtu.be/ipOuB9DAIos" },
    { label: "OROSHI HIJI ATE", url: "https://youtu.be/jiVSqpWiQ5c" },
    { label: "MAE KAKATO GERI JODAN / CHUDAN / GEDAN", url: "https://www.youtube.com/shorts/-SI1VPlbi9w?feature=share" },
  ];

  const katas = [
    { label: "SANCHIN NO KATA", url: "https://youtu.be/k_U_lEGdPLU" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 3</Text>

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
