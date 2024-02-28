import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import Axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../UI/components/Card';

import provinceCityData from '../UI/provinceCityData.json';


const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setBirthDate] = useState({
    day: '',
    month: '',
    year: ''
  });
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState({
    areaCode: '',
    number: ''
  });
  const [DNI, setDNI] = useState('');
  const [location, setLocation] = useState({
    province: '',
    city: ''
  })
  const [address, setAdress] = useState({
    street: '',
    number: '',
    apartment: ''
  });

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
// Agregar un Campo para subir una foto de perfil

useEffect(() => {
  // Carga las provincias al inicio
  setProvinces(provinceCityData);
}, []);

useEffect(() => {
  if(location.province) {
    const selectedProvince = provinces.find(province => province.id === location.province);
      if (selectedProvince) {
        setCities(selectedProvince.cities);
      }
  }
}, [location.province, provinces]);


  const handleSignUp = () => {

    Axios.post('http://192.168.100.141:3000/api/auth/register', {
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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/img/pngegg.png")} style={{ width: 180, height: 180 }} />
      </View>
      <Card>
        <Text style={styles.title}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          keyboardType="default"
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          keyboardType="default"
          autoCapitalize="none"
          value={surname}
          onChangeText={setSurname}
        />

        <View style={{ padding: 5 }}>
            <Text style={{ color: 'white'}}>Fecha de Nacimineto (DD/MM/YYYY)</Text>
        </View>
        <View style={{ padding: 10, borderColor: 'white', borderWidth: 2, borderRadius: 10, marginBottom: 10 }}>
            <View>
                <TextInput
                style={styles.input}
                placeholder="Dia"
                keyboardType="number-pad"
                autoCapitalize="none"
                value={birthDate.day}
                onChangeText={ text => setBirthDate({...birthDate, day: text})}
                />
                <TextInput
                style={styles.input}
                placeholder="Mes"
                keyboardType="number-pad"
                autoCapitalize="none"
                value={birthDate.month}
                onChangeText={ text => setBirthDate({...birthDate, month: text})}
                />
                <TextInput
                style={styles.input}
                placeholder="Año"
                keyboardType="number-pad"
                autoCapitalize="none"
                value={birthDate.year}
                onChangeText={ text => setBirthDate({...birthDate, year: text})}
                />
            </View>
        </View>

        <View style={styles.pickerContainer}>
            <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)} style={styles.picker}>
              <Picker.Item label="Hombre" value="Hombre"/>
              <Picker.Item label="Mujer" value="Mujer"/>
              <Picker.Item label="Indefinido" value="Indefinido"/>
            </Picker>
        </View>

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
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.areaCodeInput]}
            placeholder="Cód. Área"
            keyboardType="phone-pad"
            autoCapitalize="none"
            value={phone.areaCode}
            onChangeText={text => setPhone({...phone, areaCode: text})}
          />
          <TextInput
            style={[styles.input, { flex: 2 }]}
            placeholder="Telefono"
            keyboardType="phone-pad"
            autoCapitalize="none"
            value={phone.number}
            onChangeText={text => setPhone({...phone, number: text})}
          />
        </View>

        <TextInput
            style={styles.input}
            placeholder="Numero de DNI"
            keyboardType="number-pad"
            autoCapitalize="none"
            value={DNI}
            onChangeText={setDNI}
          />

        <View style={{ padding: 5 }}>
            <Text style={{ color: 'white'}}>Localidad</Text>
        </View>
        <View style={{ padding: 10, borderColor: 'white', borderWidth: 2, borderRadius: 10, marginBottom: 10 }}>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={location.province} onValueChange={(itemValue) => setLocation({...location, province: itemValue})} style={styles.picker}>
                  {provinces.map((province) => (
                    <Picker.Item key={province.id} label={province.name} value={province.id} />
                  ))}
                </Picker>
            </View>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={location.city} onValueChange={(itemValue) => setLocation({...location, city: itemValue})} style={styles.picker}>
                  {cities.map((city, index) => (
                    <Picker.Item key={index} label={city} value={city} />
                  ))}
                </Picker>
            </View>
        </View>

        <View style={{ padding: 5 }}>
            <Text style={{ color: 'white'}}>Direccion</Text>
        </View>
        <View style={{ padding: 10, borderColor: 'white', borderWidth: 2, borderRadius: 10, marginBottom: 10 }}>
          <TextInput
            style={styles.input}
            placeholder="Calle"
            keyboardType="default"
            autoCapitalize="none"
            value={address.street}
            onChangeText={text => setAdress({...address, street: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Numero"
            keyboardType="number-pad"
            autoCapitalize="none"
            value={address.number}
            onChangeText={text => setAdress({...address, number: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Departamento (opcional)"
            keyboardType="default"
            autoCapitalize="none"
            value={address.apartment}
            onChangeText={text => setAdress({...address, apartment: text})}
          />
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </Card>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signInLink}>¿Ya tienes una cuenta? Inicia sesión aquí</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
      },
      inputContainer: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      input: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#ffffff',
      },
      areaCodeInput: {
        flex: 1,
        marginRight: 10, // Espacio entre los campos de texto
      },
      signUpButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      signInLink: {
        marginTop: 10,
        color: '#ffffff',
        textDecorationLine: 'underline',
      },
      imageContainer: {
        marginBottom: 50,
        marginTop: 50,
      },
      pickerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        marginBottom: 15,
        borderColor: '#cccccc',
      }
      ,
      picker: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
      },
});

export default SignUpScreen;
