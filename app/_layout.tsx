import { Ionicons } from "@expo/vector-icons";
import { BottomTabBar, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { JSX } from "react";
import { Animated, StyleProp, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

// --- Componente da Barra de Abas com Efeito Blur ---
function BlurTabBar(
  props: JSX.IntrinsicAttributes &
    BottomTabBarProps & {
      style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    }
) {
  const insets = useSafeAreaInsets();
  return (
    <BlurView
      intensity={90}
      tint="dark"
      style={{
        position: "absolute",
        bottom: insets.bottom + 10,
        left: "10%",
        right: "10%",
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(175, 175, 175, 0.3)",
      }}
    >
      <BottomTabBar
        {...props}
        style={{
          backgroundColor: "rgba(175, 175, 175, 0.72)",
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        }}
      />
    </BlurView>
  );
}

// --- Layout Principal ---
export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <BlurTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#afafaf",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.container}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={28}
                color={color}
              />
              <Text style={[styles.titulo, { color }]}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.container}>
              <Ionicons
                name={focused ? "construct" : "construct-outline"}
                size={28}
                color={color}
              />
              <Text style={[styles.titulo, { color }]}>Projetos</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="redes-sociais"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.container}>
              <Ionicons
                name={focused ? "call" : "call-outline"}
                size={28}
                color={color}
              />
              <Text style={[styles.titulo, { color }]}>Contato</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    top: 10,
  },
  titulo: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 2,
    width: 60,
  },
});
