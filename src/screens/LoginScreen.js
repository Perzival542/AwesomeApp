import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    Axios.post('http://192.168.100.141:3000/api/auth/login', {
      email: email,
      password: password
    })
    .then(response => {
      // Manejar la respuesta
      console.log('Respuesta del servidor:', response.data);

      navigation.navigate("Home");
      // Aquí puedes guardar el token de autenticación en el estado de tu aplicación o en AsyncStorage
    })
    .catch(error => {
      // Manejar el error
      console.error('Error al iniciar sesión:', error);
    });

    console.log('Iniciando sesión con:', email, password);
  };

  return (
    <LinearGradient colors={['#2F3EE9', '#0065BF', '#296675']} style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/img/pngegg.png")} style={{ width: 180, height: 180 }} />
      </View>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginBottom: 50,
  }
});

export default LoginScreen;
