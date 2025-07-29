import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#F7F8FC',
    borderRadius: 13,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 14,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  date: {
    color: '#222',
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold',
    color: '#202020',
    fontSize: 15,
    marginTop: 3,
  },
  amount: {
    fontSize: 20,
    color: '#202020',
    fontWeight: 'bold',
    marginLeft: 12,
  },
  negative: {
    color: '#D97474',
  },
});
