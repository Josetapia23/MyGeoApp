import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationButton from './components/LocationButton';

export default function App() {
  const [location, setLocation] = useState(null);

  const handleLocationFetched = (coords) => {
    setLocation(coords);
    // Aquí podrías también almacenar la ubicación en SQLite o realizar otras acciones.
    console.log('Ubicación obtenida:', coords);
  };

  return (
    <View style={styles.container}>
      <Text>Presiona el botón para obtener la ubicación</Text>
      <LocationButton onLocationFetched={handleLocationFetched} />
      {location && (
        <Text>Latitud: {location.latitude}, Longitud: {location.longitude}</Text>
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
});
