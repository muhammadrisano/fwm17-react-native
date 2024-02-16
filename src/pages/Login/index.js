import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import axios from 'axios'


const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const apiKey = process.env.API_KEY;
  const handleLogin = ()=>{
    const payload = {
      email,
      password
    }
    axios.post('https://fwm17-be-peword.vercel.app/v1/auth/login', payload)
    .then(async(res)=>{
     const {data} = res.data
     console.log(data.token);
     await AsyncStorage.setItem('token', data.token)
     alert('anda berhasil login')
     navigation.navigate('MainTab')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <View>
      <SafeAreaView>
        <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true}/>
        </SafeAreaView>
        <Button onPress={handleLogin} title='Login'/>
        <Text>env = {apiKey}</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})