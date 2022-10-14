import React from 'react';
import {useEffect, useState, Fla} from 'react';
import {FlatList, TextInput} from 'react-native';
const key = 'kYU4UHktwbLZ6kJETdAfB23dgcOyBCLy';
const _key = 'api_key=';
// const limit = 3;
const _limit = 'limit=';
const _rating = 'rating=';
const baseUrl = 'https://api.giphy.com/v1/gifs/trending?';
const _offset = 'offset=';
const _And = '&';

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
);
export default function Trending(props) {
  const [trendingGiphy, setTrendingGiphy] = useState([]);
  const [rating, setRating] = useState('g');
  const [offset, setOffset] = useState(56);
  const [limit, setLimit] = useState(10);
  // const [url, setUrl] = useState(
  //   'https://api.giphy.com/v1/gifs/trending?api_key=kYU4UHktwbLZ6kJETdAfB23dgcOyBCLy&offset=56&limit=1000&rating=r',
  // );
  useEffect(() => {
    const x =
      baseUrl +
      _key +
      key +
      _And +
      _limit +
      limit +
      _And +
      _offset +
      offset +
      _And +
      _rating +
      rating;
    console.log('url is', x);
    fetch(x, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
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
  }, [rating, offset, limit]);

  function renderItem({item}) {
    return <Item trendingGiphy={item} />;
  }
  return (
    <>
      <View style={styles.inputBoxStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="rating.."
          onChangeText={newText => setRating(newText)}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="offset.."
          onChangeText={newText => setOffset(newText)}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="limit.."
          onChangeText={newText => setLimit(newText)}
        />
      </View>
      <SafeAreaView>
        <View
          style={{
            //flex: 1,
            //  padding: 20,
            //flexDirection: "column",
           // borderRadius: 10,
            borderWidth: 0.5,
            justifyContent: 'center',
            borderColor: '#701c3f',
            //alignContent:'center',
            //overflow:'hidden'
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

const styles = StyleSheet.create({
  textInputStyle: {
    height: 35,
    width: 44,
    //flex: 1,
    backgroundColor: '#e685ad',
   // borderRadius: 10,
    margin: 10,
  },
  inputBoxStyle: {
//display: 'flex',
    //flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#f5dfe8',
    flexDirection: 'row',
   // borderRadius: 10,
    borderWidth:0.2,
    borderColor: '#701c3f',
  },
});
