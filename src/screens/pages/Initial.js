import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './Style';

import DataHora from '../comp/dataHora';
import AddTarefa from '../comp/AddTarefa';
import NullUm from '../comp/NullUm';
import NullDois from '../comp/NullDois';

export default function Initial({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 15}}></View>
      <DataHora />
      <View style={{height: 25}}></View>
      <View style={styles.containerNewTask}>
        <TouchableOpacity onPress={() => navigation.navigate('NewTask')}>
          <AddTarefa />
        </TouchableOpacity>
        <NullUm />
        <NullDois />
      </View>
      <View style={{height: 25}}></View>
    </SafeAreaView>
  );
}
