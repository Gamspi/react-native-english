import {StyleSheet} from 'react-native';
import {Backgrounds} from './variables';

export const shadows = StyleSheet.create({
  button: {
    shadowColor: Backgrounds.BLACK,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 15,
  },

  input: {
    shadowColor: Backgrounds.BLACK,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 15,
  },
});
