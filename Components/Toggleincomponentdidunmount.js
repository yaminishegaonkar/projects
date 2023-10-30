// important question always asked in interview, when they asked about the lifecycle method

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const Toggleincomponentunmount = () => {
    return(
        <View>
        <Text>Show or Hide Content</Text>
        {/* <Button title='show content' onPress={()=> setShow(true)} />
        <Button title='hide content' onPress={()=> setShow(false)} /> */}

        
        <Button title='toggle button' onPress={()=> setShow(!show)} />

    </View>
    )
}

const User=()=>{
    // useEffect(()=>{
    //     console.warn("useEffect called"); // this is only work on component mount that means only mounting time it is working

    //     return()=> { console.log("useEffect called on unmount")} // this is only work on component unmount that means only unmounting time it is working
    // })

    //aise me bs show krte time he console print ho raha hai aur hide krte time nhe ho raha hai toh isliye timmer lagaya jate hai
    // per timer lagate hai toh har 2 sec pe woh msg show krega isse hamare device ki memory waste hogi for mobile device and
    // web device pe humara system slow kam krega that means load jyada lega isliye hum setinterval ko ek variable me
    //dalke , clear interval me woh variable pass krte hai 
    
    let timer = setInterval(() => {
        console.warn("timer called");
    },2000)

    useEffect(()=>{
        return () => clearInterval(timer);
    })

    return(
        <View>
            <Text>user components</Text>
        </View>
    )
}
export default Toggleincomponentunmount;