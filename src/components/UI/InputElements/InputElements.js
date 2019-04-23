import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const inputElemets = ({ placeName, placeNameChanged, placeSubmited}) => {

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.placeInput}
				placeholder="An awesome place"
				value={placeName}
				onChangeText={placeNameChanged}
			/>
			<Button style={styles.placeButton} title="Add" onPress={placeSubmited} />
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
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

export default inputElemets;
