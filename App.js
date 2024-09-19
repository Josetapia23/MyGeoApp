import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import LocationButton from './components/LocationButton';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState(null);

  const handleLocationFetched = (coords) => {
    setLocation(coords);
  };

  return (
    <View style={styles.container}>
      <Text>Presiona el botón para obtener la ubicación</Text>
      <LocationButton onLocationFetched={handleLocationFetched} />
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Tu ubicación"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2, // Muestra el mapa en la mitad de la pantalla
  },
});
