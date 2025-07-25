import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'flex-start',
  },
  imageGrid: {
    width: 64,
    height: 64,
    marginRight: 14,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
  },
  singleImage: {
    width: 64,
    height: 64,
  },
  twoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
  },
  twoImage: {
    width: 30,
    height: 54,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  threeGrid: {
    width: 64,
    height: 64,
    justifyContent: 'center',
  },
  threeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  threeImage: {
    width: 30,
    height: 30,
    borderRadius: 8,
    margin: 2,
  },
  threeImage1: {
    width: 60,
    height: 30,
    borderRadius: 8,
    margin: 2,
  },
  fourGrid: {
    width: 64,
    height: 64,
  },
  fourRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fourImage: {
    width: 30,
    height: 30,
    borderRadius: 8,
    margin: 2,
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
  },
  orderText: {
    fontSize: 14,
    color: '#111',
    marginBottom: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  deliveryText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 6,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 6,
  },
  checkIcon: {
    width: 18,
    height: 18,
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 64,
  },
  itemBadge: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 6,
  },
  itemText: {
    fontSize: 13,
    color: '#111',
  },
  actionButton: {
    height: 36,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  actionButton1: {
    height: 36,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 27,
    marginTop: 10,
  },
});
