import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// Each View is highlighted on successfull event
export default class ProgressHeader extends Component {

    componentWillMount() {
        this.totalForms  = this.props.numberOfForms;
        this.state = { activeFormIndex  : this.props.activeFormIndex };
    }


    incrementActiveIndex(i){
        this.setState( {activeFormIndex  : i} );
    }



    render() {
        var headerArray = [];
          
        for(var i = 1 ; i <= this.totalForms ; i++){
             headerArray.push(i);
        }  

        var headers = headerArray.map((a, i) => {
            return  <View key={i} style={styles.parentView}>
                        <Text style={ this.state.activeFormIndex == i ? styles.activeHeader : styles.inactiveHeader } > Step { a }</Text>
                    </View> 
            });       
        
        return (
            <View style={{ flexDirection: 'row'}}>
               { headers }
            </View>
        );
    }
}

var styles = StyleSheet.create({
    parentView:{
        backgroundColor: '#fff', 
        flex:1,
        flexDirection: 'row', 
        justifyContent:'center',
    },
    inactiveHeader :{
        color   : '#9B9B9B',
        height  : 50,
        paddingTop : 20,
        backgroundColor: '#fff'
    },
    activeHeader : {
        color  : '#00B23E',
        height : 50,
        paddingTop : 20,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#00B23E'
    }
});

    

AppRegistry.registerComponent('ProgressHeader', () => ProgressHeader);

