import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class HeaderBar extends Component {
    render() {
        return (
            <View>
                <View style={styles.headerBar}></View>
            </View>
        );
        
    }
}
var styles = StyleSheet.create({
    headerBar :{
        flex:1, 
        height: 40, 
        backgroundColor: '#00B140'
    }
});

AppRegistry.registerComponent('HeaderBar', () => HeaderBar);

