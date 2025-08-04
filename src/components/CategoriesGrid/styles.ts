import { StyleSheet, Dimensions } from 'react-native';
const ITEM_WIDTH = (Dimensions.get('window').width - 48) / 2;

export const styles = StyleSheet.create({
  row: { justifyContent: 'space-between', marginBottom: 16 },
  card: {
    width: ITEM_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: { width: 1, height: 6 },
    shadowRadius: 18,
    elevation: 2,
  },
  imagesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 2,
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 21,
    letterSpacing: -0.17,
    marginLeft: 2,
  },
  countBadge: {
    backgroundColor: '#DFE9FF',
    borderRadius: 5,
    minWidth: 38,
    alignItems: 'center',
  },
  categoryImg: {
    padding: 2,
  },
  countText: {
    color: '#202020',
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: -0.15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
  },
});
