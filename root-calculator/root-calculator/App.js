import React, { Component } from 'react';

import { StyleSheet, Alert, TextInput, View, Button } from 'react-native';

import AssetExample from './components/AssetExample';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      Holder: '',
    };
  }

  FindSquare = () => {
    var A = this.state.Holder;

    var B = Math.pow(A, 2);

    Alert.alert('Square = ' + B.toString());
  };

  FindCube = () => {
    var A = this.state.Holder;

    var B = Math.pow(A, 3);

    Alert.alert('Cube = ' + B.toString());
  };

  FindSquareRoot = () => {
    var A = this.state.Holder;

    var B = Math.sqrt(A);

    Alert.alert('SquareRoot = ' + B.toString());
  };

  FindCubeRoot = () => {
    var A = this.state.Holder;

    var B = Math.cbrt(A);

    Alert.alert('CubeRoot = ' + B.toString());
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <AssetExample />
        <TextInput
          placeholder="Enter Value here"
          keyboardType={'numeric'}
          onChangeText={(TextInputValue) =>
            this.setState({ Holder: TextInputValue })
          }
          style={styles.TextInputStyle}
        />

        <View style={{marginTop: 5}}>
          <Button
            title=" Find SQUARE OF GIVEN NUMBER "
            color='red'
            onPress={this.FindSquare}
          />
        </View>

        <View style={{marginTop: 5}}>
          <Button 
          title=" FIND CUBE OF GIVEN NUMBER " 
          color='blue'
          onPress={this.FindCube}
          />
        </View>

        <View style={{marginTop: 5}}>
          <Button
            title=" FIND SQUARE ROOT OF GIVEN NUMBER "
            color='green'
            onPress={this.FindSquareRoot}
            />
        </View>

        <View style={{marginTop: 5}}>
          <Button
            title=" FIND CUBE ROOT OF GIVEN NUMBER "
            color="orange"
            onPress={this.FindCubeRoot}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '95%',
    marginBottom: 10,
  },
});
