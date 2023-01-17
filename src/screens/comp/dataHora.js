import react, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../pages/Style';

import saturnoLogo from '../utils/circularSaturno_1.png';

export default function DataHora() {
  const [Fulltime, setFulltime] = useState();
  const [Saudacao, setSaudacao] = useState();

  //Relógio

  useEffect(() => {
    const interval = setInterval(() => {
      now = new Date();
      let horaTime = now.getHours();
      let minutoTime = now.getMinutes();

      if (minutoTime < 10) {
        minutoTime = '0' + minutoTime;
      }
      if (horaTime < 10) {
        horaTime = '0' + horaTime;
      }
      setFulltime(horaTime + ':' + minutoTime);

      //saudacao
      let SaudaBoa = '';

      if (horaTime < 10) {
        SaudaBoa = 'Bom Dia!';
      }
      if (horaTime > 12) {
        SaudaBoa = 'Boa Tarde!';
      }
      if (horaTime > 19) {
        SaudaBoa = 'Boa Noite!';
      }
      setSaudacao(SaudaBoa);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.containerInicial}>
      <Text style={styles.horaView}>{Fulltime}</Text>
      <Text style={styles.Titulo}>{Saudacao}</Text>
      <Image
        source={saturnoLogo}
        style={{
          position: 'absolute',
          right: 22,
          top: 13,
          width: 36,
          height: 23,
        }}
      />
    </View>
  );
}
