import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Profile Screen</Text>
            </View>
        </View>
    );
};

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
});

export default ProfileScreen;