import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Lexique() {
  const termes = [
    "KANCHO > PRESIDENT",
    "SHIHAN > MAITRE",
    "SENSEI > PROFESSEUR",
    "SENPAI > INSTRUCTEUR",
    "REI > LE SALUT",
    "SEIZA > POSITION A GENOUX",
    "DACHI > POSITION",
    "YOI > PRET",
    "HADJIME > DEMARRER",
    "YAME > ARRETER",
    "NAORE > POSITION DE DEPART",
    "MAWATTE > DEMI-TOUR",
    "KIAI > CRI PUISSANT",
    "KATA > FORME",
    "KAMAITE > REALISATION DE TECHNIQUES",
    "MOGOREI > SANS COMPTER",
    "HIDARI > GAUCHE",
    "MIGI > DROITE",
    "MAE > AVANT",
    "JODAN > NIVEAU HAUT",
    "CHUDAN > NIVEAU MOYEN",
    "GEDAN > NIVEAU BAS",
    "IBUKI > EXPIRATION SONORE AVEC CONTRACTION ABDOMINALE",
    "NOGARE > RESPIRATION FACILE",
    "DOMO ARIGATO GOZAIMASHITA > MERCI",
    "OSU > SALUTATION",
  ];

  const chiffres = [
    "ICHI > 1",
    "NI > 2",
    "SAN > 3",
    "SHI > 4",
    "GO > 5",
    "ROKU > 6",
    "SHICHI > 7",
    "HACHI > 8",
    "KU > 9",
    "JU > 10",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lexique</Text>

      <View style={styles.section}>
        {termes.map((item, index) => (
          <Text key={index} style={styles.item}>{item}</Text>
        ))}
      </View>

      <Text style={styles.subtitle}>Chiffres</Text>

      <View style={styles.section}>
        {chiffres.map((item, index) => (
          <Text key={index} style={styles.item}>{item}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
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
  section: {
    marginBottom: 30,
    alignItems: "center",
  },
  item: {
    color: "yellow",
    fontSize: 16,
    marginVertical: 4,
    textAlign: "center",
  },
});
