import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ImgBackground = require("../assets/bg.jpg");

const socialNetworks = [
  {
    id: 1,
    name: "LinkedIn",
    username: "@vitorsantab",
    description: "Conecte-se profissionalmente e veja minha experiência",
    icon: "logo-linkedin",
    color: "#0077B5",
    url: "https://www.linkedin.com/in/vitorsantab",
    followers: "2.5k",
    posts: "150+",
  },
  {
    id: 2,
    name: "GitHub",
    username: "@vitorsantabi",
    description: "Acompanhe meus projetos e contribuições open source",
    icon: "logo-github",
    color: "#333333",
    url: "https://github.com/vitorsantabi",
    followers: "1",
    posts: "20+",
  },
  {
    id: 3,
    name: "Instagram",
    username: "@vitorsantab",
    description: "Siga meu dia a dia como desenvolvedor",
    icon: "logo-instagram",
    color: "#E4405F",
    url: "https://www.instagram.com/vitorsantab",
    followers: "2.5k",
    posts: "800+",
  },
  {
    id: 4,
    name: "Twitter",
    username: "@vitorsantab",
    description: "Compartilhando insights sobre tecnologia e desenvolvimento",
    icon: "logo-twitter",
    color: "#1DA1F2",
    url: "https://x.com/vitorsantab",
    followers: "2.6k",
    posts: "700+",
  },
];

export default function RedesSociaisScreen() {
  const handleSocialPress = async (url: string, name: string) => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          "Erro",
          `Não foi possível abrir o ${name}. Verifique se o aplicativo está instalado.`
        );
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao tentar abrir o link.");
    }
  };

  const handleShare = () => {
    Alert.alert(
      "Compartilhar",
      "Compartilhe meu portfólio com seus contatos!",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Compartilhar", onPress: () => console.log("Compartilhar") },
      ]
    );
  };

  return (
    <ImageBackground style={styles.container} source={ImgBackground}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Redes Sociais</Text>
          <Text style={styles.headerSubtitle}>
            Conecte-se comigo nas redes sociais
          </Text>
        </View>

        {/* Social Networks Grid */}
        <View style={styles.socialContainer}>
          {socialNetworks.map((social) => (
            <TouchableOpacity
              key={social.id}
              style={styles.socialCard}
              onPress={() => handleSocialPress(social.url, social.name)}
              activeOpacity={0.8}
            >
              <View style={styles.socialHeader}>
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: social.color },
                  ]}
                >
                  <Ionicons
                    name={social.icon as any}
                    size={24}
                    color="#FFFFFF"
                  />
                </View>
                <View style={styles.socialInfo}>
                  <Text style={styles.socialName}>{social.name}</Text>
                  <Text style={styles.socialUsername}>{social.username}</Text>
                </View>
              </View>

              <Text style={styles.socialDescription}>{social.description}</Text>

              <View style={styles.socialStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{social.followers}</Text>
                  <Text style={styles.statLabel}>Seguidores</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{social.posts}</Text>
                  <Text style={styles.statLabel}>Publicações</Text>
                </View>
              </View>

              <View
                style={[styles.followButton, { backgroundColor: social.color }]}
              >
                <Text style={styles.followButtonText}>Seguir</Text>
                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Entre em Contato</Text>
          <Text style={styles.contactSubtitle}>
            Prefere um contato direto? Entre em contato comigo!
          </Text>

          <View style={styles.contactButtons}>
            <TouchableOpacity style={styles.contactButton}>
              <Ionicons name="mail" size={20} color="#007AFF" />
              <Text style={styles.contactButtonText}>Email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactButton}>
              <Ionicons name="call" size={20} color="#007AFF" />
              <Text style={styles.contactButtonText}>Telefone</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactButton}
              onPress={handleShare}
            >
              <Ionicons name="share" size={20} color="#007AFF" />
              <Text style={styles.contactButtonText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    marginTop: 50,
  },
  header: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
    width: "95%",
    alignSelf: "center",
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
  socialContainer: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 16,
  },
  socialCard: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 10,
    marginBottom: 16,
    width: "48%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  socialHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  socialInfo: {
    flex: 1,
  },
  socialName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C1C1E",
  },
  socialUsername: {
    fontSize: 14,
    color: "#8E8E93",
  },
  socialDescription: {
    fontSize: 14,
    color: "#3A3A3C",
    lineHeight: 20,
    marginBottom: 16,
    textAlign: "center",
  },
  socialStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    width: "100%",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C1C1E",
  },
  statLabel: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 2,
  },
  followButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 50,
    gap: 8,
    width: "80%",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  contactSection: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginBottom: 8,
    textAlign: "center",
  },
  contactSubtitle: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 20,
  },
  contactButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
    gap: 8,
  },
  contactButtonText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
