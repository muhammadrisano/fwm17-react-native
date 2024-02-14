import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({route}) => {

  const {name, idRecipe} = route.params
  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Name: {name} dan id {idRecipe} </Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})