import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.28,
  },
  subtext: {
    marginTop: 28,
    marginBottom: 24,
    letterSpacing: 0,
    lineHeight: 35,
  },
  notYouContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
