import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const formStyles = StyleSheet.create({
  infoWrapper: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.darkGrey,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  error: {
    color: colors.red,
  },
  statusWrapper: {
    alignItems: 'center',
    minHeight: 30,
  },
  button: {
    backgroundColor: colors.white,
    borderColor: colors.darkGrey,
    borderWidth: 2,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginTop: 10,
  },
  buttonDisabled: {backgroundColor: colors.lightGrey, borderColor: colors.grey},
  btnText: {
    fontSize: 18,
    color: colors.darkGrey,
  },
});
