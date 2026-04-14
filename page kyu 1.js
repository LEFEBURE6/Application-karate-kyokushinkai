import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu1() {
  const techniques = [
    { label: "KAKE UKE", url: "https://youtu.be/dii3euBVTHM" },
    { label: "CHUDAN HAITO UCHI UKE", url: "https://youtu.be/Fdp3xBPYVC0" },
    { label: "RYUTO KEN TSUKI JODAN / CHUDAN", url: "https://youtu.be/4c0zvi1JRtc" },
    { label: "NAKAYUBI IPPONKEN UCHI JODAN / CHUDAN", url: "https://youtu.be/p2EBCQ2rPPI" },
    { label: "OYAYUBI IPPONKEN UCHI JODAN / CHUDAN", url: "https://youtu.be/M3Z3xluFJIY" },
    { label: "KAKE GERI JODAN", url: "https://youtu.be/yvgd5jXRGDQ" },
    { label: "USHIRO MAWASHI GERI", url: "https://www.youtube.com/shorts/NKtd5hJCsJU?feature=share" },
    { label: "YOKO TOBI GERI", url: "https://youtu.be/bsO6CMME0bk" },
  ];

  const katas = [
    { label: "YANTSU", url: "https://youtu.be/CPhed-fx2jo" },
    { label: "TSUKI NO KATA", url: "https://youtu.be/8MSecDCkYGY" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 1</Text>

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
    backgroundColor: "rgb(141,27,27)",
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
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 40,
  },
});
