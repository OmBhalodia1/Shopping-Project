import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 260,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginBottom: 18,
  },
  selectedOption: {
    backgroundColor: '#E5EBFC',
  },
  unselectedOption: {
    backgroundColor: '#FFEBEB',
  },
  optionText: {
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Raleway',
    lineHeight: 20,
    letterSpacing: -0.15,
  },
  selectedText: {
    color: '#2667FF',
  },
  unselectedText: {
    color: '#000000',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: '#FFFFFF',
    backgroundColor: '#2667FF',
  },
  radioUnselected: {
    borderColor: '#FFFFFF',
    backgroundColor: '#F8CECE',
  },
});
