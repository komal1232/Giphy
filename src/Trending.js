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
import Giphy from './component/Giphy';
const Item = ({trendingGiphy}) => (
  <>
    <Giphy url={trendingGiphy.images.downsized.url} />
  </>
  //   <Giphy url={trendingGiphy.images.original.url} />
);
export default function Trending(props) {
  const [trendingGiphy, setTrendingGiphy] = useState([]);
 // const [f, setF] = useState([]);
  useEffect(() => {
    // fetch(
    //   'https://api.giphy.com/v1/gifs/trending?api_key=kYU4UHktwbLZ6kJETdAfB23dgcOyBCLy',
    // )
    fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=kYU4UHktwbLZ6kJETdAfB23dgcOyBCLy&offset=56',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(users => {
        //  let array = users.data;

        //  return array;
        return users.data;
      })
      .then(info => {
        setTrendingGiphy(info);
        // let d = [];
        // let i = 0;
        // while (i < info.length) {
        //   d.push(info[i].images.downsized.url);
        // }
        // setF(d);
        // console.log('d is', d);
        console.log('trendingGiphy length is', info.length);
      })
      .catch(error => {
        console.log('error is ', error);
      });
  }, []);

  function renderItem({item}) {
    //console.log('item with info', item);
    return <Item trendingGiphy={item} />;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={trendingGiphy}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
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
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
