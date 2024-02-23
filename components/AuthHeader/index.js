import React from 'react';
import {styles} from './styles';
import { Image, Pressable, Text, View } from 'react-native';

const AuthHeader = ({title, onBackPress}) =>{
    return(
        <View style={styles.container}>
             <Pressable onBackPress={onBackPress} >
                    <Image
                        style={styles.iconBack}
                        source={require('../../src/assets/image/icon_back.png')}
                    />
             </Pressable>
             <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default AuthHeader;