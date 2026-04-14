import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ConditionsGeneralesUtilisation() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Conditions Générales d'Utilisation</Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Application :</Text> Karaté Kyokushinkai
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Dernière mise à jour :</Text> 26/03/2026
        </Text>

        <Text style={styles.subtitle}>1. Objet de l’application</Text>
        <Text style={styles.text}>
          L’application <Text style={styles.bold}>Karaté Kyokushinkai</Text> aide les pratiquants de karaté
          en proposant des contenus pédagogiques, notamment via des liens vers des vidéos hébergées
          sur YouTube. L’application est gratuite et peut afficher de la publicité.
        </Text>

        <Text style={styles.subtitle}>2. Acceptation des conditions</Text>
        <Text style={styles.text}>
          En utilisant l’application, l’utilisateur accepte pleinement et sans réserve les présentes
          Conditions Générales d’Utilisation.
        </Text>

        <Text style={styles.subtitle}>3. Accès à l’application</Text>
        <Text style={styles.text}>
          L’application est accessible gratuitement depuis un smartphone compatible. L’éditeur peut
          modifier, suspendre ou interrompre l’accès à tout moment, sans préavis.
        </Text>

        <Text style={styles.subtitle}>4. Contenus externes</Text>
        <Text style={styles.text}>
          L’application redirige vers des contenus externes (ex : vidéos YouTube). Ces contenus ne
          sont pas hébergés par l’application et restent sous la responsabilité de leurs créateurs
          ou plateformes respectives. L’éditeur n’est pas responsable de leur disponibilité,
          modification ou suppression.
        </Text>

        <Text style={styles.subtitle}>5. Publicité</Text>
        <Text style={styles.text}>
          L’application peut afficher de la publicité gérée par des services tiers. L’éditeur n’est
          pas responsable du contenu des annonces ni des actions des annonceurs.
        </Text>

        <Text style={styles.subtitle}>6. Données personnelles</Text>
        <Text style={styles.text}>
          L’application ne collecte pas de données personnelles, sauf indication contraire. Les
          services tiers (YouTube, régies publicitaires, etc.) peuvent collecter des données selon
          leurs propres politiques.
        </Text>

        <Text style={styles.subtitle}>7. Propriété intellectuelle</Text>
        <Text style={styles.text}>
          Les contenus présents dans l’application sont protégés par le droit d’auteur. Les vidéos
          externes restent la propriété de leurs auteurs respectifs.
        </Text>

        <Text style={styles.subtitle}>8. Responsabilité</Text>
        <Text style={styles.text}>
          L’éditeur ne peut être tenu responsable d’un mauvais usage de l’application, de dommages
          liés à la pratique sportive, de l’indisponibilité de l’application ou des contenus externes.
        </Text>

        <Text style={styles.subtitle}>9. Modifications des CGU</Text>
        <Text style={styles.text}>
          L’éditeur peut modifier les présentes CGU à tout moment. Les utilisateurs sont invités à
          consulter régulièrement cette page.
        </Text>

        <Text style={styles.subtitle}>10. Contact</Text>
        <Text style={styles.text}>
          Pour toute question, contactez :{" "}
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
import React from "react";