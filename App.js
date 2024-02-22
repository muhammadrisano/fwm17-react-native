import { StyleSheet, Text, View } from 'react-native'
import {Provider} from 'react-redux'
import { LogLevel, OneSignal } from 'react-native-onesignal';
import React, { useEffect } from 'react'
import MainRoute from './src/router'
import store from './src/store/store'
const App = () => {
 
  useEffect(()=>{
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal Initialization
    OneSignal.initialize("aa31724e-0b8d-48c7-b3eb-1337f6070971");
  
    // requestPermission will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.Notifications.requestPermission(true);
  
    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', (event) => {
      console.log('OneSignal: notification clicked:', event);
    });
  },[])

  return (
    <Provider store={store}>
    <MainRoute/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})