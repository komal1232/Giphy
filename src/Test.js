/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Giphy from './component/Giphy';
import {useEffect} from 'react';

export default function Test(props) {
  useEffect(() => {
    // fetch('https://api.giphy.com/v1/gifs/trending',)
    //   .then(response => {
    //     // console.log(response);
    //     return response.json();
    //   })
    //   .then(users => {
    //     let array = users.data;
    //     return array;
    //   })
    //   .then(info => {
    //     console.log('data is', info);
    //   })
    //   .catch(error => {
    //     console.log("error is",error);
    //   });
  }, []);

  return (
    <View style={styles.centered}>
      {/* <Image
        source={{
          uri: 'https://media4.giphy.com/media/wVtwpCNOk4juVduOte/giphy.gif?cid=151fa2efkrna6e9n57uki4qd1hra1gbfnfw5llnt0khqzxai&rid=giphy.gif'
        }}
        style={styles.tinyLogo}
      /> */}
      <Giphy url="https://media4.giphy.com/media/wVtwpCNOk4juVduOte/giphy.gif?cid=151fa2efkrna6e9n57uki4qd1hra1gbfnfw5llnt0khqzxai&rid=giphy.gif" />
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  centered: {
    justifyContent: 'center',


    borderRadius: 10,
    borderWidth: 0.1,
    // justifyContent: 'center',
    // flex:1

  },
  tinyLogo: {
    width: 400,
    height: 400,
  },
});
