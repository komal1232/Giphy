import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default function Giphy(props) {
  return (
    <>
      {/* <View style={styles.stretch}> */}
      <Image
        style={styles.stretch}
        source={{
          uri: props.url,
        }}
      />
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200,
    borderWidth: 0,
    marginBottom: 0,
  },
});
