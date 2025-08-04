import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 3,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#202020',
    marginRight: 16,
    fontFamily: 'Raleway',
    lineHeight: 36,
    letterSpacing: -0.28,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Raleway',
    lineHeight: 21,
    letterSpacing: -0.16,
    fontWeight: '500',
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: 'darkblue',
  },
  customText: {
    color: '#0042E0',
    fontSize: 20,
    marginRight: 110,
  },
  clearButton: {
    position: 'relative',
  },
});
