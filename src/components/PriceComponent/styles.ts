import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  priceRangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceText: {
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 2,
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginLeft: 60,
  },
  sliderKnob: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: '#dce2f7',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: -9,
    zIndex: 1,
  },
  sliderLine: {
    height: 6,
    width: 200,
    backgroundColor: '#3373FB',
    borderRadius: 3,
    marginHorizontal: 0,
  },
  sortRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  sortButton: {
    backgroundColor: '#f4f7fa',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  sortButtonActive: {
    backgroundColor: '#eaf1ff',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  sortButtonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '500',
  },

  sortButtonTextActive: {
    color: '#2569fd',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 18,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },

  tickContainer: {
    position: 'absolute',

    zIndex: Platform.OS === 'android' ? 2 : 0,
  },
  tickCircle: {
    width: 25,
    height: 25,
    borderRadius: 999,
    backgroundColor: '#285AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },
  tickText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    justifyContent: 'center',
  },
});
