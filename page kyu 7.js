import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu7() {
  const techniques = [
    { label: "TETTSUI KOMI KAMI", url: "https://youtu.be/Wy7PTK1E3Ck" },
    { label: "TETTSUI OROSHI GANMEN UCHI", url: "https://youtu.be/ILtvlU0clrE" },
    { label: "TETTSUI HIZO UCHI", url: "https://youtu.be/I_LqVApF0fY" },
    { label: "TETTSUI YOKO UCHI", url: "https://youtu.be/IrOFhesoh_M" },
    { label: "MAWASHI GERI GEDAN", url: "https://youtu.be/8co5GgIkrdA" },
    { label: "MAWASHI GERI CHUDAN", url: "https://youtu.be/-c5mpSICBfw" },
    { label: "SHUTO MAWASHI UKE", url: "https://youtu.be/hBp_88P6Tug" },
  ];

  const katas = [
    { label: "PINAN SONO ICHI", url: "https://youtu.be/ZKpVsXAKhio" },
  ];

  const positions = [
    { label: "TSURU ASHI DACHI", url: "https://youtu.be/HoU_TzDAH48" },
    { label: "MORO ASHI DACHI", url: "https://youtu.be/U5fmgvElOCs" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 7</Text>

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
    backgroundColor: "rgb(72,72,206)",
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
