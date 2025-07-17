import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  background: {
    position: 'absolute',
    height: 270,
    width: 320,
    right: 0,
    top: 0,
  },
  title: {
    fontSize: 24,
    marginTop: 280,
    letterSpacing: -0.21,
  },
  subtitle: {
    fontSize: 19,
    marginTop: 15,
    color: '#000000',
    textAlign: 'center',
    fontWeight: '300',
    fontFamily: 'Nunito Sans',
  },
  phoneNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 32,
    letterSpacing: 2,
    fontFamily: 'Nunito Sans',
  },
  dotsRow: {
    marginBottom: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 40,
    width: '100%',
  },
  flatListContent: {
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: '#e3ebff',
    marginLeft: 15,
    left: 97,
  },
  hiddenInput: {
    width: 1,
    height: 1,
    opacity: 0,
    position: 'absolute',
  },
  sendAgainButton: {
    width: 220,
    backgroundColor: '#FF5790',
    marginTop: 140,
  },
  cancelButton: {
    fontSize: 15,
    marginBottom: 60,
    lineHeight: 27,
    letterSpacing: 0,
  },
});
