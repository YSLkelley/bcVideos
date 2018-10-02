import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import { Video } from 'expo';

import styles from '../style/styles';

import vid222 from '../bannerVids/vid22.mp4';

var vid = 'https://player.vimeo.com/external/288896605.hd.mp4?s=439eaa7cfa29641b682db39b08e967aca5d89fe9&profile_id=174&oauth2_token_id=57447761&download=1';

class FrontCon extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.fCon}>
            
            <Video
            source={{ uri: vid}}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={styles.vidStyle}
            />
            
                 <View style={styles.fConIn}>
                    <View style={styles.toFCON}>
                     <Text style={styles.fcht}>b a g g a g e   c l a i m</Text>
                     <Text style={styles.fcht}>s t u d i o s</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.rto}
                    onPress={() => this.props.navigation.navigate('vidOneContainer')}
                    >
                        <Text style={styles.rtott}>
                            ENTER
                        </Text>
                    </TouchableOpacity>
                 </View>
            </View>
        )
    }
}

export default FrontCon;