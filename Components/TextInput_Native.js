import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const TextInput = () => {

  const [name, setName] = useState();
  

  return (
    <View>
    <Text>my name is: {name}</Text>
     <TextInput 
      placeholder='enter your name '
      value={name}
      onChangeText={(text)=>setName(text)} 
      />
    <Button
      title="enter"
     onPress={()=>setName('')} />
    </View>
  );
};

const Parent = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
    </View>
  );
};

export default TextInput;
