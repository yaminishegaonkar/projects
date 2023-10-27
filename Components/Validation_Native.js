import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const Validation = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [display,setDisplay] = useState(false);
    const [secureText,setSecureText] = useState(true);

    const resetFormData=()=>{
        setDisplay(false);
        setEmail("");
        setPassword("");
        setName("");
        setSecureText(false);
    }
  return (
    <View>
        <TextInput
            style={styles.TextInput}
            placeholder="enter user name"
            onChangeText={(text)=>setName(text)} 
            value={name}
        />
         <TextInput
            style={styles.TextInput}
            placeholder="enter user email"
            onChangeText={(email)=>setEmail(email)} 
            value={email}
        />
         <TextInput
            style={styles.TextInput}
            placeholder="enter user password"
            secureTextEntry={secureText}
            onChangeText={(pass)=>setPassword(pass)} 
            value={pass}
        />

        <Button 
            title='print details' 
            style={{marginBottom: 10}} 
            onPress={()=>setDisplay(true)}
            />
        <Button title='clear details' onPress={resetFormData()} />

        <View>
            {
                display ?
                <View>
                    <Text>UserName is : {name}</Text>
                    <Text>UserEmail is : {email}</Text>
                    <Text>UserPassword is : {password}</Text>
                </View>
                : null
            }
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    TextInput: {
        fontSize: 18,
        color: "blue",
        borderWidth: 2,
        borderColor: 'blue',
        margin : 10
    }
})

export default Validation;
