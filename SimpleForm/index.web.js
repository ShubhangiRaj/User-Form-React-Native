import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import FormContainer from './components/FormContainer';
import UploadPhotoForm from './components/UploadPhotoForm';
import UserInputForm from './components/UserInputForm';


class SimpleForm extends Component {
    render() {
        var forms = [UploadPhotoForm, UserInputForm];
        return (
            <View >
                <ScrollView>
                    <FormContainer forms = {forms}/>
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('SimpleForm', () => SimpleForm);
AppRegistry.runApplication('SimpleForm', { rootTag: document.getElementById('react-app') });