import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/welcome';
import SignUp from './src/signUp';
import Home from './src/home';
import LogIn from './src/logIn';
import Report from './src/report';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './src/chat';
import Appointment from './src/appointment';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const stack= createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={
          {headerShown: false}
        }/>
        <stack.Screen
        name="Login"
        component={LogIn}
        options={
          {headerShown: false}
        }/>
        <stack.Screen
        name="SignUp"
        component={SignUp}
        options={
          {headerShown: false}
        }/>
        <stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
      </stack.Navigator>

      


     
    </NavigationContainer>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
       screenOptions={({route})=>({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if(route.name === 'AI Chat'){
            iconName =  'robot' ;
            size = focused ? 30 : 30;
            color = focused ? 'purple' : 'rgba(74, 8, 135, 0.557)';
            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
          }
          if(route.name === 'Chat'){
            iconName = 'wechat';
            size = focused ? 30 : 30;
            color = focused ? 'purple' : 'rgba(74, 8, 135, 0.557)';
            return <AntDesign name={iconName} size={size} color={color}/>
          }
          if(route.name === 'Booking'){
            iconName = 'laptop-medical';
            size = focused ? 30 : 30;
            color = focused ? 'purple' : 'rgba(74, 8, 135, 0.557)';
            return <FontAwesome5 name={iconName} size={size} color={color}/>
          }
          if (route.name === 'Report') {
            iconName = 'profile';
            size = focused ? 30 : 30;
            color = focused ? 'purple' : 'rgba(74, 8, 135, 0.557)';
            return <AntDesign name={iconName} size={size} color={color}/>
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        }
      })}
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        tabBarStyle:{ 
          paddingBottom: 5,
          paddingTop: 15, },
        }
      }>
      <Tab.Screen name="AI Chat" component={Home}
      options={{
    headerShown: false
  }} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Booking" component={Appointment} 
      options={{
        headerShown: true
      }}/>
      <Tab.Screen name="Report" component={Report} 
      options={{
        headerShown: false
      }}/>
      
    </Tab.Navigator>
  );
}

