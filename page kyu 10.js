import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from "react-native";

export default function Kyu10() {
  const techniques = [
    { label: "SEIKEN GEDAN BARAI", url: "https://www.youtube.com/shorts/AiQK9NDEdko?feature=share" },
    { label: "SEIKEN JODAN UKE", url: "https://youtu.be/WS7ys0uxyMU" },
    { label: "SEIKEN OI TSUKI JODAN / CHUDAN / GEDAN", url: "https://youtu.be/voMiOuH4AJI" },
    { label: "MOROTE TSUKI GEDAN / CHUDAN / JODAN", url: "https://www.youtube.com/shorts/X1wv3caAGbc?feature=share" },
    { label: "HIZA GANMEN GERI", url: "https://www.youtube.com/shorts/kTseVwJWwC4?feature=share" },
    { label: "KIN GERI", url: "https://youtu.be/1HsQrGvLpcs" },
    { label: "MAE GERI CHUDAN CHUSOKU", url: "https://youtu.be/lPYVCKmr13U" },
  ];

  const positions = [
    { label: "FUDO DACHI", url: "https://www.youtube.com/shorts/S7cVCHqlQdM?feature=share" },
    { label: "SEIZA", url: "https://www.youtube.com/shorts/H5OA5Rka548?feature=share" },
    { label: "YOI DACHI", url: "https://youtu.be/UOB7y_iUBG8" },
    { label: "ZENKUTSU DACHI", url: "https://youtu.be/jmzPqcWHbcM" },
    { label: "HEISOKU DACHI", url: "https://youtu.be/jmzPqcWHbcM" },
    { label: "MUSUBI DACHI", url: "https://youtu.be/0XHvjg6WKhw" },
    { label: "HEIKO DACHI", url: "https://youtu.be/0XHvjg6WKhw" },
    { label: "UCHI HACHIJI DACHI", url: "https://www.youtube.com/shorts/l1JaKk7gYzc?feature=share" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>KYU 10</Text>

      <Text style={styles.subtitle}>Techniques</Text>
      {techniques.map((item, i) => (
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
