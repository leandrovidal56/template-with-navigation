import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignIn } from './signIn';

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          //   tabBarButton: () => null,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
