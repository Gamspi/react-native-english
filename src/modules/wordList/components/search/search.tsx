import React from 'react';
import {View} from 'react-native';
import Input from '../../../addWord/components/Input/input';
type Props = {
  searchValue: string;
  setSearchValue: React.Dispatch<string>;
};
const Search = ({searchValue, setSearchValue}: Props) => {
  return (
    <View>
      <Input
        placeholder="Search"
        value={searchValue}
        onChangeText={setSearchValue}
      />
    </View>
  );
};

export default Search;
