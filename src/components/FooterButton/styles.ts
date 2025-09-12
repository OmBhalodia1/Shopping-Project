import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  heartButton: {
    borderWidth: 2,
    borderColor: '#ECECEC',
    borderRadius: 12,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  heartText: {
    fontSize: 27,
    color: '#181818',
  },
  addToCartButton: {
    backgroundColor: '#181818',
    borderRadius: 12,
    paddingVertical: 14,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFF',
    fontSize: 17.5,
    fontWeight: '300',
    letterSpacing: 0.3,
  },
  buyNowButton: {
    backgroundColor: '#0958FD',
    borderRadius: 12,
    paddingVertical: 14,
    flex: 1,
    alignItems: 'center',
  },
  buyNowText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 0.3,
  },
  heartIcon: {
    width: 26,
    height: 26,
    tintColor: 'black',
    backgroundColor: '#f9f9f9',
  },
  heartIconActive: {
    width: 26,
    height: 26,
    tintColor: 'red',
    backgroundColor: '#f9f9f9',
  },
});
