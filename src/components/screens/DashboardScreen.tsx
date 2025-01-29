import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchHealthData } from '../service/api';

const DashboardScreen = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [heartRate, setHeartRate] = useState<number | null>(null);
  const userId = '123e4567-e89b-12d3-a456-426614174000';

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchHealthData(userId);
      if (data) {
        setTemperature(data.temperature);
        setHeartRate(data.heartRate);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Estado de Salud</Text>
      <Text style={styles.info}>🌡️ Temperatura: {temperature ?? 'Cargando...'} °C</Text>
      <Text style={styles.info}>❤️ Frecuencia Cardíaca: {heartRate ?? 'Cargando...'} BPM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 10 },
});

export default DashboardScreen;
