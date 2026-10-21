import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre,style }) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={[estilos.tarjeta, style]}>
      <Text style={estilos.nombre}>Nombre: {nombre}</Text>
      {mostrar && (
        <>
          <Text style={estilos.carrera}>Carrera: {carrera}</Text>
          <Text style={estilos.Materia}>Materia: {materia}</Text>
          <Text style={estilos.cuatrimestre}>Cuatrimestre: {cuatrimestre}</Text>
        </>
      )}
      <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)} />
    </View>
  );
};
const estilos = StyleSheet.create({
  nombre: {
    fontSize: 24,
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  carrera: {
    fontSize: 18,
    fontFamily: 'roboto',
    color: 'blue',
  },
  cuatrimestre: {
    fontSize: 18,
    fontFamily: 'roboto',
    fontStyle: 'italic',
    color: 'black',
  },
  Materia: {
    fontSize: 18,
    fontFamily: 'roboto',
    color: 'green',
  },
  tarjeta: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },

});
