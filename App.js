/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InputElements from './src/components/UI/InputElements/InputElements'
import PlacesOutput from './src/components/PlacesOutput/PlacesOutput'

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
		this.setState((prevState) => ({ places: prevState.places.concat(prevState.placeName) }));
	};

	render() {
	
		return (
			<View style={styles.container}>
        <InputElements 
        placeName={this.state.placeName} 
        placeNameChanged={this.placeNameChangeHandler}
        placeSubmited={this.placeSubmitHandler}
        />
				<View style={styles.listContainer} > 
				<PlacesOutput places={this.state.places} />
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
  },
  listContainer: {
    width: '100%'
  }
});
