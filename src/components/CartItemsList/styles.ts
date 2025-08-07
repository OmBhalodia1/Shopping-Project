import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  imageWrapper: {
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#eee',
    elevation: 4,
    zIndex: 0,
  },
  badgeWrapper: {
    position: 'absolute',
    top: 2,
    right: 2,
  },
  badge: {
    backgroundColor: '#d1d9fa',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 18,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  badgeText: {
    color: '#333',
    fontWeight: '700',
    fontSize: 11,
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
    marginTop: 14,
    marginLeft: 14,
  },
  textPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
});
