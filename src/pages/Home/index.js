import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  const hanldePress = ()=>{
    navigation.navigate('Profile', {
      name: 'risano',
      idRecipe: '123123123123'
    })
  }
  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={hanldePress} color="red" title='Pindah ke Profile'/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})