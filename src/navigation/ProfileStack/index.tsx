import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../../screens/Profile';
import ProfileToReceive from '../../screens/ProfileToReceive';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileToReceive" component={ProfileToReceive} />
    </Stack.Navigator>
  );
}
