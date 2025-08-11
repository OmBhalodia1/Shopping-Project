import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  storyImage: { width: 110, height: 180, borderRadius: 16, right: 4 },
  liveBadge: {
    position: 'absolute',
    top: 10,
    left: 8,
    backgroundColor: '#08C514',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1,
    zIndex: 2,
  },
  liveBadgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  storiesRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
});
