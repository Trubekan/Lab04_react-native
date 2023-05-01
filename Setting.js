import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native-web";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>Enzo Francesco Velarde Hernández</Text>
        <Text style={styles.text}>Estudiante de TECSUP</Text>
        <Text style={styles.titulo}>Extracto</Text>
        <Text style={styles.text}>Desarrollador de software, autodidacta con conocimientos en PHP,
          Laravel, Python, Java , CSS y HTML base de datos SQL y NOSQL.</Text>
        <Text style={styles.titulo}>Educación</Text>
        <Text style={styles.text}>TECSUP</Text>
        <Text style={styles.text}> · (marzo de 2020 - diciembre de 2023)</Text>
        <Text style={styles.titulo}>Contactar</Text>
        <Text style={styles.text}>Urb. Guardia Civil III etapa k-22
          enzo.velarde@tecsup.edu.pe</Text>
        <Text style={styles.text}>www.linkedin.com/in/enzo-velarde
          (LinkedIn)</Text>
        <Text style={styles.titulo}>Aptitudes principales :
          Desarrollo front end,
          Desarrollo web back end</Text>
        <Text style={styles.titulo}>Certifications</Text>
        <Text style={styles.text}>Scrum Fundamentals Certified (SFC)</Text>
        <Image source={{ uri: 'https://elcomercio.pe/resizer/7-iNW2CrOv38iypONlsVPBZTIs0=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VE5OEES6CJDQHEVJWWSKRPDOJE.jpg' }} style={styles.image2} />
        <Text style={styles.text}>Si juegas WOW como yo tambien te dejo mi link rdio para jugar juntos </Text>
        <Text style={styles.titulo}>https://raider.io/characters/us/drakkari/Enton</Text>
      </View>
      <Image source={{ uri: 'https://images7.alphacoders.com/122/1226930.jpg' }} style={styles.image} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  image2: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
})
