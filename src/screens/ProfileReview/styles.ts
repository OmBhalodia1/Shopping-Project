import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F1F4FE',
    marginBottom: 10,
    paddingVertical: 25,
    paddingLeft: 25,
    borderRadius: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#131313',
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  imageContainer: {
    shadowRadius: 3,
    shadowColor: '#222',
    shadowOpacity: 0.1608,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    marginLeft: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
  },
  description: {
    color: '#000000',
    fontSize: 14,
  },
  bold: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 8,
  },
  star: {
    flexDirection: 'row',
    marginVertical: 16,
    marginLeft: 18,
  },
  imageStar: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  inputContainer: {
    backgroundColor: '#F1F4FE',
    borderRadius: 9,
    marginVertical: 12,
    marginHorizontal: 18,
    paddingHorizontal: 14,
    paddingTop: 4,
    minHeight: 100,
    justifyContent: 'flex-start',
  },
  inputLabel: {
    color: '#141741',
    fontWeight: '500',
    fontSize: 18,
    paddingLeft: 2,
    marginBottom: 4,
  },
  input: {
    fontSize: 18,
    color: '#222',
    minHeight: 38,
    paddingVertical: 6,
    paddingLeft: 0,
  },
  button: {
    paddingHorizontal: 10,
    width: 360,
    margin: 10,
    marginLeft: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
});
