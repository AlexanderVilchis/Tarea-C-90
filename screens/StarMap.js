import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { WebView }  from 'react-native-webview';

export default class StarMapScreen extends Component {
    render() {
        const { longitude, latitude } = this.state;
        const path = 'https://virtualsky.lco.global/embed/imdex.html?longitude=${longitude}&latitude=%{latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&projection=stereo&showdate=false&showposition=false'
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>¡Pantalla de mapa estelar!</Text>
                <TextInput
                style={{hegiht: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Ingresa la latitud"
                placeholderTextColor = "white"
                onChangeText={(text)=>{
                    this.setState({
                        latitude: TextDecoder
                    })
                }}
                />
                <TextInput
                style={{hegiht: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Ingresa la longitud"
                placeholderTextColor = "white"
                onChangeText={(text)=>{
                    this.setState({
                        latitude: TextDecoder
                    })
                }}
                />
                <WebView
                   scalesPageToFit={true}
                   source={{ uri: path }}
                   style={{ marginTop: 20, marginBottom: 20, }}
                />
            </View>
        )
    }
}