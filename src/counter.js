import React, { Component } from 'react';
import Expo from 'expo';
import {observer, inject} from 'mobx-react';
import {View, Text, Button, Header} from 'react-native';


class Counter extends Component{
  constructor(){
    super();
    this.state={
      isReady: false
    }
  }
  render = () => {
    const {counter} = this.props.counterStore;
    console.log(counter.value);
    return(
      <View style={{paddingTop: 60}}>
        <Text>
          {counter.value}
        </Text>
        <Button title='Increment' onPress= {() => this.props.counterStore.increment()}>
          <Text>Increment</Text>
        </Button>
        <Button title='Decrememt' onPress= {() => this.props.counterStore.decrement()}>
          <Text>Decrement</Text>
        </Button>
      </View>
    );
  }
}

export default inject("counterStore")(observer(Counter));
