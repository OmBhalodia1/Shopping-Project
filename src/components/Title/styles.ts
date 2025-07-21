import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: 21,
    lineHeight: 30,
    letterSpacing: -0.21,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  star: {
    flexDirection: 'row',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  categoryButton: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FFEDED',
    marginRight: 8,
    backgroundColor: '#FFEDED',
  },
  categoryButtonActive: {
    backgroundColor: '#E5EBFC',
    borderColor: '#004CFF',
  },
  categoryButtonText: {
    color: '#222',
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontSize: 13,
    textAlign: 'center',
  },
  categoryButtonTextActive: {
    color: '#004CFF',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
