import { StyleSheet, Text, View } from 'react-native'
import {Provider} from 'react-redux'
import React from 'react'
import MainRoute from './src/router'
import store from './src/store/store'

const App = () => {
  return (
    <Provider store={store}>
    <MainRoute/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})