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

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  //Verificação do login e senha
  const [errorRegister, setErrorRegister] = useState('');

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, Password)
      .then(userCredential => {
        let user = userCredential.user;
        console.log(user);
        navigation.navigate('Home');
      })
      .catch(error => {
        setErrorRegister(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.LoginContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
      {errorRegister === true ? (
        <View style={styles.contantAlert}>
          <Text style={styles.TextBlack}>Email ou Senha já cadastrado!</Text>
        </View>
      ) : (
        <View></View>
      )}
      {email === '' || Password === '' ? (
        <TouchableOpacity disabled={true} style={styles.buttonOne}>
          <Text style={styles.TextButtonOne}>Criar </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonOne}>
          <Text style={styles.TextButtonOne} onPress={register}>
            Criar
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.Ghost50}></View>
      <Text style={styles.TextBlack}>
        Já tem cadastro?
        <Text
          style={styles.TextRed}
          onPress={() => navigation.navigate('Login')}>
          {' '}
          Entrar na minha conta.
        </Text>
      </Text>
      <View style={styles.Ghost100}></View>
    </KeyboardAvoidingView>
  );
}
