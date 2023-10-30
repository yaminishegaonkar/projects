import React, { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';

const UseEffect_native=()=>{

    const [data, setData] = useState(0);
    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     console.warn("data has been added");
    // },[data,count])

    return(
        <View>the counter is: {data}
        <Button title='press here for data' onPress={setData + 1} />
        <Button title='press here for count' onPress={setCount + 1} />
        <User info={{data, count}} />
        </View>
    )
}

const User = (props) => {

    useEffect(()=>{
        console.warn("data has been added");
    },[props.info.data])

    useEffect(()=>{
        console.warn("data has been added");
    },[props.info.count])

return(
    <View>
        <Text>data: {props.info.data}</Text>
        <Text>data: {props.info.count}</Text>
    </View>
)
}
export default UseEffect_native;