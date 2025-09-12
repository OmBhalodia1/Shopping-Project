import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  innerContainer: { flex: 1, paddingHorizontal: 20 },
  card: {
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#1D2134',
    fontFamily: 'Raleway',
    marginBottom: 4,
  },
  trackingNumber: {
    fontSize: 15,
    color: '#444A61',
    fontFamily: 'Nunito-Sans-Regular',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 12,
  },
});
