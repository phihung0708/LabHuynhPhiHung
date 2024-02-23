import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/Header';

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    return (
        <SafeAreaView>
            <Header
                showSearch
                onSearch={setKeyword}
                keyword={keyword}
                title="Find all you need"
            />
            <ScrollView style={styles.container}>
                <Text>Home</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);