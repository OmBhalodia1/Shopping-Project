import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 },
  innerContainer: { flex: 1, marginTop: 10 },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: '#eef1fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
});
