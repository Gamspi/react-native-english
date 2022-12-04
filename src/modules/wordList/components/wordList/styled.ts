import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Backgrounds} from '../../../core/styles/variables';

export const WordListContainer = styled.FlatList`
  max-height: 100%;
  height: 100%;
`;
export const styles = StyleSheet.create({
  search: {
    padding: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10,
    backgroundColor: Backgrounds.THIRD_BLACK,
  },
});
