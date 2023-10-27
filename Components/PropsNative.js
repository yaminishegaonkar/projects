import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const PropsNative = () => {
  // Set initial values for name and age
  const initialName = "abc";
  const initialAge = "10";

  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);

  const handleResetAge = () => {
    // Reset the name and age to their initial values
    setName(initialName);
    setAge(initialAge);
  };

  return (
    <View>
      <Parent name={name} age={age} />
      <Button
        title="Update Age"
        onPress={() => {
          setName("xyz");
          setAge("90");
        }}
      />
      <Button title="Return to Original Age" onPress={handleResetAge} />
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

export default PropsNative;
