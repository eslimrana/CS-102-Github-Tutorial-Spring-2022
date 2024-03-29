import { StyleSheet, Text, View,ScrollView } from 'react-native'
import {React, useState} from 'react'
import {auth} from '../firebase';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

const Izmir = () => {
  const navigation=useNavigation();
  const [col, setCol] = useState('gray');
  const [col2, setCol2] = useState('gray');
  const [col3, setCol3] = useState('gray');
  const [col4, setCol4] = useState('#A374FA');
  const [col5, setCol5] = useState('gray');
  return (
    <View style={styles.container}><ScrollView>
    <View >
    
  </View>
  
  </ScrollView>
  <View style={styles.footer_navigation}>
  <IonIcon style={styles.icons} name="home" size={30} color={col} onPress={() => {setCol("#A374FA"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("Home")}}/>
  <IonIcon style={styles.icons} name="search" size={30} color={col2} onPress={() => {setCol("gray"); setCol2("#A374FA"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("clinic")}}/>
  <IonIcon style={styles.icons} name="star" size={30} color={col5} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("#A374FA");navigation.navigate("hotel")}}/>
  <IonIcon style={styles.icons} name="earth" size={30} color={col3} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("#A374FA"); setCol4("gray");setCol5("gray");navigation.navigate("plane")}}/>
  <IonIcon style={styles.icons} name="person" size={30} color={col4} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("#A374FA");setCol5("gray");}}/>
</View></View>
  )
}

export default Izmir

const styles = StyleSheet.create({

  footer_navigation:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height:80,
    backgroundColor:'#fff',
    width:"100%"
  },
  icons:{
    marginLeft:10,
    marginRight:10,
    paddingLeft:15,
    paddingRight:15,
    paddingVertical:10
  },
  container:{
    alignItems:"center",
    flex:1,
    width:"100%"
  }
})