/*Zona de importaciones*/
import { StyleSheet, View,Text } from 'react-native';


/*zona Main(componentes ó screens)*/
export default function SafeScreen() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la practica 10 </Text>
        <Text>Equipo de dulce</Text>

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
})
