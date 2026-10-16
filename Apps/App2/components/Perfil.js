import {View, Text, Button} from 'react-native';
export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {
  const[mostrar, setMostrar] = useState(false);
    return (
    /* Componente funcional que recibe props y muestra información del perfil */
    <View>

      <Text>Nombre: {nombre}</Text>
      {mostrar &&
     <><>
                    <Text>Carrera: {carrera}</Text>
                    <Text>Materia: {materia}</Text>
                    <Text>Cuatrimestre: {cuatrimestre}</Text>
                </>
                <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)} /></>
      }
      </View>
  );
};