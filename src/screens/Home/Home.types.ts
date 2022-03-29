import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootNavigation.types';

export type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};
