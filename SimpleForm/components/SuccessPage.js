import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class SuccessPage extends Component {
    render() {
        return (
            <View style={styles.parentView}>
                <Text style={styles.completeText}>Complete</Text>
            </View>
        );
        
    }
}


var styles = StyleSheet.create({
    parentView :{
        backgroundColor:'#F7F9FB', 
        flex:1, 
        alignItems: 'center'
    },
    completeText : {
        fontSize:20, 
        color:'#14202C', 
        paddingTop:40
    }
});

AppRegistry.registerComponent('SuccessPage', () => SuccessPage);

