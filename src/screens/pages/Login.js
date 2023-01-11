import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import styles from './Style';

import saturnoLogo from '../utils/saturnoLogo_1.png';

//Importação da configuração do Firebase
import firebase from '../../config/firebase';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  //Verificação do login e senha
  const [errorLogin, setErrorLogin] = useState('');

  //Função de Login
  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, Password)
      .then(userCredential => {
        let user = userCredential.user;
        navigation.navigate('Home');
        console.log(user);
        // ...
      })
      .catch(error => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.LoginContainer}>
      <Image
        source={saturnoLogo}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <View style={styles.Ghost100}></View>
      <TextInput
        style={styles.InputLogin}
        placeholder="Email"
        placeholderTextColor="#000"
        type="text"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.InputLogin}
        secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor="#000"
        type="text"
        value={Password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.Ghost100}></View>
      {errorLogin === true ? (
        <View style={styles.contantAlert}>
          <Text style={styles.TextBlack}>Email ou Senha incorretos!</Text>
        </View>
      ) : (
        <View></View>
      )}
      {email === '' || Password === '' ? (
        <TouchableOpacity disabled={true} style={styles.buttonOne}>
          <Text style={styles.TextButtonOne}>Entrar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonOne}>
          <Text style={styles.TextButtonOne} onPress={loginFirebase}>
            Entrar
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.Ghost50}></View>
      <Text style={styles.TextBlack}>
        Ainda não é cadastrado?
        <Text
          style={styles.TextRed}
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Cadastre-se
        </Text>
      </Text>
      <View style={{height: 100}}></View>
    </KeyboardAvoidingView>
  );
}
