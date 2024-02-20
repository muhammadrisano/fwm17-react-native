import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios'



const Setting = ({navigation}) => {
  const [photo, setPhoto] = useState(null)

  const handleSelectPhoto = ()=>{
   

    // const options = {
    //   mediaType: 'photo',
    //   maxHeight: 2000,
    //   maxWidth: 2000
    // }
    launchCamera(null, (res)=>{
      if(res.didCancel){
        console.log('User cancelled image picker');
        return
      }
      const result = res.assets[0]
      console.log(result);
      const formData = new FormData()
      formData.append('file', {
        uri: result.uri,
        name: result.fileName,
        filename: result.fileName,
        type: result.type
      })

      const headers = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
      axios.post('https://fwm17-be-peword.vercel.app/v1/upload',formData, headers)
      .then((res)=>{
        const {data} = res.data
        console.log(data);
      })
      setPhoto(result)
    })
  }
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      alert("helo bro...")
    });
    return unsubscribe
  }, [navigation])

  return (
    <View>
      <Text>Setting Screen</Text>
        <Button title='select Photo' onPress={handleSelectPhoto}/>
        {photo &&  <Image
        style={styles.tinyLogo}
        source={{
          uri: photo.uri
        }}
      />}
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  tinyLogo: {
    width: 300,
    height: 300
  }
})