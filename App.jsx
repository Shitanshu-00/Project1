import 'react-native-gesture-handler';
import Route from './Utils/Route';
import 'expo-dev-client';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Arial': require('./assets/Fonts/Arial.ttf'),
    'Lato-Bold': require('./assets/Fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/Fonts/Lato-Regular.ttf'),
    'Lato-Thin': require('./assets/Fonts/Lato-Thin.ttf'),
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/Fonts/Roboto-Bold.ttf'),
})

  return (
    <Route />
  );
}


