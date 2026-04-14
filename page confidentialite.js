import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PolitiqueConfidentialite() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Politique de Confidentialité</Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Application :</Text> Karaté Kyokushinkai
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Dernière mise à jour :</Text> 26/03/2026
        </Text>

        <Text style={styles.subtitle}>1. Introduction</Text>
        <Text style={styles.text}>
          La présente Politique de Confidentialité explique comment l’application{" "}
          <Text style={styles.bold}>Karaté Kyokushinkai</Text> gère les données des utilisateurs.
          L’application est gratuite et redirige vers des contenus externes tels que des vidéos YouTube.
        </Text>

        <Text style={styles.subtitle}>2. Données collectées</Text>
        <Text style={styles.text}>
          L’application ne collecte aucune donnée personnelle directement. Aucun nom, adresse email,
          numéro de téléphone ou information sensible n’est demandé.
        </Text>

        <Text style={styles.subtitle}>3. Services tiers</Text>
        <Text style={styles.text}>
          L’application peut afficher de la publicité ou rediriger vers des plateformes externes
          (ex : YouTube). Ces services tiers peuvent collecter des données selon leurs propres
          politiques de confidentialité.
        </Text>

        <Text style={styles.subtitle}>4. Publicité</Text>
        <Text style={styles.text}>
          Des services publicitaires tiers peuvent afficher des annonces dans l’application.
          Ces services peuvent utiliser des cookies ou identifiants anonymes pour personnaliser
          les publicités.
        </Text>

        <Text style={styles.subtitle}>5. Liens externes</Text>
        <Text style={styles.text}>
          L’application contient des liens vers des vidéos ou sites externes. Nous ne sommes pas
          responsables du contenu ou des pratiques de confidentialité de ces plateformes.
        </Text>

        <Text style={styles.subtitle}>6. Sécurité</Text>
        <Text style={styles.text}>
          Aucune donnée personnelle n’étant collectée, aucune information sensible n’est stockée.
          Les services tiers appliquent leurs propres mesures de sécurité.
        </Text>

        <Text style={styles.subtitle}>7. Modifications de la politique</Text>
        <Text style={styles.text}>
          Cette politique peut être mise à jour à tout moment. Les utilisateurs sont invités à
          consulter cette page régulièrement.
        </Text>

        <Text style={styles.subtitle}>8. Contact</Text>
        <Text style={styles.text}>
          Pour toute question concernant cette politique, vous pouvez contacter :{" "}
          <Text style={styles.bold}>Ryutoken Entreprise — flefebure@live.fr</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(149,194,149)",
    padding: 20,
  },
  box: {
    backgroundColor: "rgb(149,194,149)",
    padding: 25,
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    color: "rgb(0,57,57)",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "rgb(0,57,57)",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});
