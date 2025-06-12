import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate("Inicio")}
        />
      </View>

      <Text style={styles.subtitle}>Ainda não tem uma conta?</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate("Cadastro")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87cefa",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 10,
  },
  inputContainer: {
    width: windowWidth * 0.8,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: "#ddaedd",
    margin: 5,
    width: windowWidth * 0.5,
    borderRadius: 10,
  },
});
