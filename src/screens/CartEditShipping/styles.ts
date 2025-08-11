import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#202020',
  },
  label: {
    fontSize: 16,
    color: '#202020',
    marginBottom: 5,
    marginTop: 14,
    fontWeight: '500',
  },
  disabledField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f8fd',
    borderRadius: 10,
    marginBottom: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    opacity: 0.7,
  },
  disabledText: {
    flex: 1,
    fontSize: 16,
    color: '#c3c3c3',
    fontWeight: 'bold',
  },
  arrowCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f0f0f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 18,
    color: '#d1d1d1',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f6f8fd',
    borderRadius: 10,
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 8,
    color: '#202020',
  },
});
