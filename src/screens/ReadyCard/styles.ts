import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

// Design based on some reference width & height. e.g. iPhone 12 Pro: 390 x 844
const REFERENCE_WIDTH = 390;
const REFERENCE_HEIGHT = 844;

// Scale function based on width
const scaleWidth = (size: number) => (width / REFERENCE_WIDTH) * size;
// Scale function based on height
const scaleHeight = (size: number) => (height / REFERENCE_HEIGHT) * size;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: width, // full width of screen
    height: scaleHeight(852), // scale height proportionally
  },
  paginationWrapper: {
    marginTop: scaleHeight(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: scaleWidth(20),
    height: scaleWidth(20),
    borderRadius: scaleWidth(10),
    marginHorizontal: scaleWidth(7),
    backgroundColor: '#c7d2fe',
  },
  dotActive: {
    backgroundColor: '#004CFF',
  },
  dotInactive: {
    backgroundColor: '#C7D6FB',
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#004CFF',
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(73),
    borderRadius: scaleWidth(16),
  },
  buttonText: {
    color: '#F3F3F3',
    fontSize: scaleWidth(22),
    fontWeight: '300',
    fontFamily: 'nunito sans',
    letterSpacing: 0,
    lineHeight: scaleHeight(31),
  },
});
