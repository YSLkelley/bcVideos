import React, {Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import StackNav from '../nav/mainStackNav'

import styles from '../style/styles';

class TabNav extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.tabCon}>
                <View style={styles.tabCon1}> 
                <TouchableOpacity>
                <Image
                source={{uri: 'https://image.flaticon.com/icons/png/512/130/130918.png' }}
                style={styles.tabMM}
                />
                </TouchableOpacity>
                </View>
                <View style={styles.tabCon2}>
                <TouchableOpacity style={styles.tabti}>
                    <Text style={styles.ti}>Latest</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabti}
                onPress={() => this.props.navigation.navigate('vid2Container')}
                >
                    <Text style={styles.ti}>Coming soon</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default TabNav;