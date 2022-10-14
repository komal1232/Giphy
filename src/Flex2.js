/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

export default function Flex2(props) {
  return (
    <ScrollView>
      <View style={styles.centered}>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo2}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo2}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo2}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
        <Text style={styles.tinyLogo}>hii komal</Text>
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
    // flexDirection: 'row',
    display:'flex',
    alignItems: 'center',
  },
  tinyLogo: {
    borderWidth: 2,
   // width: '50%',
   // height: 200,

    // margin: 2,
    //overflow: 'scroll',
    flex:1
  },
  tinyLogo2: {
    borderWidth: 2,
   // width: '50%',
   // height: 200,

    // margin: 2,
    //overflow: 'scroll',
    flex:10
  },
});
