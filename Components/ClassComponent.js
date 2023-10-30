import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';

class Car extends Component {
   constructor(){
    super();
    this.state={
        name:'abc',
        age:20
    }
   }

   updateName(val){
    this.setState({name: val});
   }
    render(){
    return(
        <View>
           <Text>{this.state.name}</Text>
           <TextInput placeholder='enter your name' onChangeText={(text)=>this.updateName(text)} />
           <Button title='Press Me' onPress={this.fruit} />
        </View>
    )
    }
}
export default car;