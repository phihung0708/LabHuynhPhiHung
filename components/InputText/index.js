import React, { useState } from "react";
import {styles} from './styles'
import { Pressable, Text, TextInput, View } from "react-native";

const Input = ({label, placeholder ,isPassword}) => {
    const[isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () =>{
        setIsPasswordVisible(!isPasswordVisible);
    };
    return(
        <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                    secureTextEntry = {isPassword && ! isPasswordVisible}
                    placeholder={placeholder}
                    style={styles.input}
                    />
                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image
                            style = {styles.eye}
                            source={
                                isPasswordVisible
                                ? require('../../src/assets/image/image_eye.png.png')
                                : require('../../src/assets/image/eye_closed.png')
                            }
                            />
                        </Pressable>
                    ): null}

                </View>
        </View>
    );
};
export default Input;