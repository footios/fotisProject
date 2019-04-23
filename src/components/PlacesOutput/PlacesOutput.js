import React from 'react'

import ListItem from '../ListItem/ListItem'


const placesOutput = ({ places }) => {
	const placesOutput = places.map((place, index) => 
    <ListItem key={index} placeName={place} />);

    return placesOutput;
}
 
export default placesOutput;