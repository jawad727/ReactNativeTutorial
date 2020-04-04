import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: "shaun", key: "1" },
    { name: "john", key: "2" },
    { name: "crystal", key: "3" },
    { name: "chance", key: "4" },
    { name: "timmy", key: "5" }
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => ( 

            <View key={item.key}>
              <Text style={styles.item} > {item.name} </Text>
            </View>

        ))}
      </ScrollView>
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
