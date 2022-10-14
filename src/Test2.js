/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';

export default function Test2(props) {
  return (
    <ScrollView>
      <View style={styles.centered}>
        <Image
          source={{
            uri: 'https://media4.giphy.com/media/wVtwpCNOk4juVduOte/giphy.gif?cid=151fa2efkrna6e9n57uki4qd1hra1gbfnfw5llnt0khqzxai&rid=giphy.gif',
          }}
          style={styles.tinyLogo}
        />
        <Image
          source={{
            uri: 'https://media4.giphy.com/media/wVtwpCNOk4juVduOte/giphy.gif?cid=151fa2efkrna6e9n57uki4qd1hra1gbfnfw5llnt0khqzxai&rid=giphy.gif',
          }}
          style={styles.tinyLogo}
        />
        <Image
          source={{
            uri: 'https://media4.giphy.com/media/wVtwpCNOk4juVduOte/giphy.gif?cid=151fa2efkrna6e9n57uki4qd1hra1gbfnfw5llnt0khqzxai&rid=giphy.gif',
          }}
          style={styles.tinyLogo}
        />
        <Image
          source={{
            uri: 'https://media4.giphy.com/media/wVtwpCNOk4juVduOte/giphy.gif?cid=151fa2efkrna6e9n57uki4qd1hra1gbfnfw5llnt0khqzxai&rid=giphy.gif',
          }}
          style={styles.tinyLogo}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  centered: {
    // flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
    // display:'flex',
    //  flexWrap:'wrap',
    //justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    margin: 2,
    //overflow: 'scroll',
  },
});
