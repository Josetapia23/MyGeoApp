import React, { useState } from 'react';
import { Button, Alert, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function LocationButton({ onLocationFetched }) {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'No podemos acceder a la localización');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);

    // Llamar a la función onLocationFetched que se pasa como prop
    if (onLocationFetched) {
      onLocationFetched(loc.coords);
    }
  };

  return (
    <View>
      <Button title="Obtener Ubicación" onPress={getLocation} />
      {location && (
        <Text>Latitud: {location.latitude}, Longitud: {location.longitude}</Text>
      )}
    </View>
  );
}
