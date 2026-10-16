/*Zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Saludo } from './components/saludo';
import { Saludo2 } from './components/saludo2';
import { Perfil } from './components/Perfil'; 

/*zona Main(componentes ó screens)*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native </Text>
<Image source={require('./assets/wave.png')} />
<Saludo />
<Saludo2 />
<Perfil nombre="Leonel García" carrera="Ingeniería en Tecnologías de la Información" materia="Desarrollo de Aplicaciones Móviles" cuatrimestre="4" />
      <StatusBar style="auto" />
    </View>
  );
}
/*Zona de estilos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
