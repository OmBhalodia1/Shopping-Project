import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  label: { fontSize: 18, fontWeight: '500', marginRight: 15 },
  controls: { flexDirection: 'row', alignItems: 'center' },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#2961f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    backgroundColor: 'white',
  },
  buttonText: { fontSize: 24, color: '#2961f5', textAlign: 'center' },
  quantityBox: {
    backgroundColor: '#EEF2FF',
    width: 60,
    height: 44,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: { fontSize: 24, color: '#1a2257', fontWeight: '500' },
});
