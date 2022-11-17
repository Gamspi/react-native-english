import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../styles/variables';

const Header = () => {
  const style = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: Colors.BLACK,
    },
    logo: {
      fontFamily: Fonts.ARIAL,
      fontSize: 24,
      fontWeight: '700',
    },
  });
  return (
    <View style={style.container}>
      <Text style={style.logo}>My English</Text>
    </View>
  );
};

export default Header;
