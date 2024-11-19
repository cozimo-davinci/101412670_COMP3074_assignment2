import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './screens/Home';
import Navigator from './routes/DrawNavigator';

export default function App() {

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator />
    </GestureHandlerRootView>


  )


}
