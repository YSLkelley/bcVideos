import React,{Component} from 'react';
import {StyleSheet,Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create ({
      container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
    fCon:  {
        // backgroundColor: 'green',
        width: width,
        height: height,
    alignItems: 'center',
    justifyContent: 'center',
    },
    vidStyle: {
        width: 100 +'%',
        height: 100+'%',
    },
    fConIn: {
        marginTop: 80,
        position: 'absolute',
        width: 100 +'%',
        height: 300,
        alignItems: 'center',

    },
    toFCON: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 70 + '%',
        height: 35 + '%',
    },
    rto: {

    },
    rtott: {
        color: '#578be0',
        marginTop: 100,
        fontSize: 32,
        fontWeight: 'bold'
    },
    fcht: {
        fontSize: 20,
        color: '#fff'
    },
    tabCon: {
        width: 100 + '%',
        height: 100 + '%',
    },
    tabCon1: {
        width: 100 + '%',
        height: 50 + '%',
        marginLeft:  + '%',
        justifyContent: 'center',
    },
    tabCon2: {
        flexDirection: 'row',
        width: 100 + '%',
        height: 50 + '%',
  
    },
    vidOneWapper: {
        width: width,
        height: height,
    },
    vid2Wapper: {
        width: width,
        height: height,
    },
    tapWapper: {
        backgroundColor: '#eff0f2',
        width: 100 + '%',
        height: 20 + '%'
    },
    tabMM: {
        marginLeft: 80 + '%',
        width: 40,
        height: 40,

    },
    tabti: {
        paddingTop: 17,
        alignItems: 'center',
        width: 50 + '%',
        height: 100 + '%'
    },
    ti: {
        fontSize: 20
    }

})

export default styles;