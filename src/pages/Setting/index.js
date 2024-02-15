import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker' 
import axios from 'axios'
import React from 'react'

const Setting = () => {

  const handleSelectFile = ()=>{
    var options = {

      title: 'Select Image',

      customButtons: [

        { 

          name: 'customOptionKey', 

          title: 'Choose file from Custom Option' 

        },

      ],

      storageOptions: {

        skipBackup: true,

        path: 'images',

      },

    };

    launchCamera(options, res => {

      console.log('Response = ', res);

      if (res.didCancel) {

        console.log('User cancelled image picker');

      } else if (res.error) {

        console.log('ImagePicker Error: ', res.error);

      } else if (res.customButton) {

        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);

      } else {

        let source = res;
        let headers = {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: `Bearer ${auth.data.token}`,
          },
        };

        let formDatax = new FormData();

        formDatax.append('file', res);
      }
     const response =  axios.post('https://fwm17-be-peword.vercel.app/v1/upload', formData. headers)
     console.log(response);
    });


  }
  return (
    <View>
      <Text>Setting Screen</Text>
      <TouchableOpacity onPress={handleSelectFile}>
        <Text>Select File</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})