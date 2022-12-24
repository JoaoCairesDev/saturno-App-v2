import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

export default function SettingsScreen() {
  Data = new Date();
  return (
    <View style={styles.Container}>
      <Text>
        {Data.getDate()} / {Data.getMonth()} / {Data.getFullYear()}
      </Text>
    </View>
  );
}
