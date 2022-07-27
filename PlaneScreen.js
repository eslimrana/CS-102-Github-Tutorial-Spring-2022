import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native'
import {React, useState,useEffect} from 'react'
import {auth} from '../firebase';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { SearchBar } from 'react-native-elements';
const PlaneScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
  const navigation=useNavigation();
  const [col, setCol] = useState('gray');
  const [col2, setCol2] = useState('gray');
  const [col3, setCol3] = useState('#2D809B');
  const [col4, setCol4] = useState('gray');
  const [col5, setCol5] = useState('gray');
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <SearchBar
           round
           searchIcon={{ size: 24 }}
           onChangeText={(text) => searchFilterFunction(text)}
           onClear={(text) => searchFilterFunction('')}
           placeholder="Type Here..."
           value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
      
      <ScrollView>
    <View >
    
  </View>
  
  </ScrollView>
  <View style={styles.footer_navigation}>
  <IonIcon style={styles.icons} name="home" size={30} color={col} onPress={() => {setCol("#2D809B"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("Home")}}/>
  <IonIcon style={styles.icons} name="search" size={30} color={col2} onPress={() => {setCol("gray"); setCol2("#2D809B"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("clinic")}}/>
  <IonIcon style={styles.icons} name="star" size={30} color={col5} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("#2D809B");navigation.navigate("hotel")}}/>
  <IonIcon style={styles.icons} name="earth" size={30} color={col3} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("#2D809B"); setCol4("gray");setCol5("gray")}}/>
  <IonIcon style={styles.icons} name="person" size={30} color={col4} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("#2D809B");setCol5("gray");navigation.navigate("profile")}}/>
</View></View>
  )
}

export default PlaneScreen

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
    marginLeft:30,
    marginRight:30,
  },
  container:{
    alignItems:"center",
    flex:1
  },
  search:{
    width:'100%',
    alignItems:'center'
  },
  box:{
    marginTop:100,
    width:'90%',
  },
  itemStyle: {
    padding: 10,
  },
})