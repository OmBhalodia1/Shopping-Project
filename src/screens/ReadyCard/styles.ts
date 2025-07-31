import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: 500,
    height: 852,
  },
  paginationWrapper: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 7,
    backgroundColor: '#c7d2fe',
  },
  dotActive: {
    backgroundColor: '#004CFF',
  },
  dotInactive: {
    backgroundColor: '#C7D6FB',
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#004CFF',
    paddingVertical: 14,
    paddingHorizontal: 73,
    borderRadius: 16,
  },
  buttonText: {
    color: '#F3F3F3',
    fontSize: 22,
    fontWeight: '300',
    fontFamily: 'nunito sans',
    letterSpacing: 0,
    lineHeight: 31,
  },
});
