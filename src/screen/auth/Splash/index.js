import React from "react";
import {styles} from './styles'
import { Image, Pressable, Text, View } from "react-native";
import ButtonApp from "../../../../components/ButtonApp";



const Splash=({navigation})=>{
    return(
        <View style={styles.container}>
            <Image
            resizeMode= 'contant'
            style={styles.img}
            source={require('../../../assets/image/splash_image.png.png')}
            />
            <View style={styles.txt}>
            <Text style={styles.title}> You'll find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
            </View>
            <ButtonApp 
            onPress={() => navigation.navigate('SignUp')}
            title='Sign Up'>
            </ButtonApp>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.footerText}>Sign in</Text>
            </Pressable>

        </View>

    );
};
export default Splash;