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
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingTop: 280,
    paddingBottom: 67,
  },
  title: {
    fontSize: 21,
    lineHeight: 30,
    letterSpacing: -0.21,
  },
  subtitle: {
    fontSize: 19,
    marginTop: 5,
    marginBottom: 23,
    color: '#222',
    textAlign: 'center',
    fontWeight: '300',
    fontFamily: 'NunitoSans-Regular',
    letterSpacing: 0,
    lineHeight: 27,
  },
  input: {
    width: 335,
    height: 50,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    fontSize: 17,
    color: '#222',
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.17,
  },
  saveButton: {
    width: 335,
    // marginVertical:10
  },
  cancelButton: {},
});
