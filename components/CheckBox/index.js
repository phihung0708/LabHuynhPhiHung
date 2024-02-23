import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, View, Image } from 'react-native';

const CheckBox = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => onCheck(!checked)}
            style={styles.container}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image 
                    style={styles.checkIcon}
                    source={require('../../src/assets/image/icon_check.png.png')}>    
                    </Image>
                </View>
            ) : null}

        </TouchableOpacity>

    );
};
export default React.memo(CheckBox);    