import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  const kyuList = [
    { label: "Kyu 10", page: "Kyu10", style: styles.kyu10 },
    { label: "Kyu 9", page: "Kyu9", style: styles.kyu9 },
    { label: "Kyu 8", page: "Kyu8", style: styles.kyu8 },
    { label: "Kyu 7", page: "Kyu7", style: styles.kyu7 },
    { label: "Kyu 6", page: "Kyu6", style: styles.kyu6 },
    { label: "Kyu 5", page: "Kyu5", style: styles.kyu5 },
    { label: "Kyu 4", page: "Kyu4", style: styles.kyu4 },
    { label: "Kyu 3", page: "Kyu3", style: styles.kyu3 },
    { label: "Kyu 2", page: "Kyu2", style: styles.kyu2 },
    { label: "Kyu 1", page: "Kyu1", style: styles.kyu1 },
    { label: "Shodan 1er Dan", page: "Shodan", style: styles.shodan },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Logo haut */}
      <Image source={require("./assets/kanji-kyokushin.png")} style={styles.logo} />

      {/* Titre */}
      <Text style={styles.title}>Karaté Kyokushinkai</Text>

      <Text style={styles.subtitle}>Grades et ceintures</Text>

      {/* Liste des kyu */}
      <View style={styles.list}>
        {kyuList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.kyuButton, item.style]}
            onPress={() => navigation.navigate(item.page)}
          >
            <Text style={styles.kyuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logo bas */}
      <TouchableOpacity onPress={() => navigation.navigate("Lexique")}>
        <Image
          source={require("./assets/world_kyokushin_budokai.png")}
          style={styles.logoBottom}
        />
      </TouchableOpacity>

      {/* --- ZONE PUB ADMOB OU APPLOVIN --- */}
      <View style={styles.adContainer}>
        <Text style={{ color: "#666" }}>Zone pour bannière publicitaire</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#fff",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 22,
    marginBottom: 20,
  },

  list: {
    width: "90%",
    alignItems: "center",
  },

  kyuButton: {
    width: "100%",
    paddingVertical: 15,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
  },

  kyuText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Couleurs des kyu (à adapter selon ton CSS)
  kyu10: { backgroundColor: "#e0e0e0" },
  kyu9: { backgroundColor: "#d4af37" },
  kyu8: { backgroundColor: "#c0c0c0" },
  kyu7: { backgroundColor: "#cd7f32" },
  kyu6: { backgroundColor: "#ff8800" },
  kyu5: { backgroundColor: "#ff5500" },
  kyu4: { backgroundColor: "#ff0000" },
  kyu3: { backgroundColor: "#cc0000" },
  kyu2: { backgroundColor: "#990000" },
  kyu1: { backgroundColor: "#660000" },
  shodan: { backgroundColor: "#000" },

  logoBottom: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 20,
  },

  adContainer: {
    width: "100%",
    height: 80,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
});




  
