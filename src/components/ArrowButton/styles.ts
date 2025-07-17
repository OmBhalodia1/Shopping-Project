import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
export const styles = StyleSheet.create({
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 213,
    height: 30,
  },
  loginText: {
    color: 'black',
    fontSize: 15,
    marginRight: 8,
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
  },
  arrowCircle: {
    backgroundColor: '#0F4BFF',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
