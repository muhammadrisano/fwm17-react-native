// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import styles from './src/styles'
// import Button from './src/components/Button'
// import logo from './src/assets/logo.png'
// import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Setting from '../pages/Setting';
import Flash from '../pages/Flash';
import MyTabBar from '../components/MyTabBar';
import Login from '../pages/Login';

const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    
    <Tab.Navigator tabBar={(props)=> <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />

    </Tab.Navigator>
  );
};

const MainRoute = () => {
  //   const handlePress = ()=>{
  //     console.log('helo world');
  //   }

  const Stack = createNativeStackNavigator();
  return (
    // <View>
    //   <Text>App test</Text>
    //   <View style={styles.box}>
    //     <View style={styles.boxChild}>

    //     </View>
    //     <View style={styles.boxChild}>
    //     <Image style={styles.logo} source={logo}/>
    //     </View>
    //       {/* <Button color="red" style={styles.btnClick} title='Click'/> */}
    //       <TouchableOpacity style={styles.btnClick}>
    //         <Text style={styles.textBtn}>Batal</Text>
    //       </TouchableOpacity>
    //       <Button onPress={handlePress} title='Button saya'/>
    //   </View>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="flash"
          component={Flash}
          options={{headerShown: false}}
        />
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
