import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
// import placeImage from './src/assets/dendra.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
	state = {
		places: [],
		selectedPlace: null
	};
	placeAddedHandler = (placeName) => {
		this.setState((prevState) => ({
			places: prevState.places.concat({
				key: Math.random(),
				name: placeName,
				image: {
					uri: 'https://www.gstatic.com/webp/gallery/1.sm.jpg'
				}
			})
		}));
	};

	placeSelectedHandler = (key) => {
		this.setState((prevState) => {
			return {
				selectedPlace: prevState.places.find((place) => place.key === key)
			};
		});
	};

	placeDeletedHandler = () => {
		this.setState((prevState) => {
			return {
				places: prevState.places.filter((place) => place.key !== prevState.selectedPlace.key),
				selectedPlace: null
			};
		});
	};

	modalCloseHandler = () => {
		this.setState({ selectedPlace: null });
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceDetail
					selectedPlace={this.state.selectedPlace}
					onItemDeleted={this.placeDeletedHandler}
					onModalClose={this.modalCloseHandler}
				/>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
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
