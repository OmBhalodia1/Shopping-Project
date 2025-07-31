import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },

  bannerWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 160,
    justifyContent: 'center',
  },
  bannerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  bannerContent: {
    padding: 20,
    zIndex: 1,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    marginTop: 10,
  },
  bannerSubtitle: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 8,
    fontFamily: 'Nunito-Sans',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0,
  },
  bannerDesc: {
    fontSize: 12,
    color: '#fff',
    paddingVertical: 15,
    fontFamily: 'Raleway',
    fontWeight: '700',
    lineHeight: 15,
    letterSpacing: -0.11,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#0042E0',
    paddingHorizontal: 20,
  },

  topProductText: {
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.21,
    fontFamily: 'Raleway',
    fontSize: 21,
    marginTop: 18,
    marginBottom: 12,
  },
});
