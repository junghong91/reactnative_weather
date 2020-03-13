import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "7dcdc400403f6354ca9ab487985aface";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        name,
        main: { temp, temp_max, temp_min },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      name,
      temp_max,
      temp_min,
      temp,
      condition: weather[0].main,
      description: weather[0].description
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {
      isLoading,
      temp,
      condition,
      name,
      temp_max,
      temp_min,
      description
    } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        name={name}
        temp_max={temp_max}
        temp_min={temp_min}
        description={description}
      />
    );
  }
}
