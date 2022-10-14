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
  useEffect(() => {
    fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=kYU4UHktwbLZ6kJETdAfB23dgcOyBCLy&offset=56&limit=1000&ratin=r',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

      },
    )
      .then(response => {
        return response.json();
      })
      .then(users => {
        return users.data;
      })
      .then(info => {
        setTrendingGiphy(info);
        console.log('trendingGiphy length is', info.length);
      })
      .catch(error => {
        console.log('error is ', error);
      });
  }, []);

  function renderItem({item}) {
    return <Item trendingGiphy={item} />;
  }
  return (
    <>
      <SafeAreaView>
        <View
          style={{
            //flex: 1,
            //  padding: 20,
            //flexDirection: "column",
            borderRadius: 10,
            borderWidth: 0.1,
            justifyContent: 'center',
            //alignContent:'center',
          }}>
          {/* <SafeAreaView> */}
          <FlatList
            data={trendingGiphy}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // numColumns={2}
          />
          {/* </SafeAreaView> */}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
