import {StyleSheet} from 'react-native';
import {Backgrounds, Colors} from '../../styles/variables';
import styled from 'styled-components/native';
import {Props} from './Button';

export const button = StyleSheet.create({
  gradient: {
    padding: 16,
    alignItems: 'center',
  },
});
export const ButtonContainer = styled.View`
  border-radius: 25px;
  border: 1px solid ${Backgrounds.SECONDARY_RED};
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  color: ${Colors.WHITE};
`;

export const ButtonTouch = styled.TouchableOpacity<Props>`
  margin: ${({margin}) => margin || 0};
`;
