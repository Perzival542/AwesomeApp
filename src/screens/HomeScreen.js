import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Bienvenido</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.greenButton]} onPress={() => navigation.navigate("Profile")}>
                    <View>
                        <Image source={require('../../assets/img/IconamoonProfileFill.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <Text style={styles.buttonText}>Mi Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={() => alert("Boton 2 Presionado")}>
                    <View>
                        <Image source={require('../../assets/img/IonTicketSharp.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <Text style={styles.buttonText}>Mis Entradas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.darkBlueButton]} onPress={() => alert("Boton 3 Presionado")}>
                    <View>
                        <Image source={require('../../assets/img/MaterialSymbolsCalendarMonth.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <Text style={styles.buttonText}>Proximos</Text>
                    <Text style={styles.buttonText}>Partidos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => {
                    console.log("Cerrando Sesion");
                    navigation.navigate("Login");
                }}>
                    <View>
                        <Image source={require('../../assets/img/MaterialSymbolsLogout.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <Text style={styles.buttonText}>Cerrar</Text>
                    <Text style={styles.buttonText}>Sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    titleContainer: {
        marginTop: 80, // Ajusta el margen superior según sea necesario
        marginBottom: 40, // Ajusta el margen inferior según sea necesario
        paddingHorizontal: 10, // Ajusta el relleno horizontal según sea necesario
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: screenWidth,
    },
    button: {
        width: (screenWidth / 2.5) - 5,
        height: 150,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    greenButton: {
        backgroundColor: 'green',
    },
    blueButton: {
        backgroundColor: 'lightblue',
    },
    darkBlueButton: {
        backgroundColor: 'darkblue',
    },
    blackButton: {
        backgroundColor: 'black',
    }
})


export default HomeScreen;