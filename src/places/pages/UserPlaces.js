import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'A testimate to American capitalism',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPIrG3vAqzaWjf8qlrSq4wqQpmP1g1f1MeF3kEW=w408-h271-k-no',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405, 
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'A testimate to American capitalism',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPIrG3vAqzaWjf8qlrSq4wqQpmP1g1f1MeF3kEW=w408-h271-k-no',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405, 
            lng: -73.9878531
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return(
        <PlaceList items={loadedPlaces}/>
    );
};

export default UserPlaces;