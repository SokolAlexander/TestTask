import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const homeStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: colors.white,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.darkGrey,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  btnText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.darkGrey,
  },
});
