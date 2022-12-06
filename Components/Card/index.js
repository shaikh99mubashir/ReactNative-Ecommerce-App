import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Card = ({navigation, route}) => {
  const NavigatePage = e => {
    navigation.navigate('Detail', e);
  };

  return (
    <View
      style={{
        width: '49%',
        backgroundColor: '#2F3156',
        padding: 5,
        marginVertical: 10,
        borderRadius: 8,
      }}>
      <TouchableOpacity onPress={() => NavigatePage(route)}>
        <Image
          source={{uri: route?.image}}
          style={{height: 110, borderRadius: 8, resizeMode: 'contain'}}
        />

        <View style={{marginTop: 10}}>
          <Text
            numberOfLines={2}
            style={{color: '#d6d5db', fontWeight: 'bold', fontSize: 14}}>
            {route?.title}
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#d6d5db', fontWeight: 'bold', fontSize: 12}}>
            rating: {route?.rating.rate}
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#d6d5db', fontWeight: 'bold', fontSize: 18}}>
            Price: {route?.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
