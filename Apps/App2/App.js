/*Zona de importaciones*/
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
/*zona Main(componentes ó screens)*/

export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen />

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
