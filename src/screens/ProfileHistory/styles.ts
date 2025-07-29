import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerRight: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 6,
    bottom: 4,
  },
  activityText: {
    padding: 2,
    fontSize: 21,
    fontFamily: 'Raleway',
    lineHeight: 30,
    letterSpacing: -0.21,
    fontWeight: '700',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { fontSize: 20, marginLeft: 16 },
  icon1: {
    marginLeft: 16,
    borderRadius: 30,
    backgroundColor: '#F8F8F8',
  },
  list: {
    marginBottom: 130,
  },
});
