/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { black } from 'ansi-colors';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends Component {
	state = {
    placeName: '',
    places: []
	};

	placeNameChangeHandler = (val) => {
		this.setState({ placeName: val });
  };
  
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') return;
    this.setState(prevState => ({places: prevState.places.concat(prevState.placeName)}))

  }

	render() {
    const placesOutput = this.state.places.map((place, index) => (
      <Text key={index} >{place}</Text>
    ))
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.placeInput}
						placeholder="An awesome place"
						value={this.state.placeName}
						onChangeText={this.placeNameChangeHandler}
					/>
          <Button 
          style={styles.placeButton} 
          title="Add" 
          onPress={this.placeSubmitHandler}
          />
				</View>
        <View>
        {placesOutput}
        </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 50,
		justifyContent: 'flex-start',
		backgroundColor: '#F5FCFF'
	},
	inputContainer: {
    // flex: 1,
    width: '100%',
		flexDirection: 'row',
    alignItems: 'center',
		justifyContent: 'space-between'
	},
	placeInput: {
		width: '70%'
	},
	placeButton: {
		width: '30%'
	}
});
