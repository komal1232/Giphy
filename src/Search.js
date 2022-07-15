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
  FlatList,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Item = ({trendingGiphy}) => (
  <View>
    <Image
      style={styles.stretch}
      source={{
        uri: trendingGiphy.images.original.url,
      }}
    />
  </View>
);
export default function Search(props) {
  const [textToSearch, setTextToSearch] = React.useState('search..');
  const [searchedData, SetSearchedData] = React.useState([]);
  function onChangeText(event) {
    console.log('event is', event);
    fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=kYU4UHktwbLZ6kJETdAfB23dgcOyBCLy',
    )
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(users => {
        let array = users.data;
        return array;
      })
      .then(info => {
        SetSearchedData(info);
        console.log('trendingGiphy is', searchedData);
      });
  }


  function renderItem({item}) {
    //console.log('item with info', item);
    return <Item trendingGiphy={item} />;
  }
  return (
    <View style={styles.centered}>
      <TextInput
        style={styles.input}
        placeholder="search here.."
        // value={textToSearch}
        onChangeText={onChangeText}
      />
      <FlatList
        data={searchedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
