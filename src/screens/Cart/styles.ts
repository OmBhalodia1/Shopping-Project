import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 },
  innerContainer: { flex: 1, marginTop: 10 },
  header: { flexDirection: 'row', alignItems: 'center' },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: '#eef1fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  image: { flex: 1, alignItems: 'center', paddingVertical: 70 },
});
