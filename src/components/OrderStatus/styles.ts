import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    flexShrink: 1,
    maxWidth: '70%',
  },
  description: {
    fontSize: 14,
    color: '#222',
  },
  dateTime: {
    fontSize: 14,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  active: {
    color: '#151515',
  },
  activeDate: {
    color: '#323366',
    backgroundColor: 'transparent',
    fontWeight: '500',
  },
  pending: {
    color: '#bfc1d0',
    fontWeight: '700',
  },
  pendingText: {
    color: '#bfc1d0',
  },
  expectedBox: {
    backgroundColor: '#edf0fa',
    color: '#7b71cf',
    fontWeight: 'bold',
  },
  errorTitle: {
    color: '#0042E0',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorDateTime: {
    backgroundColor: '#F63C3C',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  highlightTitle: {
    color: '#0042E0',
    fontWeight: 'bold',
  },
  highlightDateTime: {
    backgroundColor: '#F63C3C',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 2,
    borderRadius: 6,
    marginLeft: 8,
  },
});
