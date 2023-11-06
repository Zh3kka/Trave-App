import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { screenOptions } from "../constants/index";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
