import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu9() {
  const techniques = [
    { label: "SEIKEN GYAKU TSUKI", url: "https://youtu.be/NZQjOSJzqbE" },
    { label: "SEIKEN AGO UCHI", url: "https://youtu.be/aoTzipxDKFw" },
    { label: "MAE CHUSOKU KEAGE", url: "https://youtu.be/V2e_adl_qCM" },
    { label: "UCHI MAWASHI HAISOKU KEAGE", url: "https://youtu.be/YtsK6WeLBDo" },
    { label: "SOTO MAWASHI TEISOKU KEAGE", url: "https://youtu.be/-9NX5yjXUUE" },
    { label: "SEIKEN CHUDAN UCHI UKE", url: "https://youtu.be/ZjRI_Abs1UQ" },
    { label: "SEIKEN CHUDAN SOTO UKE", url: "https://youtu.be/tn3Glf8Y3_I" },
  ];

  const katas = [
    { label: "TAIKYOKU SONO ICHI", url: "https://youtu.be/j1x1XyVpHm4" },
    { label: "TAIKYOKU SONO NI", url: "https://youtu.be/j1x1XyVpHm4" },
  ];

  const positions = [
    { label: "SANCHIN DACHI", url: "https://youtu.be/q-1rVqijw-4" },
    { label: "KOKUTSU DACHI", url: "https://youtu.be/Qkgy3XsCj5Q" },
    { label: "NEKO ASHI DACHI", url: "https://youtu.be/PYwzoxPO6kc" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 9</Text>

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
    backgroundColor: "rgb(236,137,66)",
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
