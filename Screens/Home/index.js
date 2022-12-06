import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
const HomeScreen = ({navigation}) => {
  const [dataState, setDataState] = useState([]);
  const [category, setCategory] = useState('');

  const getData = useCallback(async () => {
    try {
      const data = await axios.get('https://fakestoreapi.com/products');
      setDataState(data);
      let filterCategory = data.data?.map(item => item.category);
      filterCategory = [...new Set([...filterCategory])];
      setCategory([...filterCategory]);
    } catch (e) {
      console.error(e);
    }
  }, []);
  
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.container, styles.horizontal]}>
        {!dataState?.data ? (
          <ActivityIndicator size="large" color="#2F3156" />
        ) : (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: '#1E203B',
            }}>
            <Header />
            <View
              style={{
                backgroundColor: '#2F3156',
                width: '100%',
                height: 40,
                borderRadius: 40,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                <TextInput
                  placeholder="Search"
                  placeholderTextColor="#d6d5db"
                  style={{color: '#d6d5db'}}
                />
              
                <Icon name="search1" size={15} color='#d6d5db' />
              </View>
            </View>
            {dataState?.data &&
              dataState?.data?.map((e, i) => {
                return <Card navigation={navigation} route={e} key={i} />;
              })}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#1E203B',
  },
});

export default HomeScreen;
