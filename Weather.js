import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
    title: "Haze"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#485563", "#29323c"],
    title: "Thunderstorm"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#1f4037", "#99f2c8"],
    title: "Drizzle"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Rain"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#4AC29A", "#BDFFF3"],
    title: "Snow"
  },
  Atmosphere: {
    iconName: "weather-night",
    gradient: ["#4B79A1", "#283E51"],
    title: "Atmosphere"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#E684AE"],
    title: "Clear"
  },
  Clouds: {
    iconName: "weather-partlycloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Clouds"
  },
  Mist: {
    iconName: "weather-rainy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Mist"
  },
  Smoke: {
    iconName: "guy-fawkes-mask",
    gradient: ["#E6DADA", "#274046"],
    title: "Smoke"
  },
  Dust: {
    iconName: "guy-fawkes-mask",
    gradient: ["#30E8BF", "#FF8235"],
    title: "Dust"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#ADA996", "#F2F2F2", "#DBDBDB", "#EAEAEA"],
    title: "Fog"
  },
  Sand: {
    iconName: "timer-sand",
    gradient: ["#ffd89b", "#19547b"],
    title: "Sand"
  },
  Ash: {
    iconName: "car-wash",
    gradient: ["#ffd89b", "#19547b"],
    title: "Ash"
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Squall"
  },
  Tornado: {
    iconName: "weather-windy-variant",
    gradient: ["#1F1C2C", "#928DAB"],
    title: "Tornado"
  }
};

export default function Weather({
  temp,
  condition,
  name,
  temp_max,
  temp_min,
  description
}) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.text}>{temp}°C</Text>
        <Text style={styles.temp_minmax}>
          최고: {temp_max}°C 최저: {temp_min}°C
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>현위치: {name}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Smoke",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired,
  name: PropTypes.string.isRequired,
  temp_max: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "400",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20
    // alignItems: "flex-start"
  },
  temp_minmax: {
    fontWeight: "600",
    color: "white",
    fontSize: 15
  },
  description: {
    color: "white",
    fontSize: 15
  }
});
