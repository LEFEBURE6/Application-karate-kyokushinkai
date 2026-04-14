import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu2() {
  const techniques = [
    { label: "KOKEN UKE JODAN / CHUDAN / GEDAN", url: "https://youtu.be/ZHE24mMI0Pk" },
    { label: "HAISHU UCHI JODAN / CHUDAN", url: "https://youtu.be/FFd06dD3O7k" },
    { label: "SEIKEN AGE TSUKI", url: "https://youtu.be/KdX1BsYvWvo" },
    { label: "UCHI OROSHI KAKATO GERI", url: "https://youtu.be/SEzedu5BhDw" },
    { label: "SOTO OROSHI KAKATO GERI", url: "https://youtu.be/5GLPHYQw4J0" },
    { label: "UCHI HAISOKU GERI", url: "https://youtu.be/DLqbH1YaHik" },
    { label: "USU MAWASHI GERI", url: "https://youtu.be/2_KfyRFOKV8" },
    { label: "MAE TOBI GERI", url: "https://youtu.be/fn2Z_2EMhRw" },
    { label: "NIDAN MAE TOBI GERI", url: "https://youtu.be/YNXyj4c7ceY" },
  ];

  const katas = [
    { label: "PINAN SONO GO", url: "https://youtu.be/9OHKoq4lA_w" },
    { label: "GEKISAI DAI", url: "https://youtu.be/_5kKtBPk0dU" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 2</Text>

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
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 200,
  },
});


