import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 'auto',
  },
  titleContainer: { alignSelf: 'flex-start' },
  icon: {
    marginBottom: 32,
    flex: 1,
  },
  title: {
    fontSize: 32,
    textAlign: 'left',
    marginBottom: 18,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 20,
    lineHeight: 27,
    fontFamily: 'Nunito-Sans',
    fontWeight: '300',
  },
  helpText: {
    fontSize: 16,
    color: '#242424',
    alignSelf: 'flex-start',
    marginBottom: 8,
    lineHeight: 24,
  },
  emailContainer: { alignSelf: 'flex-start' },
  email: {
    textAlign: 'left',
    marginBottom: 18,
  },
});
