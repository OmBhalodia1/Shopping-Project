import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: 500,
    height: 772,
    zIndex: -1,
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
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
});
