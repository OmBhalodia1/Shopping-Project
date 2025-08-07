import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  imageContainer: {
    shadowRadius: 3,
    shadowColor: '#222',
    shadowOpacity: 0.1608,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    elevation: 4,
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
  progressContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
  },
  progressWrapper: {
    alignItems: 'center',
    marginVertical: 8,
  },

  progressButton: {
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 7,
    alignSelf: 'flex-end',
    marginRight: 20,
  },

  progressText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },

  vouchersContainer: {
    padding: 16,
    paddingBottom: 30,
  },
});
