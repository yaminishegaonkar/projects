import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ScrollView_Native=()=>{
    const users = [
        {
            id: 1,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 2,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 3,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 4,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 5,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 6,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 7,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 8,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 9,
            email: 'oye@gmail.com',
            name: "tony"
        },
        {
            id: 10,
            email: 'oye@gmail.com',
            name: "tony"
        }
    ]
    return(
        <View>
            {/* {
                users.map((item)=><Text>{item.name}</Text>)
            } */}

            <FlatList
                data={users}
                renderItem={({item})=><View>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>}
            />
        </View>
    )
}
export default ScrollView_Native;