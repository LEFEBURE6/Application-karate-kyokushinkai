import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu6() {
  const techniques = [
    { label: "URAKEN GANMEN UCHI", url: "https://youtu.be/TGLAIMMzLPI" },
    { label: "URAKEN OROSHI GANMEN UCHI", url: "https://youtu.be/4dSXmm4pI8I" },
    { label: "URAKEN HIZO UCHI", url: "https://youtu.be/JntaVndHl5U" },
    { label: "URAKEN MAWASHI UCHI", url: "https://youtu.be/sHyfuXHtpyQ" },
    { label: "IPPON NUKITE", url: "https://youtu.be/ZlYg7X60aI0" },
    { label: "NIHON NUKITE", url: "https://youtu.be/jicp3vS1fZ4" },
    { label: "YOHON NUKITE", url: "https://youtu.be/Uo75QjndZ1U" },
    { label: "SOKUTO YOKO GERI CHUDAN", url: "https://youtu.be/Ai4WVPebn8w" },
    { label: "OSAE UKE", url: "https://youtu.be/Oj3SwOkESyc" },
    { label: "SEIKEN JUJI UKE JODAN / CHUDAN / GEDAN", url: "https://youtu.be/NDFWtYiityk" },
  ];

  const katas = [
    { label: "PINAN SONO NI", url: "https://youtu.be/y6QxLGHSQek" },
  ];

  const positions = [
    { label: "KAKE DACHI", url: "https://youtu.be/5ZPJ21XQ5ZI" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 6</Text>

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

      <Text style={styles.subtitle}>Positions</Text>
      {positions.map((item, i) => (
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
