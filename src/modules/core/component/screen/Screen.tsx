import LinearGradient from 'react-native-linear-gradient';
import {StyledScreen} from './styled';
import {Backgrounds} from '../../styles/variables';

const Screen = props => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <LinearGradient
    start={{x: 1, y: 1}}
    end={{x: 0, y: 0}}
    colors={[
      Backgrounds.PRIMARY_BLACK,
      Backgrounds.SECONDARY_BLACK,
      Backgrounds.THIRD_BLACK,
    ]}
    style={{flex: 1}}>
    <StyledScreen {...props} />
  </LinearGradient>
);

export default Screen;
