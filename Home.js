import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function Home() {
    const [mensaje, setMensaje] = useState('');

    const enviarMensaje = () => {
        setMensaje(
            <Text style={styles.mensajeEnviado}>Gracias por enviar tu información!</Text>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>Bienvenido a mi pagina Web!</Text>
                <Text style={styles.text}>Hola soy un programador junior aprendiendo react-native</Text>
                <Text style={styles.text}>En mis tiempos libres juego World of Warcraft y tambien entreno en el gym</Text>
                <Text style={styles.text}>Su gustas puedes dejarme tu nombre y tu correo para cualquier duda que tengas!</Text>
                <Text></Text>
                <Text></Text>
                <TextInput placeholder="Digita tu nombre" style={styles.textInput} />
                <TextInput placeholder="Digita tu correo electronico" style={styles.textInput} />
                <Button title="Enviar" onPress={enviarMensaje} />
                <Text>{mensaje}</Text>
                <Image source={{ uri: 'https://i.ibb.co/WpN9pgh/Captura-de-pantalla-22.png' }} style={styles.image} />
                <Text></Text>
                <Text style={styles.text}>Si puedes imaginarlo puedes programarlo :D</Text>
            </View>
            <Image source={{ uri: 'https://images7.alphacoders.com/122/1226930.jpg' }} style={styles.image2} />
            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 20,
        width: '30%',
        backgroundColor: '#E9C033',
        fontSize: 14,
        color: 'white',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    textContainer: {
        position: 'relative',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    },
    image2: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    mensajeEnviado: {
        fontSize: 24,
        color: 'white',
    },
});
