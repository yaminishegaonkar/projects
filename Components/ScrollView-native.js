import React from 'react';
import { View, Text } from 'react-native';

const ScrollView_Native=()=>{
    const users = [
        {
            id: 1,
            name: "tony"
        },
        {
            id: 2,
            name: "tony"
        },
        {
            id: 3,
            name: "tony"
        },
        {
            id: 4,
            name: "tony"
        },
        {
            id: 5,
            name: "tony"
        },
        {
            id: 6,
            name: "tony"
        },
        {
            id: 7,
            name: "tony"
        },
        {
            id: 8,
            name: "tony"
        },
        {
            id: 9,
            name: "tony"
        },
        {
            id: 10,
            name: "tony"
        }
    ]
    return(
        <View>
            {
                users.map((item)=><Text>{item.name}</Text>)
            }
        </View>
    )
}
export default ScrollView_Native;