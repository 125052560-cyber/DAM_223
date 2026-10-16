import { View , Button , Image} from 'react-native';
import {Text} from 'react-native';
export const Saludo2 = () => {
    return (
        <View>
            <Text> HOLA RN: Componente Propio Compuesto </Text>
            <Image source={require('../assets/wave.png')} />
            <Button title="Presioname para saludar" />
        </View>
    );
} 