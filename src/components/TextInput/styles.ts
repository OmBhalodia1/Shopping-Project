import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 16,
    color: '#222',
    fontFamily: 'NunitoSans-Regular',
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
  },

  icon: {
    width: 24,
    height: 24,
  },
});
