/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList'

export default class App extends Component {
	state = {
		places: []
	};
	placeAddedHandler = (placeName) => {
		this.setState((prevState) => ({ places: prevState.places.concat(placeName) }));
	};

	placesDeletedItem = (index) => {
		placesOutput = 
		this.setState(prevState => {
			return {
				places: prevState.places.filter((place, i) => i !== index)
			}
		})
	 }
 

	render() {
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={this.state.places} onItemDeleted={this.placesDeletedItem} />
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
	}
});
