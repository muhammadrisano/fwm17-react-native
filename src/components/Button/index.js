import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title, onPress}) => {

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text>Button</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  btn:{
    paddingHorizontal: 30,
    paddingVertical: 18,
    backgroundColor: 'pink',
    borderRadius: 6
  }
})