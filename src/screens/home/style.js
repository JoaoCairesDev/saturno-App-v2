import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    padding: 12,
  },
  InitialContainerImage: {
    width: '96%',
    height: 150,
    backgroundColor: '#f56725',
    borderRadius: 25,
  },
  image: {
    width: '100%',
    borderRadius: 25,
  },
  InitialContainer: {
    position: 'relative',
    padding: 12,
  },
  DataFormat: {
    fontSize: 20,
    position: 'absolute',
    right: 15,
    top: 115,
  },
  UserName: {
    fontSize: 20,
    color: '#fff',
  },
});
export default styles;
