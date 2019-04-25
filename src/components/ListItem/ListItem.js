import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

//child of PlaceList
const listItem = (props) => {
	return (
		<TouchableOpacity onPress={props.onItemPressed}>
			<View style={styles.listItem}>
            <Image resizeMode='cover' style={styles.placeImage} source={props.placeImage} />
				<Text>{props.placeName}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		padding: 10,
		marginBottom: 5,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
		marginRight: 8,
		// When fetching img from web, must set height/width!
        height: 30,
        width: 30
    }
});

export default listItem;
