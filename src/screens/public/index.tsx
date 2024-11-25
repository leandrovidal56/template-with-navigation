import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();

export default function Public() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
