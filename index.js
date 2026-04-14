import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Alert, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox"; // si tu utilises Expo : remplacer par expo-checkbox

export default function Connexion({ navigation }) {
  const [cgu, setCgu] = useState(false);
  const [confidentialite, setConfidentialite] = useState(false);

  const login = () => {
    if (!cgu || !confidentialite) {
      Alert.alert("Attention", "Vous devez accepter les deux conditions pour continuer.");
      return;
    }

    navigation.navigate("Accueil"); // ou "Interface", selon ton app
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Petit logo en haut */}
      <View style={styles.logoTop}>
        <Image source={require("./assets/kanji-kyokushin.webp")} style={styles.logoTopImg} />
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Connexion</Text>

        <View style={styles.checkboxGroup}>
          <View style={styles.row}>
            <CheckBox value={cgu} onValueChange={setCgu} />
            <Text style={styles.text}>
              J’accepte les{" "}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("https://ton-site.com/cgu")}
              >
                Conditions Générales d’Utilisation
              </Text>
            </Text>
          </View>

          <View style={styles.row}>
            <CheckBox value={confidentialite} onValueChange={setConfidentialite} />
            <Text style={styles.text}>
              J’accepte la{" "}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("https://ton-site.com/confidentialite")}
              >
                Politique de confidentialité
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Logo Budokai = bouton de connexion */}
      <TouchableOpacity style={styles.logoBottom} onPress={login}>
        <Image
          source={require("./assets/world_kyokushin_budokai.png")}
          style={styles.logoBottomImg}
        />
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(149,194,149)",
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 40,
  },

  logoTop: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  logoTopImg: {
    width: 43,
    height: 43,
    resizeMode: "contain",
  },

  box: {
    backgroundColor: "rgb(149,194,149)",
    padding: 30,
    width: "90%",
    maxWidth: 400,
    borderRadius: 20,
    marginTop: 40,
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    color: "rgb(0,57,57)",
    marginBottom: 40,
  },

  checkboxGroup: {
    marginLeft: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    flexWrap: "wrap",
  },

  text: {
    fontSize: 16,
    color: "black",
    width: "85%",
  },

  link: {
    color: "rgb(0,57,57)",
    textDecorationLine: "underline",
  },

  logoBottom: {
    marginTop: 60,
    marginBottom: 40,
  },

  logoBottomImg: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});







