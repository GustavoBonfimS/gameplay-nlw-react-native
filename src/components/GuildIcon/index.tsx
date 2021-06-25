import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export type GuildProps = {};

export function GuildIcon({ data, ...rest }: Props) {
  const uri = 'https://github.com/GustavoBonfimS.png';
  return (
    <>
      <Image source={{ uri }} style={styles.image} resizeMode="cover" />
    </>
  );
}
