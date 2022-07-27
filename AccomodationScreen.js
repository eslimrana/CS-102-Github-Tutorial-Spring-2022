import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native'
import {React, useState,useEffect} from 'react'
import {auth} from '../firebase';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { SearchBar } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from "react-native-vector-icons/FontAwesome";
const AccomodationScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const cities = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"]
  const treatments=["Implant","Root Canal Treatment","Tooth Extraction","Wisdom Teeth Extraction","Zircon","Teeth Cleaning","Teeth Whitening","Orthodontics","Oral Diagnosis and Radiology","Composite Fillings","Pedodontics","periodontology"]
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
  const [col3, setCol3] = useState('gray');
  const [col4, setCol4] = useState('gray');
  const [col5, setCol5] = useState('#2D809B');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SelectDropdown
          renderDropdownIcon={() => {
            return (
              <FontAwesome name="chevron-down" color={"#444"} size={18} />
            );
          }}
          defaultButtonText={"Select a city"}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={cities}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
        <SelectDropdown
          renderDropdownIcon={() => {
            return (
              <FontAwesome name="chevron-down" color={"#444"} size={18} />
            );
          }}
          defaultButtonText={"Select a treatment"}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={treatments}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
      </View>
      <View style={styles.box}>
      <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            placeholder="Search Hotels"
            value={search}
          />
          </View>
      <ScrollView>
          <View style={styles.box}>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </ScrollView>
  <View style={styles.footer_navigation}>
  <IonIcon style={styles.icons} name="home" size={30} color={col} onPress={() => {setCol("#2D809B"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("Home")}}/>
  <IonIcon style={styles.icons} name="search" size={30} color={col2} onPress={() => {setCol("gray"); setCol2("#2D809B"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("clinic")}}/>
  <IonIcon style={styles.icons} name="star" size={30} color={col5} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("#2D809B")}}/>
  <IonIcon style={styles.icons} name="earth" size={30} color={col3} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("#2D809B"); setCol4("gray");setCol5("gray");navigation.navigate("plane")}}/>
  <IonIcon style={styles.icons} name="person" size={30} color={col4} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("#2D809B");setCol5("gray");navigation.navigate("profile")}}/>
</View></View>
  )
}

export default AccomodationScreen

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
    width:'100%'
  },
  search:{
    width:'100%',
    alignItems:'center'
  },
  box:{
    marginTop:10,
    width:'100%',
  },
  itemStyle: {
    padding: 10,
  },
  header:{
    marginTop:40,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "5%"
  },
  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    marginRight:10
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left", fontSize:13 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5"
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
})