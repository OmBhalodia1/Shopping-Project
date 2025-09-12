import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    height: 330,
    width: Platform.OS === 'android' ? '100%' : '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 50,
    fontFamily: 'Raleway',
    color: '#000',
    lineHeight: 54,
    letterSpacing: -0.5,
    flex: 1,
    marginTop: 78,
    marginInlineStart: 10,
  },
  form: {
    gap: 9.88,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 40,
    paddingHorizontal: 16,
  },
  inputInner: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#D2D2D2',
  },
  icon: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#888',
  },
  flag: {
    fontSize: 20,
    marginRight: 4,
  },
  dropdown: {
    fontSize: 14,
    marginRight: 8,
    color: '#888',
  },
  separator: {
    fontSize: 18,
    marginHorizontal: 8,
    color: '#ccc',
  },
  buttonContainer: {
    marginTop: 52.1,
    gap: 12,
  },
});
