import React, {Compoenet} from 'react';
import {View} from 'react-native';

import {createStackNavigator} from 'react-navigation';

import FrontCon from '../screensContainers/frontContainer';
import VidOne from '../screensContainers/vidOneContainer';
import Vid2 from '../screensContainers/vid2Container';



const StackNav = createStackNavigator ({
    frontContainer: FrontCon,
    vidOneContainer: VidOne,
    vid2Container: Vid2,

})

export default StackNav;