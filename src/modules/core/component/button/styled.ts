import {StyleSheet} from 'react-native';
import {Backgrounds} from '../../styles/variables';
import styled from 'styled-components/native';

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
