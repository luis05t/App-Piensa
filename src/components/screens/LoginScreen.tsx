import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { loginUser } from "../service/authService";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      const userData = await loginUser(email, password);
      Alert.alert("Bienvenido", `Hola ${userData.name}`);
      navigation.navigate("Dashboard");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput style={styles.input} placeholder="Correo" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 10, marginBottom: 10 },
  button: { backgroundColor: "#28a745", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default LoginScreen;
