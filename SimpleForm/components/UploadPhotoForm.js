import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button
} from 'react-native';

export default class UploadPhotoForm extends Component {

    componentWillMount(){
        this.state={
            src : require('../img/uploadIcon_2.png'),
            uploadErrMsg: ""
        };
    }

    openGalleryView = () => {
        // This methods exists to make the code extensible to support choice of photo 
        // selection from a photo gallery in future case.
        // The ideal functionality would open a gallery view and will wait for an image path to 
        // be sent back after the user chooses an image. This image path is then rendered using renderPhoto().

        // currently just calling renderPhoto()
        var imagePath = require('../img/uploadedImage.png') ;
        var result    = this.renderPhoto(imagePath);
        return result;
    }

    renderPhoto = (imagePath) => {
        this.setState({ src : imagePath });
        this.props.onCurrentFormIsValid();
    }

    //interface method for parent component to call t
    showErrorForInvalidForm = () => {
        this.setState({uploadErrMsg: "You need to upload a photo"});
    }

    render() {
        return (
            <View style={styles.parentView}>
                <Text style={styles.uploadPhoto}>Upload Photo </Text>
                <Text style={styles.errMsg}>{this.state.uploadErrMsg}</Text>
                <View style={styles.uploadContainerParentView}>
                    <View style={styles.uploadContainerChildView}>
                        <TouchableHighlight underlayColor='rgba(255,255,255,.01)' style={styles.uploadPhotoTouchableHighlight} 
                                            onPress={this.openGalleryView}>
                            <Image style={{width:300, height:200}} source={this.state.src}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <Text style={styles.footerText}>Please upload any photo here.</Text>
            </View>
        );
        
    }
}

var styles = StyleSheet.create({
    parentView :{
        flex:1,  
        backgroundColor :'#F7F9FB', 
    },
    uploadPhoto:{
        paddingLeft :20,
        paddingTop:20,
        color:'#363A45',
        fontSize:16
    },
    errMsg:{
        color :'red', 
        paddingLeft:20,
        fontSize:14, 
        paddingBottom:10
    },
    uploadContainerParentView:{
        justifyContent: 'center', 
        alignItems: 'center'
    },
    uploadContainerChildView:{
        height:200, 
        width: 320, 
        backgroundColor: '#EAEFF2'
    },
    uploadPhotoTouchableHighlight:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    footerText:{
        paddingLeft:20, 
        paddingBottom:10, 
        paddingTop:10, 
        fontSize:12
    }
});

AppRegistry.registerComponent('UploadPhotoForm', () => UploadPhotoForm);

