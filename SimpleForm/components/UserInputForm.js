import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Text
} from 'react-native';

export default class UserInputForm extends Component {
    componentWillMount() {
        this.firstNameErrMsg     = "";
        this.lastNameErrMsg      = "",
        this.contactNumberErrMsg = "",
        this.addressErrMsg       = "",

        this.state = {
                        firstName           : "",
                        lastName            : "",
                        contactNumber       : "",
                        address             : "",
                        firstNameErrMsg     : "",
                        lastNameErrMsg      : "",
                        contactNumberErrMsg : "",
                        addressErrMsg       : ""
        };
        this.validateInputFields();
    }

    validateInputFields = () => {
        var firstNameInput, lastNameInput, contactNumberInput, addressInput, firstNameErr, lastNameErr, contactNumErr, addressErr;
        
        // firstName Input Validation
        firstNameInput = this.state.firstName;
        var letters = /^[A-Za-z]+$/;
        if(!/^[a-zA-Z]*$/g.test(firstNameInput) || firstNameInput === ""){
            firstNameErr = "Enter a valid input";
        }
        // lastName Input Validation
        lastNameInput = this.state.lastName;
        var letters = /^[A-Za-z]+$/;
        if(!/^[a-zA-Z]*$/g.test(lastNameInput) || lastNameInput === ""){
            lastNameErr = "Enter a valid input";
        } 
        // contactNumber Input Validation
        contactNumberInput = this.state.contactNumber;
        if (isNaN(contactNumberInput) || contactNumberInput === "") {
            contactNumErr = "Enter a valid input";
        } 
        // address Input Validation
        addressInput = this.state.address;
        if (addressInput === "") {
            addressErr = "Enter a valid input";
        } 



        if( firstNameErr != null || lastNameErr != null || contactNumErr != null || addressErr != null){
            this.firstNameErrMsg     = firstNameErr;
            this.lastNameErrMsg      = lastNameErr;
            this.contactNumberErrMsg = contactNumErr;
            this.addressErrMsg       = addressErr;
        }
        else{
            this.props.onCurrentFormIsValid();
        }
        
    }

    onFirstNameChange = (firstName) => {
        this.setState({ firstName : firstName});
        this.validateInputFields();
    }

    onLastNameChange = (lastName) => {
        this.setState({ lastName : lastName});
        this.validateInputFields();
    }
    onContactNumChange = (contactNumber) => {
        this.setState({ contactNumber : contactNumber});
        this.validateInputFields();
    }
    onAddressChange = (address) => {
        this.setState({ address :address});
        this.validateInputFields();
    }

    showErrorForInvalidForm = () => {
        this.setState({
                firstNameErrMsg     : this.firstNameErrMsg,
                lastNameErrMsg      : this.lastNameErrMsg,
                contactNumberErrMsg : this.contactNumberErrMsg,
                addressErrMsg       : this.addressErrMsg
        });
    }

    render() {
        return (
            <View style={styles.parentView}>
                    <Text style={styles.contactInfoText}>Your Contact Information</Text>
                    <Text style={styles.contactInfoSubText}>Fill in the following details</Text>
                <View style={styles.childView}>
                    <View style={styles.inputViewWrapper}>
                        <TextInput underlineColorAndroid="transparent" style={styles.textInputBox} placeholder="Your First Name" placeholderTextColor='#A3A9B2' id="firstName" ref="firstName" onChangeText={this.onFirstNameChange} value={this.state.firstName} />
                    </View>
                    <Text style={styles.errMsg}>{this.state.firstNameErrMsg}</Text>

                    <View style={styles.inputViewWrapper}>
                        <TextInput underlineColorAndroid="transparent" style={styles.textInputBox} placeholder="Your Last Name" placeholderTextColor='#A3A9B2' id="lastName" ref="lastName" onChangeText={this.onLastNameChange} value={this.state.lastName} />
                    </View>
                    <Text style={styles.errMsg}>{this.state.lastNameErrMsg}</Text>

                    <View  style={styles.inputViewWrapper}>
                        <TextInput underlineColorAndroid="transparent" style={styles.textInputBox} placeholder="Contact Number" placeholderTextColor='#A3A9B2' id="contactNumber" ref="contactNumber" onChangeText={this.onContactNumChange} value={this.state.contactNumber} />
                    </View>
                    <Text style={styles.errMsg}>{this.state.contactNumberErrMsg}</Text>

                    <View  style={styles.inputViewWrapper}>
                        <TextInput underlineColorAndroid="transparent" style={styles.textInputBox} placeholder="Address" placeholderTextColor='#A3A9B2' id="address" ref="address" onChangeText={this.onAddressChange} value={this.state.address}/>
                    </View>
                    <Text style={styles.errMsg}>{this.state.addressErrMsg}</Text> 
                </View>   
            </View>
        );
    }
}

var styles = StyleSheet.create({
    parentView :{
        flex:1, 
        backgroundColor :'#F7F9FB',
       
    },
    childView:{
        alignItems:'center'
    },
    contactInfoText:{
        paddingLeft :20,
        paddingTop:20,
        color:'#363A45',
        fontSize:16
    },
    contactInfoSubText:{
        paddingLeft:20,
        paddingBottom:20, 
        color:'#565D6B', 
        fontSize:12
    },
    errMsg:{
        color :'red', 
        paddingLeft:20,
        fontSize:14, 
        paddingBottom:10,
        alignSelf: 'flex-start'
    },
    inputViewWrapper:{
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textInputBox:{
        paddingLeft:20, 
        width:320,
        height:50,
        color:'#363A45', 
        fontSize:16, 
        borderWidth: 1,
        borderColor: '#CCD6DD', 
        backgroundColor:"#EAEFF2"
    }
});

AppRegistry.registerComponent('UserInputForm', () => UserInputForm);


