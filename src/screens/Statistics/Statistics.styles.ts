import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const statStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 22,
    color: colors.black,
    textAlign: 'center',
  },
  subParag: {
    marginVertical: 0,
  },
  bold: {
    fontWeight: 'bold',
  },
  line: {
    flexDirection: 'row',
    marginVertical: 20,
  },
});
