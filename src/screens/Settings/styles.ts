import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'android' ? 200 : 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  section: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 14,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderColor: '#eee',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    flex: 1,
  },
  value: {
    color: '#222',
    marginRight: 10,
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
    color: '#222',
  },
  delete: {
    color: '#D97474',
    marginTop: 30,
    fontSize: 15,
    marginBottom: 30,
    textAlign: 'left',
  },
  footer: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  footerBrand: {
    fontSize: 20,
    fontFamily: 'Raleway',
    marginBottom: 2,
  },
  footerVersion: {
    fontSize: 12,
    fontFamily: 'Nunito-Sans-Regular',
    lineHeight: 20,
    color: '#000000',
  },
});
