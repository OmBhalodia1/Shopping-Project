import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#222',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 5.7,
    borderColor: '#FFFFFF',
    elevation: 4,
  },

  image: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#ff4d79',
    paddingHorizontal: 1,
    paddingVertical: 3,
    borderRadius: 8,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
