/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Dimensions, Text,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const MapScreen = ({ route }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordinates, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return <Text>{errorMsg}</Text>;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLocation({ latitude, longitude });
    })();
  }, []);

  useEffect(() => (
    route.params.setAddress(`${coordinates?.latitude} ${coordinates?.longitude}`)
  ));

  if (coordinates === null) {
    return <View />;
  }

  return (
    <MapView
      style={styles.mapStyle}
      camera={{
        center: {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        },
        pitch: 0,
        heading: 0,
        altitude: 18,
        zoom: 18,
      }}
      onPress={(e) => setLocation(e.nativeEvent.coordinate)}
    >
      <Marker
        coordinate={coordinates}
        title="hi"
        description="test"
      />
    </MapView>
  );
};
export default MapScreen;
