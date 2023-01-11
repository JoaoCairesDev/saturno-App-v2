import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  ChatContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBlack: {
    color: '#000',
  },
  TextRed: {
    color: 'red',
  },
  TextButtonOne: {
    color: '#fff',
    fontSize: 24,
  },
  LoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#e1e1e1',
  },
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
  InputLogin: {
    width: '80%',
    borderBottomColor: '#0f232e',
    borderBottomWidth: 1,
    paddingLeft: 11,
  },
  contantAlert: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Ghost100: {
    height: 100,
  },
  Ghost50: {
    height: 50,
  },
});

export default styles;
