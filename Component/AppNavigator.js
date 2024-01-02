import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraPage from './CameraPage';
import HomePage from './HomePage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Camera" component={CameraPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
