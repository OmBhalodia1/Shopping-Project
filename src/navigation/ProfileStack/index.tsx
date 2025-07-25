import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../../screens/Profile';
import ProfileToReceive from '../../screens/ProfileToReceive';
import ProfileToReceiveProgress from '../../screens/ProfileToReceiveProgress';
import ProfileDeliveryNotifications from '../../screens/ProfileDeliveryNotification';
import ProfileHistory from '../../screens/ProfileHistory';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileToReceive" component={ProfileToReceive} />
      <Stack.Screen
        name="ProfileToReceiveProgress"
        component={ProfileToReceiveProgress}
      />
      <Stack.Screen name="ProfileHistory" component={ProfileHistory} />
    </Stack.Navigator>
  );
}
