import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  title: {
    fontSize: 24,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 18,
    marginBottom: 32,
    color: '#222',
    textAlign: 'center',
    fontWeight: '300',
    fontFamily: 'Nunito Sans',
  },
  optionsList: {
    width: '100%',
    alignItems: 'center',
    marginInlineStart: 37,
  },
  nextButton: {
    width: 335,
    marginBottom: 24,
    marginTop: 108,
  },
  background: {
    position: 'absolute',
    height: 270,
    width: 320,
    right: 0,
    top: 0,
  },
});
