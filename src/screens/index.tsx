import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './private/home';
import { SignIn } from './public/tabs/signIn';
import { useState } from 'react';
import Public from './public';
export const Stack = createNativeStackNavigator();

export default function Screens() {
  const [token, setToken] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Public"
        screenOptions={{ headerShown: false }}
      >
        {token ? (
          <Stack.Screen name="Public" component={Public} />
        ) : (
          <Stack.Screen name="Private" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
