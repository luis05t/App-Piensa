import { Client } from 'react-native-paho-mqtt';

// Configuración del cliente MQTT
const client = new Client({
  uri: 'ws://TUBROKER:PUERTO/mqtt', // Reemplaza con tu servidor MQTT
  clientId: 'ReactNativeApp',
});

client.connect({ useSSL: false }).then(() => {
  console.log('Conectado al servidor MQTT');
  client.subscribe('sensor/health');
});

client.onMessageArrived = (message) => {
  console.log(`Mensaje recibido: ${message.payloadString}`);
};

export { client };
