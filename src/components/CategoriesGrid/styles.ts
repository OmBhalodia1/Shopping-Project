import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const horizontalPadding = 32; // 16 left + 16 right
const gutter = 16; // space between cards

export const ITEM_WIDTH = Math.floor(
  (screenWidth - horizontalPadding - gutter) / 2,
);

export const styles = StyleSheet.create({
  gridContainer: { overflow: 'visible', paddingHorizontal: 2 },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 18,
    elevation: 2,
    overflow: 'visible',
  },
  imagesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  categoryImg: {
    width: (ITEM_WIDTH - 20) / 2 - 2, // Two images per row inside the card
    height: (ITEM_WIDTH - 20) / 2 - 2,
    borderRadius: 8,
    marginBottom: 4,
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
    paddingHorizontal: 6,
  },
  countText: {
    color: '#202020',
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: -0.15,
  },
});
