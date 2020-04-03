import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState("Shawn")
  const [age, setAge] = useState(40)

  const clickHandler = () => {
    setName("John")
  }

  return (
    <View style={styles.container}>
      <Text> Enter Name: </Text>
      <TextInput 
      // multiline
      style={styles.input} 
      placeholder="e.g. John Doe" 
      onChangeText={(val) => {setName(val)}}
      />
      <Text> Enter age: </Text>
      <TextInput 
      keyboardType="numeric"
      style={styles.input} 
      placeholder="e.g. 46" 
      onChangeText={(val) => {setName(val)}}
      />
      <Text> name {name}, age {age} </Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 8,
    margin: 10,
    width: 200,
    height: 40
  }
});
