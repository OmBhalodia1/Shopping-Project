import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F1F4FE',
    marginBottom: 10,
    paddingVertical: 25,
    paddingLeft: 25,
    borderRadius: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#131313',
  },
  innerContainer: {
    padding: 24,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F1F4FE',
    borderRadius: 9,
    padding: 12,
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  inputSmall: {
    backgroundColor: '#F1F4FE',
    borderRadius: 9,
    padding: 12,
    fontSize: 16,
    color: '#000',
    marginBottom: 24,
  },
});
