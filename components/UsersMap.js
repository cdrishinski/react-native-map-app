import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

const UsersMap = props => {
    const { mapContainer, map } = styles;
    let userLocationMarker = null;

    if (props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation} />
    }

    const usersMarkers = props.userPlaces.map(userPlace => <MapView.Marker coordinate={UserPlace} key={userPlace.id} />
    )

    return(
        <View style={mapContainer}> 
            <MapView 
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  region={props.userLocation}
                style={map} 
            >
             {userLocationMarker}   
             {usersMarkers}
            </MapView>

        </View>
    )
}

const styles = {
    mapContainer: {
        width: '100%',
        height: 200
    },
    map: {
        width: '100%',
        height: '100%'
    }
}

export default UsersMap;