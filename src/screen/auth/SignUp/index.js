import React, { useState } from 'react';
import { styles } from './styles';
import { Button, Text, View } from 'react-native';
import AuthHeader from '../../../../components/AuthHeader';
import Input from '../../../../components/InputText';
import CheckBox from '../../../../components/CheckBox';
import ButtonApp from '../../../../components/ButtonApp';
import Seperator from '../../../../components/Seperator';
import GoogleLogin from '../../../../components/GoogleLogin';
const SignUp = () => {
    const [checked, setCheck] = useState(false);
    const onSignIn = () => {
        navigation.navigate('SignIn');
    };
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign up" />
            <Input label="Name" placeholder="Example John" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="*********" />
            <View style={styles.checkRow}>
                <CheckBox checked={checked} onCheck={setCheck}></CheckBox>
                <Text style={styles.checkText}> I agree with Terms & Privacy</Text>
            </View>
            <ButtonApp style={styles.button} title="Sign up"></ButtonApp>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Already have an acount
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign in
                </Text>
            </Text >
        </View>
    );

};
export default SignUp;