import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View>
      <Text>Nombre: {nombre}</Text>
      {mostrar && (
        <>
          <Text>Carrera: {carrera}</Text>
          <Text>Materia: {materia}</Text>
          <Text>Cuatrimestre: {cuatrimestre}</Text>
        </>
      )}
      <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)} />
    </View>
  );
};
