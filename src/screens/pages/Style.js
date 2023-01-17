import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //Container Geral
  container: {
    flex: 1,
    padding: 18,
  },
  //Container do Chat
  ChatContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //cores dos Textos
  TextBlack: {
    color: '#000',
  },
  TextRed: {
    color: 'red',
  },
  //Cor da letra do Butão
  TextButtonOne: {
    color: '#fff',
    fontSize: 24,
  },
  //Container da area de login e registro
  LoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#e1e1e1',
  },
  //estilo do botão login e registro
  buttonOne: {
    backgroundColor: '#0f232e',
    borderColor: '#F56725',
    borderRadius: 20,
    paddingLeft: 72,
    paddingRight: 72,
    paddingBottom: 9,
    paddingTop: 6,
    borderWidth: 2,
  },
  //estilo do input login e registro
  InputLogin: {
    width: '80%',
    borderBottomColor: '#0f232e',
    borderBottomWidth: 1,
    paddingLeft: 11,
  },
  //alerta do login e registro
  contantAlert: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //containers ghosts para divisão dos elementos
  Ghost100: {
    height: 100,
  },
  Ghost50: {
    height: 50,
  },
  //container 1 da tela inicial
  containerInicial: {
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    paddingTop: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  //estilo do relogio e do bom dia
  horaView: {
    fontFamily: 'Arial',
    color: '#0f232e',
    position: 'absolute',
    right: 22,
    bottom: 16,
    fontWeight: '700',
    fontSize: 20,
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f232e',
    position: 'absolute',
    left: 18,
    top: 10,
  },
  containerNewTask: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerQuadrado: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    padding: 8,
    borderRadius: 14,
    marginHorizontal: 5,
  },
});

export default styles;
