import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#004CFF',
    borderRadius: 14,
    padding: 12,

    marginBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },

  optionLabel: {
    fontSize: 20,
    fontFamily: 'Raleway',
    fontWeight: '500',
    flex: 1,
    lineHeight: 20,
    letterSpacing: 0,
  },
  optionDetail: {
    fontSize: 16,
    fontFamily: 'Raleway',
    fontWeight: '500',
    lineHeight: 17,
    letterSpacing: -0.13,
    color: '#004CFF',
    backgroundColor: '#F5F8FF',
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  optionPrice: {
    fontSize: 20,
    fontFamily: 'Raleway',
    fontWeight: '700',
    flex: 1,
    lineHeight: 20,
    letterSpacing: -0.16,
    textAlign: 'right',
  },
});
