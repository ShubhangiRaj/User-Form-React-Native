import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import HeaderBar from './HeaderBar';
import ProgressHeader from './ProgressHeader';
import SuccessPage from './SuccessPage';

export default class FormContainer extends Component {

    componentWillMount() {
        this.currentFormIndex = 0;
        this.forms = this.props.forms;
        this.forms.push(SuccessPage);
        this.isCurrentFormValid  = false;


        this.state = {
            currentForm         : this.forms[this.currentFormIndex],
            showNextButton      : true
        };
    }

    incrementFormIndex(){
        if(this.currentFormIndex < this.forms.length-1){
            this.currentFormIndex++;
        }
    }

    // this method would be required if we support Back traversal in the form flow
    decrementFormIndex(){
        if(this.currentFormIndex > 0){
            this.currentFormIndex--;
        }
    }

    getCurrentForm(){
        const CurrentForm  = this.state.currentForm ;
        return  <CurrentForm  onCurrentFormIsValid = {this.onCurrentFormIsValid} ref="currentFormInterface"/>
    }


    // This will be called by current form, (this method is a listener for validity of the current form ) 
    onCurrentFormIsValid = () => {
        this.isCurrentFormValid = true;
        this.setState({
            color : '#00B140'
        })
    }

    renderNextForm (){
        this.incrementFormIndex();
        this.setState({
            currentForm : this.forms[this.currentFormIndex]
        });
        this.isCurrentFormValid = false;
        this.state.color = '#CCD6DD';
        this.refs.progressHeaderInterface.incrementActiveIndex(this.currentFormIndex);
        
    }

    next = () => {

        if(!this.isCurrentFormValid){
            this.refs.currentFormInterface.showErrorForInvalidForm();
            return;
        }

        this.renderNextForm();

        if(this.currentFormIndex == this.forms.length - 1){
            this.setState({showNextButton : false});
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <HeaderBar />
                <ProgressHeader numberOfForms = {this.forms.length}  activeFormIndex = {0} ref="progressHeaderInterface"/>
                <View style={styles.formContainer}>
                    { this.getCurrentForm() }   
                </View>
                { this.state.showNextButton && 
                    <TouchableOpacity  style={ this.isCurrentFormValid ? styles.nextButtonActive : styles.nextButtonInActive}  onPress={this.next} > 
                        <Text style={{color:"#fff"}}> Next </Text> 
                    </TouchableOpacity> }

            </View>
        );
    }
}

var {height, width} = Dimensions.get('window');
var formHeight = height - (40 + 60 + 75);
var styles = StyleSheet.create({
    formContainer:{
        height:formHeight
    },
    nextButtonActive:{
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#00B23E'
    },
    nextButtonInActive:{
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#CCD6DD'
    }
});

AppRegistry.registerComponent('FormContainer', () => FormContainer);
