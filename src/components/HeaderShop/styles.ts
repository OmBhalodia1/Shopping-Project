import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 3,
    backgroundColor: '#fff',
    width: '100%',
    zIndex: 10,
    overflow: 'visible',
  },
  title: {
    fontSize: 28,
    color: '#202020',
    marginRight: 16,
    fontFamily: 'Raleway',
    lineHeight: 36,
    letterSpacing: -0.28,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 999,
    paddingHorizontal: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchText: {
    fontSize: 16,
    fontFamily: 'Raleway',
  },
  placeholder: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Raleway',
  },
  clearButton: {
    paddingHorizontal: 10,
  },
  clearText: {
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
    width: 22,
    height: 22,
    marginLeft: 8,
  },
});
