import React, { Component, useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';

const App =()=>{
    const [show, setShow] = useState(false);
    return(
        <View>
            <Text>Show or Hide Content</Text>
            <Button title='show content' onPress={()=> setShow(true)} />
            <Button title='hide content' onPress={()=> setShow(false)} />

            {/* toggle button */}
            <Button title='toggle button' onPress={()=> setShow(!show)} />

            {
                show ? <User /> : null
            }
        </View>
    )
}

const User=()=>{
    return(
        <View>
            <Text>user components</Text>
        </View>
    )
}

export default App;