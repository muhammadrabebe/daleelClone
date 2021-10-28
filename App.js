import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigationStack from './navigation/mainNavigationStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigationStack />
    </NavigationContainer>
  )
}
export default App;
