import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
const Header = ({navigation, back}) => {
  return (
    <View style={{marginBottom:15, flexDirection:'row',justifyContent:'space-between', width:'100%', alignItems:'center',}}>
    
    {back?
    <View style={{flexDirection:'row',justifyContent:'space-between', width:'100%', paddingHorizontal:15, marginVertical:15, alignItems:'center'}}>
    <TouchableOpacity onPress={()=> navigation.goBack()}>
    <Icon name="arrow-back" size={22} color='#d6d5db' />
    </TouchableOpacity>

    <View style={{justifyContent:"flex-end"}}>
    <Icons name="shoppingcart" size={22 } color='#d6d5db' />
    </View>
    </View>

    :
    <Text style={{color:"#d6d5db", fontSize:24, fontWeight:'bold'}}>The Mart</Text>
    }
    

    

    </View>
  );
};

export default Header;
