import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    borderWidth: 4,
    height: 60,
    width: 60,
    borderColor: '#FFFFFF',
    borderRadius: 30,
  },
  imageBorder: {
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 26,
    shadowOffset: { width: 0, height: 4 },
  },
  nameText: {
    fontFamily: 'Raleway',
    fontSize: 18,
    fontWeight: '600',
  },
  starContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 3,
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  reviewText: {
    fontFamily: 'Nunito-Sans',
    fontSize: 13.5,
    fontWeight: '400',
    lineHeight: 18,
    marginVertical: 10,
  },
});
