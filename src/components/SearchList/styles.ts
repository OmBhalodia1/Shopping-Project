import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#202020',
    fontFamily: 'Raleway',
    lineHeight: 23,
    letterSpacing: -0.18,
  },
  deleteIcon: {
    width: 30,
    height: 30,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    backgroundColor: '#f4f4f4',
    borderRadius: 9,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  chipText: {
    fontFamily: 'Raleway',
    fontWeight: '300',
    fontSize: 17,
    color: '#000000',
    lineHeight: 21,
    letterSpacing: -0.17,
    textAlign: 'center',
  },
});
