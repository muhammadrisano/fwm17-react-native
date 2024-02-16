import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux'

import {IcHome} from '../../assets/icons';
import axios from 'axios';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Profile = ({route}) => {
  const [workers, setWorkers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const stateGlo = useSelector((state)=>state)
  useEffect(() => {
    getWorker()
  }, [params]);

  const getWorker = ()=>{
    const token = AsyncStorage.getItem('token');
    setIsLoading(true)
    axios
      .get(`https://fwm17-be-peword.vercel.app/v1/workers`, {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setIsLoading(false)
        const {data} = res.data;
        console.log(data);
        setWorkers(current => [...current, ...data]);
      })
      .catch((err)=>{
        setIsLoading(false)
        console.log(err);

      })
  }
  // const {name, idRecipe} = route.params
  const renderLoader = () => {
    return (
      isLoading && (<View style={styles.loader}>
      <ActivityIndicator size="large" color="pink" />
    </View>)
     
    );
  };

  const loadMoreItem = () => {
    setParams(current => ({...current, page: current.page + 1}));
  };
  return (
    <View>
      <Text>Profile Screen2 Name app = {stateGlo.name}</Text>
      {/* <IcHome width={120} height={120} fill="red" stroke="blue"/> */}
      {/* <Text>Name: {name} dan id {idRecipe} </Text> */}

      <FlatList
        data={workers}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 70,
    borderRadius: 12,
    backgroundColor: 'pink',
    marginVertical: 6,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  loader: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
