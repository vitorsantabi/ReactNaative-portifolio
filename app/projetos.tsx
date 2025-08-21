import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ImgBackground = require("../assets/bg.jpg");
const { width } = Dimensions.get("window");

const projects = [
  {
    id: 1,
    title: "App Wiki",
    description:
      "Aplicativo que mostra informações sobre a vida, musicas e turnês da Cantora Marina Diamandis.\n O projeto consome uma API RESTful própria, construída com Node.js e MongoDB, para buscar e exibir os dados de forma dinâmica.",
    technologies: ["React Native", "Node.js", "MongoDB", "Expo"],
    image: "🍇",
    status: "Em Desenvolvimento",
    link: "#",
  },
  {
    id: 2,
    title: "V Social",
    description:
      "V Social é uma rede social simples desenvolvida como projeto acadêmico.\nA plataforma permite que usuários se cadastrem, façam login, publiquem imagens e textos, sigam outros perfis e vejam postagens no feed. O sistema foi construído utilizando HTML, CSS, JavaScript, PHP e MySQL com o ambiente local XAMPP.",
    technologies: ["HTML5", "CCS3", "Javascript", "PHP", "MySQL", "XAMPP"],
    image: "🚀",
    status: "Concluído",
    link: "#",
    imageprojeto: require("../assets/vsocial.png"),
  },
];

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const heightAnim = useRef(new Animated.Value(240)).current;

  const getStatusColor = (status) => {
    return status === "Concluído" ? "#34C759" : "#FF9500";
  };

  const getStatusIcon = (status) => {
    return status === "Concluído" ? "checkmark-circle" : "time";
  };

  const toggleExpansion = () => {
    const initialHeight = 240;
    const finalHeight = 500;
    const targetHeight = isExpanded ? initialHeight : finalHeight;

    Animated.timing(heightAnim, {
      toValue: targetHeight,
      duration: 350,
      useNativeDriver: false,
    }).start();

    setIsExpanded(!isExpanded);
  };

  return (
    <Animated.View style={[styles.projectCard, { height: heightAnim }]}>
      <View style={styles.projectHeader}>
        <Text style={styles.projectEmoji}>{project.image}</Text>
        <View style={styles.statusContainer}>
          <Ionicons
            name={getStatusIcon(project.status)}
            size={16}
            color={getStatusColor(project.status)}
          />
          <Text
            style={[
              styles.statusText,
              { color: getStatusColor(project.status) },
            ]}
          >
            {project.status}
          </Text>
        </View>
      </View>

      <Text style={styles.projectTitle}>{project.title}</Text>
      <Text
        style={styles.projectDescription}
        numberOfLines={isExpanded ? 10 : 2}
      >
        {project.description}
      </Text>

      <View style={styles.technologiesContainer}>
        {project.technologies.map((tech, index) => (
          <View key={index} style={styles.techTag}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.viewButton} onPress={toggleExpansion}>
        <Text style={styles.viewButtonText}>
          {isExpanded ? "Ver Menos" : "Ver Mais"}
        </Text>
        <Ionicons
          name={isExpanded ? "arrow-up" : "arrow-forward"}
          size={16}
          color="#007AFF"
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function ProjetosScreen() {
  return (
    <ImageBackground style={styles.container} source={ImgBackground}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Meus Projetos</Text>
          <Text style={styles.headerSubtitle}>
            Conheça alguns dos projetos que desenvolvimento
          </Text>
        </View>

        <View style={styles.projectsContainer}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </View>

        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{projects.length}</Text>
            <Text style={styles.statLabel}>Total de Projetos</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {projects.filter((p) => p.status === "Concluído").length}
            </Text>
            <Text style={styles.statLabel}>Concluídos</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {projects.filter((p) => p.status === "Em Desenvolvimento").length}
            </Text>
            <Text style={styles.statLabel}>Em Andamento</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    backgroundColor: "#ffffffff",
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
  },
  projectsContainer: {
    padding: 16,
  },
  projectCard: {
    backgroundColor: "#f8f6ffff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  projectEmoji: {
    fontSize: 32,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: "#3A3A3C",
    lineHeight: 20,
    marginBottom: 16,
  },
  technologiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 16,
  },
  techTag: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  techText: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "500",
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
    marginTop: "auto",
  },
  viewButtonText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "600",
  },
  statsSection: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  statLabel: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 4,
    textAlign: "center",
  },
});
