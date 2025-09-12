import { StyleSheet } from 'react-native';

export const styles = (scale: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
    },
    headerContainer: {
      backgroundColor: '#F8FAFF',
      paddingVertical: 10 * scale,
      paddingHorizontal: 20 * scale,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    header: {
      fontSize: 22 * scale,
      fontWeight: 'bold',
      color: '#202020',
      marginBottom: 10 * scale,
    },
    label: {
      fontSize: 14 * scale,
      color: '#202020',
      marginBottom: 5 * scale,
      marginTop: 12 * scale,
      fontWeight: '500',
    },
    disabledField: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      // marginBottom: 14 * scale,
      paddingVertical: 12 * scale,
      paddingHorizontal: 12 * scale,
      opacity: 0.7,
    },
    disabledText: {
      flex: 1,
      fontSize: 14 * scale,
      color: '#c3c3c3',
      fontWeight: 'bold',
    },
    arrowCircle: {
      width: 26 * scale,
      height: 26 * scale,
      borderRadius: 13 * scale,
      backgroundColor: '#f0f0f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    arrow: {
      fontSize: 16 * scale,
      color: '#d1d1d1',
      fontWeight: 'bold',
      bottom: 3.5,
    },
    input: {
      backgroundColor: '#f6f8fd',
      borderRadius: 10,
      fontSize: 14 * scale,
      paddingVertical: 12 * scale,
      paddingHorizontal: 12 * scale,
      // marginBottom: 8 * scale,
      color: '#202020',
    },
  });
