import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,

    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#222',
    fontFamily: 'Raleway',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressContainer: {
    flex: 1,
    paddingRight: 8,
  },
  addressText: {
    fontSize: 14,
    color: '#444',
    fontFamily: 'Nunito-Sans-Regular',
  },

  icon: {
    width: 30,
    height: 30,
  },
});
