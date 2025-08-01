import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 60 : 0,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageContainer: {
    shadowRadius: 3,
    shadowColor: '#222',
    shadowOpacity: 0.1608,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    elevation: 4,
  },
  headerRight: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {
    backgroundColor: '#004CFF',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  activityText: { color: '#fff', fontWeight: 'bold', padding: 2 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  icon: { fontSize: 20, marginLeft: 16 },
  icon1: {
    marginLeft: 16,
    borderRadius: 30,
    backgroundColor: '#F8F8F8',
  },
  greeting: { fontSize: 26, fontWeight: 'bold', marginBottom: 12 },
  announcementBox: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 4,
    alignItems: 'center',
  },
  announcementTitle: {
    fontWeight: '700',
    marginBottom: 4,
    alignSelf: 'flex-start',
    fontFamily: 'Raleway',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.14,
  },
  announcementDesc: {
    flex: 1,
    color: '#000000',
    fontSize: 11,
    fontFamily: 'Nunito Sans',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
  },
  sectionTitle: {
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.21,
    fontFamily: 'Raleway',
    fontSize: 21,
    marginTop: 18,
    marginBottom: 12,
  },
  storiesRow: {
    flexDirection: 'row',
    marginBottom: 12,
    shadowRadius: 3,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  orderBtn: {
    backgroundColor: '#e0e7ff',
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 8,
  },
  orderBtnText: {
    color: '#0042E0',
    fontFamily: 'Raleway',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 21,
    fontWeight: '400',
  },
  storyImage: { width: 110, height: 180, borderRadius: 16 },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#08C514',
    position: 'absolute',
    right: 2,
    top: -1,
    zIndex: 2,
  },
  whiteCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FFF',
    position: 'absolute',
    right: 1,
    top: -2.5,
    zIndex: 1,
  },
  announcementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 14,
  },
  arrowCircle: {
    backgroundColor: '#0F4BFF',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  arrow: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    bottom: Platform.OS === 'android' ? 4 : 0,
  },
});
