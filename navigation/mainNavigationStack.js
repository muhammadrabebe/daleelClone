import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Categorydetails from '../screens/categoryDetails';
import Drawer from './drawer';
import CategoryItemList from '../screens/categoryItemList';

const Stack = createStackNavigator();

const mainNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={Categorydetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="categoryItemList"
        component={CategoryItemList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default mainNavigationStack;
