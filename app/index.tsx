import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Profile = require("../assets/profile.png");
const ImgBackground = require("../assets/bg.jpg");
const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <ImageBackground style={styles.container} source={ImgBackground}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <View style={styles.profileImage}>
              <Image
                source={Profile}
                style={{ width: 150, height: 150, borderRadius: 100 }}
              />
            </View>
            <Text style={styles.name}>Vitor Santana</Text>
            <Text style={styles.title}>Desenvolvedor Full Stack</Text>

            {/* Corrigido: Ícone + texto */}
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={16} color="#000000" />
              <Text style={styles.locationText}>Recife, PE</Text>
            </View>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <Text style={styles.aboutText}>
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            experiências digitais excepcionais. Com experiência em tecnologias
            modernas, busco sempre aprender e evoluir constantemente.
          </Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <View style={styles.skillsContainer}>
            {[
              "React Native",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Python",
              "SQL",
            ].map((skill, index) => (
              <View key={index} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estatísticas</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5+</Text>
              <Text style={styles.statLabel}>Projetos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1+</Text>
              <Text style={styles.statLabel}>Anos Exp.</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Satisfação</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa93",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
  },
  header: {
    backgroundColor: "#ffffff",
    padding: 10,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileContainer: {
    alignItems: "center",
    backgroundColor: "#ffffffff",
    height: 250,
    width: width - 40,
    borderRadius: 50,
    justifyContent: "center",
    padding: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ffffff65",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "#007AFF",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#390d44ff",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: "#000000ff",
    fontWeight: "600",
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationText: {
    fontSize: 16,
    color: "#000000ff",
  },
  section: {
    backgroundColor: "#ffffffee",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    height: "auto",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000ff",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  skillTag: {
    backgroundColor: "#000000ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    width: 90,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  skillText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
    backgroundColor: "#ffffff65",
    padding: 16,
    borderRadius: 100,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000ff",
  },
  statLabel: {
    fontSize: 14,
    color: "#000000ff",
    marginTop: 4,
  },
});
