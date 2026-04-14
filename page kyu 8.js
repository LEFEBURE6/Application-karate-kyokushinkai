import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu8() {
  const techniques = [
    { label: "TATE TSUKI JODAN", url: "https://youtu.be/Ql5ocI3VHAQ" },
    { label: "SHITA TSUKI", url: "https://youtu.be/9DhL8Spw0QU" },
    { label: "JUN TSUKI", url: "https://youtu.be/P9g1b3ydjk0" },
    { label: "KAGI TSUKI", url: "https://youtu.be/ZBwCsIfTGmg" },
    { label: "YOKO KANSETSU GERI", url: "https://youtu.be/dMYfLLmShns" },
    { label: "SOKUTO YOKO KEAGE", url: "https://youtu.be/Buc79mhOr1I" },
    { label: "MOROTE UCHI UKE", url: "https://youtu.be/Nz9jFyQQMls" },
    { label: "UCHI UKE GEDAN BARAI", url: "https://youtu.be/D5vJIdh_xvI" },
  ];

  const katas = [
    { label: "TAIKYOKU SONO SAN", url: "https://youtu.be/g3gj1AKpQ5A" },
  ];

  const positions = [
    { label: "KIBA DACHI", url: "https://youtu.be/s_XhUwm8-88" },
    { label: "SHIKO DACHI", url: "https://youtu.be/8izk5CFCHd4" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 8</Text>

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



