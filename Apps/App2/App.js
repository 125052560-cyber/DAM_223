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
     <Perfil nombre="Leonel García" carrera="Ingeniería en Tecnologías de la Información" materia="Desarrollo de Aplicaciones Móviles" cuatrimestre="4" style={styles.tarjeta1} />
          <Perfil nombre="Jennifer Gachuzo" carrera="Ingeniería en Mecatronica" materia="Desarrollo de Aplicaciones Móviles" cuatrimestre="4" style={styles.tarjeta2} />
     <Perfil nombre="Maria Guadalupe" carrera="Ingeniería en Administración" materia="Desarrollo de Aplicaciones Móviles" cuatrimestre="4" style={styles.tarjeta3} />  
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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  tarjeta1: {
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
  },
  tarjeta2: {
    borderWidth: 2,
    borderColor: 'orange',
    backgroundColor: 'lightyellow',
  },
  tarjeta3: {
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'lightgray',
  },
});
