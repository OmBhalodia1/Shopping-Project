import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  optionContainer: {
    borderWidth: 1.5,
    borderColor: '#004CFF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },

  optionLabel: {
    fontSize: 20,
    fontFamily: 'Raleway',
    lineHeight: 20,
    letterSpacing: 0,
    minWidth: '28%',
  },
  optionDetail: {
    fontSize: 16,
    fontFamily: 'Raleway',
    lineHeight: 17,
    letterSpacing: -0.13,
    color: '#004CFF',
    backgroundColor: '#F5F8FF',
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  optionPrice: {
    fontSize: 20,
    fontFamily: 'Raleway',
    flex: 1,
    lineHeight: 20,
    letterSpacing: -0.16,
    textAlign: 'right',
    verticalAlign: 'middle',
  },
});
