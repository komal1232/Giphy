import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default function Giphy(props) {
  return (
    <>
      {/* <View style={styles.stretch}> */}
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={{
            uri: props.url,
          }}
        />
      </View>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 370,
    height: 370,
  },
  container: {
   //flex: 2,
   // flexDirection: 'column',
    margin: 10,
    //borderRadius: 10,
  },
});
