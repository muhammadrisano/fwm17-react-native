import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {IcHome} from '../../assets/icons'

const Profile = ({route}) => {

  // const {name, idRecipe} = route.params
  return (
    <View>
      <Text>Profile Screen</Text>
      <IcHome width={120} height={120} fill="red" stroke="blue"/>
      {/* <Text>Name: {name} dan id {idRecipe} </Text> */}

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})