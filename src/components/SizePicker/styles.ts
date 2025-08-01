import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f7ff',
    borderRadius: 22,
    paddingHorizontal: 4,
    height: 37,
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 0,
    borderWidth: 0,
  },
  segment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
    position: 'relative',
  },
  label: {
    fontSize: 13,
    color: '#AAC3FF',
    fontWeight: '800',
    zIndex: 1,
    letterSpacing: -0.13,
    lineHeight: 17,
  },
  selectedLabel: {
    color: '#0053ff',
    fontSize: 15,
  },
  circleHighlight: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 48,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E5EBFC',
    shadowColor: '#1d1d20',
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    transform: [{ translateX: -24 }, { translateY: -24 }],
    zIndex: 0,
  },
  selectedSegment: {
    zIndex: 1,
  },
});
