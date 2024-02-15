import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = ({navigation}) => {
  // const [token, setToken] = useState('')
  const [workers, setWorkers] = useState([]);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    axios
      .get(`https://fwm17-be-peword.vercel.app/v1/workers`, {
        params,
      })
      .then(res => {
        const {data} = res.data;
        console.log(data);
        setWorkers(data);
      });
  }, []);
  const hanldePress = () => {
    navigation.navigate('Profile', {
      name: 'risano',
      idRecipe: '123123123123',
    });
  };
  return (
    <ScrollView>
      <Text>Home Screen</Text>
      <Button onPress={hanldePress} color="red" title="Pindah ke Profile" />
      {/* <Text>{token}</Text> */}
      <View style={styles.containerCard}>
        {workers.map(item => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerCard:{
    flexWrap: 'wrap',
    gap: 8,
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row'
  },
  card:{
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'lightblue'
  },
  title:{
    textAlign: 'center',
    color: 'black'
  }
});
