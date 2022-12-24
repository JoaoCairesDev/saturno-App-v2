import {View, Text, ImageBackground} from 'react-native';
import backGoundCoffe from '../../assets/backGoundCoffe.jpg';
import React from 'react';

Data = new Date();

import styles from './style';

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.InitialContainerImage}
        source={backGoundCoffe}
        resizeMode="cover"
        imageStyle={styles.image}>
        <View style={styles.InitialContainer}>
          <Text style={styles.UserName}>Olá João</Text>
          <Text style={styles.DataFormat}>
            {Data.getDate()} / {Data.getMonth()} / {Data.getFullYear()}
          </Text>
        </View>
      </ImageBackground>

      <View>
        <Text>container 2 </Text>
      </View>
      <View>
        <Text>Container 3</Text>
      </View>
    </View>
  );
}
