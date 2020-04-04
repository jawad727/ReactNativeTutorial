import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

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

  return (
    <View style={styles.container}>

    <FlatList // FlatList is more efficient than ScrollView because  it doesnt automatically render everything, but rather waits until you've scrolled to render
      numColumns={1}
      keyExtractor={(item) => item.id} //allows us to have IDs or other attributes as keys
      data={people}
      renderItem={( {item} ) => (
        <Text style={styles.item} > {item.name} </Text>
    )} />
      
      {/* <ScrollView>
        {people.map(item => ( 
            <View key={item.key}>
              <Text style={styles.item} > {item.name} </Text>
            </View>
        ))}
      </ScrollView> */}
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
    fontSize: 24
  }

});
