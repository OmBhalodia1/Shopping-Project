import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  timeBoxes: {
    flexDirection: 'row',
  },
  timeBox: {
    backgroundColor: '#F3F3F3',
    marginHorizontal: 2,
    padding: 4.5,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeValue: {
    fontSize: 17,
    color: '#222',
    fontFamily: 'Raleway',
  },
});
