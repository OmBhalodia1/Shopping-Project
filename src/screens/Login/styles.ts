import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 53,
  },
  headerSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 33,
  },
  header: {
    marginBottom: 8,
  },
  gap: { gap: 36.7 },
  subHeader: {
    fontSize: 19,
    color: '#202020',
  },
  formSection: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heart: { marginTop: 3, marginLeft: 10.2 },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 59.12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 16,
    color: '#222',
    width: '100%',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#004CFF',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 18,
    width: '100%',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Nunito Sans',
  },
  cancelText: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
    lineHeight: 26,
    marginBottom: 0,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 8,
    fontFamily: 'Nunito Sans',
  },
});
