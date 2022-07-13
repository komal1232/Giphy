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
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default function Search(props) {
  // onChangeText (event)=>{
  //   console.log("event is",event);
  // };

  const [textToSearch, setTextToSearch] = React.useState('search..');
  const [searchedData, SetSearchedData] = React.useState([]);
  return (
    <View style={styles.centered}>
      <TextInput
        style={styles.input}
        placeholder="search here.."
        // value={textToSearch}
        // onChangeText={onChangeText}
      />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 20,
    borderStartWidth: 3,
    padding: 10,

  },
});
