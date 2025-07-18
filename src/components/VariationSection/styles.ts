import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  variationImageWrap: {
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedVariation: {
    borderColor: '#0958FD',
  },
  variationImage: {
    width: 80,
    height: 80,
    aspectRatio: 0.8,
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
});
