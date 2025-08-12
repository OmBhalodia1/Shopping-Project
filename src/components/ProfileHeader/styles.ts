import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: Platform.OS === 'android' ? 0 : 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {
    borderRadius: 18,
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
  activityText: {
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
});
