/*Zona de importaciones*/

import { StyleSheet, View,Text,Button } from 'react-native';
import useState from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextInput from './TextInputScreen';
import ModalScreen from './ModalScreen';
import FlatListScreen from './FlatListScreen';
import activityIndicatorScreen from './ActivityIndicatorScreen';
import ImageBackgroungScreen from './ImagegroungScreen';
/*zona Main(componentes ó screens)*/
export default function MenuScreen() {
    const [screen, setScreen] = useState('Menu');
    switch (screen) {
        case 'Safe':
            return <SafeScreen />;
        case 'Press':
            return <PressableScreen />;
        case 'Tarjetas':
            return <TarjetasScreen />;
            case 'Menu':
                default:
                return (
                    <View style={styles.container}>
                        <Text>Menu de Practicas</Text>
                        <Button title=" Practica Tarjetas" onPress={() => setScreen('Tarjetas')} />
                        <Button title="Practica SafeAreaView" onPress={() => setScreen('Safe')} />
                        <Button title="Practica Pressable" onPress={() => setScreen('Press')} />
                    </View>
                );
                case 'TextInput':
                    return <TextInput />;
                case 'Modal':
                    return <ModalScreen />; 
                case 'FlatList':
                    return <FlatListScreen />;
                case 'ActivityIndicator':
                    return <activityIndicatorScreen />;
                case 'ImageBackgroung':
                    return <ImageBackgroungScreen />;
                    
    }
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

