// import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [identificacion, setIdentifacacion] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [definitiva, setDefinitiva] = useState("");
  const [observacion, setObservacion] = useState("");

  let refIdentificacion = useRef();

  const guardar = () => {
  setDefinitiva(
    (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
  );

    setDefinitiva((def) => [
      def,
      { identificacion: identificacion, definitiva: definitiva },
    ]);
    setIdentifacacion("");
    setDefinitiva("");
    refIdentificacion.current.focus();
  };

  let buscar = (nomBuscar) => {
    let nomEncontrado = definitiva.find((res) => res.identificacion == identificacion)
    if (condition) {
      
    }
  }

  // let calcular = (pro) => {
  //   let op = 0;
  //   switch (pro) {
  //     case ">= 3.0":
  //       op = 
      
          
    
  //     default:
  //       break;
  //   }
  // }


  let limpiar = () => {
    setNota1("");
    setNota2("");
    setNota3("");
    setDefinitiva("");
  };

  return (
    <View style={{}}>
      <Text style={styles.estiloTitulo}>Sistemas de notas</Text>
      {/* <StatusBar style="auto" /> */}

      <View style={{ flexDirection: "column" }}>
        <TextInput
          style={[styles.estiloInput, { marginTop: "50px" }]}
          placeholder="Digite identificación"
          required
        ></TextInput>

        <TextInput
          style={[styles.estiloInput]}
          placeholder="Digite nombre"
          required
        ></TextInput>
        <View>
          <TextInput
            style={[styles.estiloInput]}
            placeholder="Digite asignatura"
            required
          ></TextInput>
          
          <TextInput
            style={[styles.estiloInput]}
            placeholder="Nota momento 1"
            onChangeText={(nota1) => setNota1(nota1)}
            value={nota1}
            required
          ></TextInput>
        </View>

        <View>
          <TextInput
            style={[styles.estiloInput]}
            placeholder="Nota momento 2"
            onChangeText={(nota2) => setNota2(nota2)}
            value={nota2}
            required
          ></TextInput>

          <TextInput
            style={[styles.estiloInput]}
            placeholder="Nota momento 3"
            onChangeText={(nota3) => setNota3(nota3)}
            value={nota3}
            required
          ></TextInput>
        </View>

        <View style={{}}>
          <text style={{ marginLeft: 3 }}>Definitiva</text>
          <text>{definitiva}</text>

          <text style={{ marginTop: 10, marginLeft: 3 }}>Observación</text>
          <text>{observacion}</text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.estiloBoton}
          onPress={() => guardar()}>
            <Text>Calcular/guardar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.estiloBoton} onPress={limpiar}>
            <Text>Limpiar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.estiloBoton}>
            <Text>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  estiloTitulo: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 20,
    color: "orange",
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  estiloInput: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 7,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 15,
    minWidth: "15%",
  },
  estiloBoton: {
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});
