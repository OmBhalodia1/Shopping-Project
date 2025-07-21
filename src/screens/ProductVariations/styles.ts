import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  card: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 16,
    elevation: 2,
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 16,
  },
  row: { flexDirection: 'row' },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionButton: {
    backgroundColor: '#E5EBFC',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 4,
    marginRight: 8,
  },
});
