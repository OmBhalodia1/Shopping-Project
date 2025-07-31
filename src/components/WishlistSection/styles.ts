import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 4,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 0,
  },
  left: {
    position: 'relative',
    width: 112,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  imageWrapper: {
    width: 112,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1608,
    shadowRadius: 10,
    elevation: 4,
  },

  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9,
    resizeMode: 'cover',
  },

  deleteButton: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',

    shadowOpacity: 0.1608,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#222',
  },

  deleteIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
  },

  addIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginTop: 65,
  },

  middle: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 12,
  },
  subtext: {
    fontSize: 16,
    color: '#222',
    fontWeight: '400',
    marginBottom: 4,
    fontFamily: 'Nunito-Sans',
    lineHeight: 16,
    letterSpacing: 0,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 1,
  },
  discountedPrice: {
    fontSize: 20,
    color: '#df4183',
    textDecorationLine: 'line-through',
    fontWeight: '400',
    marginRight: 8,
    opacity: 0.56,
  },
  price: {
    fontSize: 18,
    color: '#202020',
    fontWeight: '700',
    marginRight: 8,
    fontFamily: 'Raleway',
    lineHeight: 22,
    letterSpacing: -0.18,
  },
  optionsRow: {
    flexDirection: 'row',
    marginTop: 0,
  },
  optionBox: {
    backgroundColor: '#f0f3ff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginRight: 9,
  },
  optionText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Raleway',
    lineHeight: 18,

    letterSpacing: -0.14,
  },
});
