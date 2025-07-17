import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  subGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 13,
    justifyContent: 'center',
  },
  subItem: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#FFEBEB',
    borderRadius: 10,
    paddingVertical: 12,

    margin: 4,
    minWidth: '47.5%',
    alignItems: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#222',
    fontWeight: '500',
  },
});
