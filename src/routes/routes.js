import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';
import PaymentScreen from '../screens/PaymentScreen';
import ReviewOrder from '../screens/ReviewOrder';
import CartProvider from '../context/Cart';


const { Navigator, Screen } = createStackNavigator();

export default function routes(){
  return(
    <CartProvider>
      <NavigationContainer>
        <Navigator 
          screenOptions={{
            title: 'Finalizar Pedido',
            headerStyle: {
              backgroundColor: '#00d4df',
            },
            headerTintColor: '#fff',
          }}
          >
          <Screen
            options={{
              headerShown: false
            }}
            name="Home"
            component={Home}
            />
          <Screen
            name="PaymentScreen"
            component={PaymentScreen}
          />
          <Screen
            name="ReviewOrder"
            component={ReviewOrder}
          />
        </Navigator>
      </NavigationContainer> 
    </CartProvider>
    
  )
};

