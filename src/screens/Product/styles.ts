import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageSection: {
    width: '100%',
    height: 460,
    backgroundColor: '#F9F9F9',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    height: '100%',
  },
  carouselDots: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsSection: {
    paddingHorizontal: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#202020',
    marginBottom: 7,
    marginTop: 9,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 15,
    color: '#292929',
    marginVertical: 12,
    lineHeight: 21,
  },
});
