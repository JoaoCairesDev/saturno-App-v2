import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import styles from '../pages/Style';
import BookMark from '../utils/addBookmark_1.png';

export default function AddTarefa({navigation}) {
  return (
    <View style={styles.containerQuadrado}>
      <Text style={styles.TextBlack}>Adicionar Tarefa</Text>
      <Image
        source={BookMark}
        style={{
          position: 'absolute',
          right: 12,
          bottom: 13,
          width: 27,
          height: 32,
        }}
      />
    </View>
  );
}
