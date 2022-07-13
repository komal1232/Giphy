import React from 'react';
import {useEffect, useState, Fla} from 'react';
import {FlatList} from 'react-native';

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
export default function Trending(props) {
  const [trendingGiphy, setTrendingGiphy] = useState([]);
  const [robots, setRobots] = useState([]);

  useEffect(() => {
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
        setTrendingGiphy(info);
        console.log('trendingGiphy is', trendingGiphy);
      });
  }, []);

  function renderItem({item}) {
    //console.log('item with info', item);
    return <Item trendingGiphy={item} />;
  }
  return (
    <View style={styles.centered}>
      <FlatList
        data={trendingGiphy}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  stretch: {
    width: 200,
    height: 200,
    borderWidth: 0,
    marginBottom: 0,
  },
});
