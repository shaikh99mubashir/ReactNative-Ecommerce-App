import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../Components/Header';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Details = ({navigation, route}) => {
    console.log(route.params);
    const data = route.params;
  return (
    <SafeAreaView style={{flex:1, alignItems:"center"}}>
    <View style={{backgroundColor: '#1E203B',}}>
   <ScrollView>
   <View style={{alignItems:'center'}}>
    <Header back navigation={navigation} />
     <View style={{width:'95%', alignItems:'center', backgroundColor : 'white', borderTopRightRadius : 10, borderTopLeftRadius : 10,}}> 
     <Image source={{uri : data?.image}} style={{width : '90%', height : 250, resizeMode:'contain',}} />
     </View>
     <View style={{alignItems : 'center', marginTop : 20}}>
     <View style={{borderRadius : 10, height : '100%', width : '95%',  backgroundColor : '#1E203B', }}>
     <Text style={{color : 'black', fontSize : 22, color : '#d6d5db', fontWeight:'bold'}}>Price : {data.price} </Text>
     <Text style={{color : 'black', fontSize : 22, color : '#d6d5db', fontWeight:'bold' , marginTop:10}}>{data.title} </Text>
     <Text style={{color : 'black', fontSize : 14, color : '#d6d5db', fontWeight:'bold', marginTop:10}}>Rating : {data.rating.rate} </Text>
     <Text style={{color : 'black', fontSize : 14, color : '#d6d5db', marginTop : 10}}>DESCRIPTION : {data.description} </Text>
     <Text style={{color : 'black', fontSize : 14, color : '#d6d5db', marginTop : 10}}>Reviews:</Text>
     <Text style={{color : 'black', fontSize : 14, color : '#d6d5db', marginTop : 10}}>{data.description}</Text>
     <Text style={{color : 'black', fontSize : 14, color : '#d6d5db', marginTop : 10}}>{data.description}</Text>
     </View>
           </View>
   </View>
   </ScrollView>
   <View style={{backgroundColor:'#2F3156', width:windowWidth, height:windowHeight/12, alignItems:'center', flexDirection:'row', justifyContent:'space-around',}}>
    <TouchableOpacity style={{borderWidth:0, paddingHorizontal:'15%', paddingVertical:'4%', borderLeftColor:'White'}}>
      <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>   BuyNow  </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{borderLeftWidth:1, paddingHorizontal:'15%', paddingVertical:'4%', borderLeftColor:'white', }}>
      <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Add To Cart</Text>
    </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}


export default Details