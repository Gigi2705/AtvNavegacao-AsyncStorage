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

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <View style={styles.inputContainer}>
        <Text>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="seu nome de usuário"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@gimail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry
          autoCapitalize="none"
        />

        <Text>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate("Inicio")}
        />
      </View>

      <Text style={styles.subtitle}>Já possui login?</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ir para login"
          onPress={() => navigation.navigate("Login")}
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
    fontSize: 24,
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
