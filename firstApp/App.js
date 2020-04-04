import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "john", id: "2" },
    { name: "crystal", id: "3" },
    { name: "chance", id: "4" },
    { name: "timmy", id: "5" },
    { name: "guy", id: "6" },
    { name: "fieri", id: "7" },
    { name: "ghandi", id: "8" }
  ])

   const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => { // prevPeople (or any arg in set___ hook refers to the old state)
      return prevPeople.filter(item => item.id != id)
    });
  }

  return (
    <View style={styles.container}>

    <FlatList // FlatList is more efficient than ScrollView because  it doesn't automatically render everything, but rather waits until you've scrolled to render
      numColumns={2} // (optional) 
      keyExtractor={(item) => item.id} //allows us to have IDs or other attributes as keys 
      data={people}
      renderItem={( {item} ) => (

        <TouchableOpacity onPress={() => { // TouchableOpacity allows items to be clicked
          pressHandler(item.id)}}>
          <Text style={styles.item} > {item.name} </Text>
        </TouchableOpacity>

    )} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item : {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    margin: 10,
  }

});
