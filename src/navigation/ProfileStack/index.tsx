import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../../screens/Profile';
import ProfileToReceive from '../../screens/ProfileToReceive';
import ProfileToReceiveProgress from '../../screens/ProfileToReceiveProgress';
import ProfileDeliveryNotifications from '../../screens/ProfileDeliveryNotification';
import ProfileHistory from '../../screens/ProfileHistory';
import ProfileVoucher from '../../screens/ProfileVoucher';
import Settings from '../../screens/Settings';
import SettingsProfile from '../../screens/SettingsProfile';

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
      <Stack.Screen name="ProfileVoucher" component={ProfileVoucher} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SettingsProfile" component={SettingsProfile} />
    </Stack.Navigator>
  );
}
