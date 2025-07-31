import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    shadowRadius: 3,
    shadowColor: '#222',
    shadowOpacity: 0.16,
    padding: 5,
    shadowOffset: { width: 0, height: 5 },
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    elevation: 4,
  },
  title: {
    marginTop: 5,
    fontSize: 13,
    color: '#202020',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontWeight: '500',
    lineHeight: 17,
    letterSpacing: -0.13,
  },
  tickContainer: {
    position: 'absolute',
    right: -4,
    top: -4,
  },
  tickCircle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#285AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },
  tickText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    justifyContent: 'center',
  },
});
