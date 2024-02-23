import React, { useState } from 'react';
import { styles } from './styles';
import { Button, Text, View } from 'react-native';
import AuthHeader from '../../../../components/AuthHeader';
import Input from '../../../../components/InputText';
import CheckBox from '../../../../components/CheckBox';
import ButtonApp from '../../../../components/ButtonApp';
import Seperator from '../../../../components/Seperator';
import GoogleLogin from '../../../../components/GoogleLogin';

const SignIn = ({navigation}) => {
    const onSignIn = () => {
        navigation.navigate('SignUp');
    };
    const onBack = () =>{
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="*********" />
            <ButtonApp style={styles.button} title="Sign In"></ButtonApp>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Don't have acount? Sign Up
                <Text onPress={onSignIn} style={styles.footerLink}>
                    {''}
                    Sign Up
                </Text>
            </Text>
        </View>
    );
};
export default SignIn;
